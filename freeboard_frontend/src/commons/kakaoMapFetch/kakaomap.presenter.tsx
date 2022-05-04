import styled from '@emotion/styled';

const BlockLo=styled.div`
display: flex;
`
export default function KakaoMapFetchUI(){

  return(
        <BlockLo>
        <div>
          <div id="map" style={{ width: "1000px", height: "548px" }}></div>
        </div>
       </BlockLo>
  )
}