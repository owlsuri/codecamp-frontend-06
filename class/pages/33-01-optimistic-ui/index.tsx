import { gql, useMutation, useQuery } from "@apollo/client"

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId:$boardId){
            _id
            likeCount
        }
    }
`

const LIKE_BOARD = gql`
    mutation likeBoard($boardId: ID!){
        likeBoard(boardId: $boardId)
    }
`

export default function OptimisticUIPage(){
 
    const {data} = useQuery(FETCH_BOARD,{
        variables:{ boardId: "6263f038a8255b002988c134"},
    })
    
    const [likeBoard] = useMutation(LIKE_BOARD)

    const onClickOptimisticUI = async () => {
        await likeBoard({
            variables:{ boardId : "6263f038a8255b002988c134" },
            // 리페치쿼리 - 두번요청
            // refetchQueries:[
            //     {
            //         query: FETCH_BOARD,
            //         variables : { boardId : "6263f038a8255b002988c134" },
            //     },
            // ],

            // cache state 직접 수정하는 방법과 함께 쓸 수 있음
            optimisticResponse:{
                // 여기서 쓴 값은 아래 data. 으로 들어감
                likeBoard : (data?.fetchBoard.likeCount || 0 ) +1,
                // 기존에 있던 값 (없으면 0) +1
            },
            // cache state 직접 수정하는 방법
            update(cache, {data}){
                cache.writeQuery({
                    query :FETCH_BOARD,
                    variables:{boardId: "6263f038a8255b002988c134" },
                    data:{
                        fetchBoard:{
                            _id : "6263f038a8255b002988c134",
                            __typename: "Board",
                            // 위 두개 필수입력 이걸로 글로벌스테이트에서 구별
                            likeCount : data.likeBoard,
                        }
                    }
                })

            }
        })

    }
    
    return(
        <div>
            <h1>Optimistic UI</h1>
            <div>현재카운트(좋아요): {data?.fetchBoard.likeCount}</div>
            <button onClick={onClickOptimisticUI}>좋아요 올리기</button>
        </div>
    )
}