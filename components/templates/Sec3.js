import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import { Fade } from "react-reveal";

const Sec3 = () => {
  const images = [
    "/assets/image/sec3/sec3_sub1.png",
    "/assets/image/sec3/sec3_sub2.png",
    "/assets/image/sec3/sec3_sub3.png",
    "/assets/image/sec3/sec3_sub4.png",
    "/assets/image/sec3/sec3_sub5.png",
    "/assets/image/sec3/sec3_sub6.png",
    "/assets/image/sec3/sec3_sub1.png",
    "/assets/image/sec3/sec3_sub2.png",
    "/assets/image/sec3/sec3_sub3.png",
    "/assets/image/sec3/sec3_sub4.png",
    "/assets/image/sec3/sec3_sub5.png",
    "/assets/image/sec3/sec3_sub6.png",
  ];
  const breakpoints = [
    // slideToshow를 설정했을때 반응형에서 간격이 안맞아서 화면크기별로 재설정해주는 방향으로 구현했습니다.
    { breakpoint: 1080, slidesToShow: 8 },
    { breakpoint: 900, slidesToShow: 7 },
    { breakpoint: 800, slidesToShow: 6 },
    { breakpoint: 700, slidesToShow: 5 },
    { breakpoint: 580, slidesToShow: 4 },
    { breakpoint: 480, slidesToShow: 3 },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: breakpoints.map(({ breakpoint, slidesToShow }) => ({
      breakpoint,
      settings: {
        slidesToShow,
        slidesToScroll: 1,
        infinite: true,
      },
    })),
  };

  const innerText_pc =
    "PLFIL has a directory of over 20,000 actors<br/>awaiting for your casting call..";

  const innerText_mo =
    "PLFIL has a directory of<br/>over 20,000 actors<br/>awaiting for your casting call..";

  return (
    <Wrapper>
      <Div>
        <Sec3_Container>
          <Sec3_InnerText_mo
            dangerouslySetInnerHTML={{ __html: innerText_mo }}
          ></Sec3_InnerText_mo>
          <PC_Text>
            <Sec3_InnerText
              dangerouslySetInnerHTML={{ __html: innerText_pc }}
            ></Sec3_InnerText>
          </PC_Text>

          <Sec3_img>
            <MoDiv>
              <InnerImg_big
                src="/assets/image/sec3/sec3_img_big.png"
                alt="Korean actor casting platform Plfil"
              />
            </MoDiv>
            <MoDiv2>
              <Slider {...settings}>
                {images.map((src, index) => (
                  <ImageWrapper key={index}>
                    <InnerImg_small
                      key={index}
                      src={src}
                      alt={`Korean actor casting platform Plfil - Slide ${
                        index + 1
                      }`}
                    />
                  </ImageWrapper>
                ))}
              </Slider>
            </MoDiv2>
          </Sec3_img>
        </Sec3_Container>
      </Div>
    </Wrapper>
  );
};

const ImageWrapper = styled.div`
  padding-bottom: 1px;
  width: 100px;
  height: 100px;
  border-radius: 2px;
  margin-right: 10px;
  overflow: hidden;

  &:focus {
    outline: none; // 클릭 시 생기는 border 제거
  }
`;

const PC_Text = styled.div`
  width: 936px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;

  // mobile 버전
  @media (max-width: 1080px) {
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    padding: 0;
  }
`;
const Div = styled.div`
  width: 100%;
  height: 588px;
  position: relative;

  @media (max-width: 1080px) {
    height: 459px;
  }
`;
const Sec3_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 160px;
  padding: 80px 60px 0 88px;
  width: 100%;
  height: 390px;
  background: linear-gradient(180deg, #000 9.21%, rgba(0, 0, 0, 0) 100%),
    url("/assets/image/sec3/sec3_img_bg.png") no-repeat;

  // mobile 버전
  @media (max-width: 1080px) {
    align-items: center;
    margin: 0;
    padding: 28px 0 0;
    width: 100%;
    height: 240px;
    background-size: 200%;
    background-position: 50% 25%;
  }
`;

const Sec3_img = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 20px;
  height: 232px;

  // mobile 버전
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    height: auto;
    width: 100%;
  }
`;

const MoDiv = styled.div`
  @media (min-width: 1081px) {
    align-items: flex-end;
    height: 100%;
  }
`;
const MoDiv2 = styled.div`
  @media (min-width: 1081px) {
    height: 100px;
    padding: 0px;
    width: 660px;
    white-space: nowrap;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media (max-width: 1080px) {
    padding: 0 12px;
    width: 100%;
    white-space: nowrap;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const InnerImg_big = styled.img`
  width: 232px;
  border-radius: 2px;
  margin-right: 12px;

  // mobile 버전
  @media (max-width: 1080px) {
    width: 160px;
    padding: 60px 0 0 12px;
    margin: 0;
  }
`;

const InnerImg_small = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 2px;
  margin-right: 12px;

  &:last-child {
    margin-right: 0;
  }
`;

const Sec3_InnerText = styled.h2`
  display: flex;
  align-items: flex-end;
  width: auto;
  height: auto;
  color: #fff;
  text-align: right;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  // mobile 버전
  @media (max-width: 1080px) {
    display: none;
  }
`;

const Sec3_InnerText_mo = styled.h2`
  display: none;

  // mobile 버전
  @media (max-width: 1080px) {
    display: flex;
    align-items: flex-end;
    color: white;
    width: auto;
    height: auto;
    line-height: normal;
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }
`;

export default Sec3;
