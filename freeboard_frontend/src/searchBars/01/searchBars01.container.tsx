// 검색 컨테이너
import _  from 'lodash'
import { ChangeEvent } from 'react';
import Searchbars01UI from './searchBars01.presenter';

export default function SearchBars01(props){
    
    const getDebounce = _.debounce((data:any)=>{
        props.refetch({ search: data, page : 1 })
        props.refetchBoardsCount({ search: data });
        props.onChangeKeyword(data)
    }, 200)
    
    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        getDebounce(event.target.value)
    }

    return <Searchbars01UI onChangeSearch={onChangeSearch} />;
}