// 카카오지도 & 다음 포스트
import { useEffect } from 'react'

declare const window: typeof globalThis & {
    kakao: any,
    daum: any
}

export default function KakaoMapPage(){
    useEffect(()=>{
        const script = document.createElement("script")
        script.src ="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        script.src ="//dapi.kakao.com/v2/maps/sdk.js?appkey=f2354913af21df03ad4d0ed912052c38&autoload=false&libraries=services"
        document.head.appendChild(script)
        
        
        script.onload = () => {
          function sample5_execDaumPostcode() {
          
            const mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new window.daum.maps.LatLng(37.537187, 127.005476), // 지도의 중심좌표
                level: 5 // 지도의 확대 레벨
            };
            
            //지도를 미리 생성
            const map = new window.daum.maps.Map(mapContainer, mapOption);
            //주소-좌표 변환 객체를 생성
            const geocoder = new window.daum.maps.services.Geocoder();
            //마커를 미리 생성
            const marker = new window.daum.maps.Marker({
                position: new window.daum.maps.LatLng(37.537187, 127.005476),
                map: map
            });
            
            new window.daum.Postcode({
                oncomplete: function(data:any) {
                    var addr = data.address; // 최종 주소 변수
                    
            // 주소 정보를 해당 필드에 넣는다.
            document.getElementById("sample5_address").value = addr;
            // 주소로 상세 정보를 검색
            geocoder.addressSearch(data.address, function(results, status) {
                // 정상적으로 검색이 완료됐으면
                if (status === window.daum.maps.services.Status.OK) {
                    
                    let result = results[0]; //첫번째 결과의 값을 활용
                    
                    // 해당 주소에 대한 좌표를 받아서
                    let coords = new window.daum.maps.LatLng(result.y, result.x);
                    // 지도를 보여준다.
                    mapContainer.style.display = "block";
                    map.relayout();
                    // 지도 중심을 변경한다.
                    map.setCenter(coords);
                    // 마커를 결과값으로 받은 위치로 옮긴다.
                    marker.setPosition(coords)
                }
            });
        }
    }).open();
}
}
},[])

return(
    <div>
        <input type="text" id="sample5_address" placeholder="주소" />
        <input type="button" onClick={sample5_execDaumPostcode} value="주소 검색" />
        <div id="map" style={{ width:"300px", height:"300px", margin-top:"10px", display:"none" }}></div>
    </div>
    )

}

