// 게시물 수정 페이지

import MarketWrite from "../../../../src/components/units/market/marketWrite/marketWrite.container";


export default function BoardsEditPage(props) {
  return <MarketWrite isEdit={true} data={props.data} />;
}