import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { publicBikeState } from "../../../../commons/store";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function BikeMap() {
  const [publicBike] = useRecoilState(publicBikeState);

  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=f2354913af21df03ad4d0ed912052c38&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.5666805, 126.9784147), // 지도의 중심좌표
          level: 6, // 지도의 확대 레벨
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        const positions = [];

        publicBike.data?.rentBikeStatus.row.map((el) =>
          positions.push({
            parkingBike: el.parkingBikeTotCnt,
            stationName: el.stationName,
            latlng: new window.kakao.maps.LatLng(
              el.stationLatitude,
              el.stationLongitude
            ),
          })
        );

        // 마커 이미지의 이미지 주소입니다
        const imageSrc = "/images/placeholder.png";

        for (let i = 0; i < positions.length; i++) {
          // 마커 이미지의 이미지 크기 입니다
          const imageSize = new window.kakao.maps.Size(40, 40);

          // 마커 이미지를 생성합니다
          const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize
          );

          // 마커를 생성합니다
          const marker = new window.kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            image: markerImage, // 마커 이미지
          });

          const content = `<div style="padding:10px 0;background-color:#213e6d;"><div style="width:250px;text-align:center;font-size:16px;font-weight:600;color:#ffcd2f;">${positions[i].stationName}</div><div style="text-align:center;color:#ffffff">남은 따릉이 <span style="font-weight:700; font-size:large;color:red">${positions[i].parkingBike}</span>대</div></div>`;

          // 마커에 표시할 인포윈도우를 생성합니다
          const infowindow = new window.kakao.maps.InfoWindow({
            content, // 인포윈도우에 표시할 내용
          });

          // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
          // 이벤트 리스너로는 클로저를 만들어 등록합니다
          // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
          window.kakao.maps.event.addListener(
            marker,
            "mouseover",
            makeOverListener(map, marker, infowindow)
          );
          window.kakao.maps.event.addListener(
            marker,
            "mouseout",
            makeOutListener(infowindow)
          );
        }
        // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
        function makeOverListener(map, marker, infowindow) {
          return function () {
            infowindow.open(map, marker);
          };
        }

        // 인포윈도우를 닫는 클로저를 만드는 함수입니다
        function makeOutListener(infowindow) {
          return function () {
            infowindow.close();
          };
        }
      });
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "1000px",
        height: "700px",
      }}
    ></div>
  );
}
