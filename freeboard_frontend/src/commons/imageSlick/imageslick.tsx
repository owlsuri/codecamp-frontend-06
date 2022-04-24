import Slider from "react-slick";
import styled from "@emotion/styled";


const Img = styled.img`
width: 500px;
height: 400px;
padding-right: 0px;
`

export default function ImgSlick(props){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return(
      <div>
        <Slider {...settings}>
          <div>
            <Img src={props.data?.fetchUseditem.images[0] ? `https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}` : "/images/noimage.png"}/>
          </div>
          <div>
            <Img src={props.data?.fetchUseditem.images[1] ? `https://storage.googleapis.com/${props.data?.fetchUseditem.images[1]}` : "/images/noimage.png"}/>
          </div>
          <div>
            <Img src={props.data?.fetchUseditem.images[2] ? `https://storage.googleapis.com/${props.data?.fetchUseditem.images[2]}` : "/images/noimage.png"}/>
          </div>
        </Slider>
      </div>

    )
}