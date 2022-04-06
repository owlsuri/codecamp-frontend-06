
import { Board } from './Board.postgres';
import { ApolloServer, gql } from 'apollo-server'
import { DataSource } from 'typeorm';


// 1. 타입
const typeDefs = gql`
    input createBoardInput {
        writer:String
        title:String
        contents:String
    }
    type Board{
        number: Int
        writer: String
        title: String
        contents: String    
    }
    type Query {
        fetchBoards: [Board]
    }

    type Mutation {
    # createBoard(writer:String, title: String, contents: String) : String 연습용(example)
    createBoard(createBoardInput: createBoardInput!) : String # - 실제 사용(backend06)
    }
`;

// 2. API
const resolvers = {
    Query: {
        fetchBoards: async () => {
            const result = await Board.find();
            return result
            //데이터베이스에 접속해서 게시물 가져오기
            return "게시물을 조회했습니다. !!";
        },
    },

    Mutation: {
        //데이터베이스에 접속해서 게시물 등록하기
        createBoard: async (_:any, args:any) => {

            const result = await Board.insert({
                // writer: args.cerateBoardInput.writer,
                // title: args.cerateBoardInput.title,
                // contents: args.cerateBoardInput.contents
                ...args.createBoardInput,
            });

             return "게시물을 등록했습니다 !!";
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors:true
});

const AppDataSource = new DataSource({
    type: "postgres",
    host: "34.64.209.164",
    port: 5432,
    username: "postgres",
    password: "postgres2021",
    database: "postgres",
    entities: [Board],
    synchronize: true,
    logging: true,
});
AppDataSource.initialize()
    .then(() => {
        console.log("연결성공");
        //백엔드 API 를 오픈-리슨 (24시간 동안 접속 가능하게끔 대기상태로 만들어주기 )(listen().then(()) << then 성공했으면)
        server.listen(4000).then(({ url }) => {
            console.log(`🚀 Server reaDy at ${url}`);
        });
    })
    .catch(() => {
        console.log("다시...");
    });