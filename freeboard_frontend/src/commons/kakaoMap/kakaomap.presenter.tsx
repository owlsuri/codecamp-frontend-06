import styled from '@emotion/styled';

const BlockLo=styled.div`
display: flex;
`

export default function KakaoMapUI(props){

  return(
        <BlockLo>
        <div>
          <div id="map" style={{ width: "384px", height: "252px" }}></div>
        </div>
       </BlockLo>
  )
}