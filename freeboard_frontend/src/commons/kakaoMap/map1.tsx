import { useEffect, useState } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function MapPage(){

        const [lat, setLat] = useState(0);
        const [lng, setLng] = useState(0);

    useEffect(() => {
    // 👇Head안 script태그 넣었던 부분을 직접 만들기
    const script = document.createElement("script"); // <script></script>만들어짐
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=10584a7a31a2088a343cbb485b3d1668&libraries=services&autoload=false";
    document.head.appendChild(script);
    // 👇script가 로드되면 그때, 기존에있던 아래 로직 실행
    script.onload = () => {
      window.kakao.maps.load(function () {
        // v3가 모두 로드된 후, 이 콜백 함수가 실행
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.554331, 126.981101), // 지도의 중심좌표.
          level: 1, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        // 📌주소-좌표 변환 객체를 생성
        let geocoder = new window.kakao.maps.services.Geocoder();
        const marker = new window.kakao.maps.Marker(), // 클릭한 위치를 표시할 마커
          infowindow = new window.kakao.maps.InfoWindow({ zindex: 1 }); // 클릭한 위치에 대한 주소를 표시할 인포윈도우
        // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시
        // searchAddrFromCoords(map.getCenter(), displayCenterInfo);
        // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시 이벤트
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            searchDetailAddrFromCoords(
              mouseEvent.latLng,
              function (result, status) {
                if (status === window.kakao.maps.services.Status.OK) {
                  let detailAddr = !!result[0].road_address
                    ? "<div>도로명주소 : " +
                      result[0].road_address.address_name +
                      "</div>"
                    : "";
                  detailAddr +=
                    "<div>지번 주소 : " +
                    result[0].address.address_name +
                    "</div>";
                  const content =
                    '<div class="bAddr">' +
                    '<span class="title">법정동 주소정보</span>' +
                    detailAddr +
                    "</div>";
                  // 마커를 클릭한 위치에 표시
                  marker.setPosition(mouseEvent.latLng);
                  marker.setMap(map);
                  // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시
                  infowindow.setContent(content);
                  infowindow.open(map, marker);
                  setAddress(
                    !!result[0].road_address
                      ? result[0].road_address.address_name +
                          " (지번주소: " +
                          result[0].address.address_name +
                          ")"
                      : result[0].address.address_name
                  );
                }
              }
            );
            let latlng = mouseEvent.latLng;
            setLat(Number(latlng.getLat().toFixed(5)));
            setLng(Number(latlng.getLng().toFixed(5)));
          }
        );
        // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시 이벤트
        // window.kakao.maps.event.addListener(map, "idle", function () {
        //   searchAddrFromCoords(map.getCenter(), displayCenterInfo);
        // });
        function searchAddrFromCoords(coords, callback) {
          // 좌표로 행정동 주소 정보를 요청
          geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
        }
        function searchDetailAddrFromCoords(coords, callback) {
          // 좌표로 법정동 상세 주소 정보를 요청
          geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        }
      });
    };
  }, []);
}