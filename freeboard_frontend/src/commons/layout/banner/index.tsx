// Banner
import styled from "@emotion/styled"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function LayoutBanner(){

    const Wrapper=styled.div`
        height: 350px;
        background-color:white;
    `

        const Img=styled.img`
        height: 250px;
        background-color: #ffe77c;
    `

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear"
        };

    return(
        <Wrapper>
            <div>
                <Slider {...settings}>
                <div>
                    <Img src="/images/mono1.jpg"/>
                </div>
                <div>
                    <Img src="/images/mono.jpg"/>
                </div>
                <div>
                    <Img src="/images/mono3.jpg"/>
                </div>
                <div>
                    <Img src="/images/mono2.jpg"/>
                </div>
                <div>
                    <Img src="/images/mono4.jpg"/>
                </div>
                <div>
                    <Img src="/images/mono5.jpg"/>
                </div>
                <div>
                    <Img src="/images/mono4.jpg"/>
                </div>
                <div>
                    <Img src="/images/mono2.jpg"/>
                </div>

                </Slider>
            </div>
        </Wrapper>
    )
}