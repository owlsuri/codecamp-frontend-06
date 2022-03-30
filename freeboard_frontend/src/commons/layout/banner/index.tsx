// Banner
import styled from "@emotion/styled"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function LayoutBanner(){

    const Wrapper=styled.div`
        height: 300px;
        background-color: #ffe77c;
    `

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
        };

    return(
        <Wrapper>
            <div>
                <Slider {...settings}>
                <div>
                    <img src="/images/mono1.png"/>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                </Slider>
            </div>
        </Wrapper>
    )
}