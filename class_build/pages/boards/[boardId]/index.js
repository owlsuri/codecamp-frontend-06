import {useRouter} from 'next/router'
import Head from 'next/head'
import {gql, request} from 'graphql-request'

const FETCH_BOARD = gql`
    query fetchBoard($boardId:ID!){
        fetchBoard(boardId:$boardId){
            title 
            contents 
            images 
        }
    }
`


export default function BoardDetailPage(props){

    const router = useRouter()

    return (
      <div>
        <Head>
          <meta property="og:title" content={props.myboardData?.title}></meta>
          <meta
            property="og:description"
            content={props.myboardData?.contents}
          ></meta>
          <meta
            property="og:image"
            content={props.myboardData?.images[0]}
            // 앞에 구글도 붙여줘야 이미지 나옴
          ></meta>
        </Head>
        <div>
          안녕하세요. 게시글 상세페이지입니다! 게시글 ID는{" "}
          {router.query.boardId}입니다.
        </div>0
      </div>
    );
}

// 이 페이지는 서버사이드렌더링 할래!!
// SSR 페이지에서만 쓸 수 있음
// 이 함수가 있는 페이지만 서버사이드렌더링 됨 
export const getServerSideProps = async (context) =>{
    // 여기서 페치보드 데이터 요청

    // useQuery 못씀
    const result = await request("https://backend06.codebootcamp.co.kr/graphql", FETCH_BOARD, {boardId : context.query.boardId})  // 서버에서 받는 모든 정보는 context에 있음

    return {
      props: {
        myboardData: {
          title: result.fetchBoard.title,
          contents: result.fetchBoard.contents,
          images: result.fetchBoard.images,
        },
      },
    };

}