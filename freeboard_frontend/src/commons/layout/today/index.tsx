import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { basket, basketaaa, watch } from "../../store";

const Wrapper=styled.div`
    
`
const Title=styled.div`
    padding-top: 15px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    width: 150px;
`
const Boxes=styled.div`
padding: 20px 20px 0px 35px;
`
const Box=styled.img`
width: 85px;
height: 85px;
background-color: gray;
cursor: pointer;
`

export default function Today(){
    
    const router = useRouter()
    const [watchItems, setWatchItems] = useRecoilState(watch);

    useEffect(() => {
        const aaa = JSON.parse(localStorage.getItem("watch") || "[]");
        const bbb = aaa.slice(0, 3);
        console.log(bbb);
        setWatchItems(bbb);
    }, []);

    const onClickToDetail = (event) => {
        router.push(`/market/${event.currentTarget.id}`)
    }
   

    return(       
        <Wrapper>
            <Title>최근 본 상품</Title> 
            {watchItems.map((el, i)=>(
                <Boxes key={i} id={el._id} onClick={onClickToDetail}>
                    
                {el.images[0] ? (
                            <Box src={`https://storage.googleapis.com/${el.images[0]}`} />
                        ) : (
                            <Box src="/noimage.png" />
                        )}



                </Boxes>                
            ))}
        </Wrapper>
    )
}

