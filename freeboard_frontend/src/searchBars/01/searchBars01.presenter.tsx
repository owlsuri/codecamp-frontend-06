// 검색 프레젠터
import * as S from './searchBars01.styles'

export default function Searchbars01UI(props){
    

    return (
        <S.Search>
          <S.SearchBox type="text" onChange={props.onChangeSearch} placeholder='제목을 검색해주세요' />
        </S.Search>
    )
}