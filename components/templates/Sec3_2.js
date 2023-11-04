import React from "react";
import styled from "styled-components";

const Sec3 = () => {
  const innerText_pc =
    "플필에는 약 2만여명의 배우들이 <br />캐스팅을 기다리고 있습니다.";
  const innerText_mo =
    "플필에는<br />약 2만여명의 배우들이<br />캐스팅을 기다리고 있습니다.";

  return (
    <Wrapper>
      <Div>
        <Sec3_Container>
          <WrapperBack>
            <Inner>
              <Sec3_InnerText_pc
                dangerouslySetInnerHTML={{ __html: innerText_pc }}
              />

              <Sec3_InnerText_mo
                dangerouslySetInnerHTML={{ __html: innerText_mo }}
              />
            </Inner>
          </WrapperBack>
        </Sec3_Container>
      </Div>
      <Sec3_img>
        <ImgDiv1>
          <InnerImg_big
            src="/assets/image/sec3/sec3_img_big.png"
            alt="Korean actor casting platform Plfil"
          />
        </ImgDiv1>
        <Div2Wrapper>
          <ImgDiv2>
            <InnerImg_small
              src="/assets/image/sec3/sec3_sub1.png"
              alt="Korean actor casting platform Plfil"
            />

            <InnerImg_small
              src="/assets/image/sec3/sec3_sub2.png"
              alt="Korean actor casting platform Plfil"
            />

            <InnerImg_small
              src="/assets/image/sec3/sec3_sub3.png"
              alt="Korean actor casting platform Plfil"
            />

            <InnerImg_small
              src="/assets/image/sec3/sec3_sub4.png"
              alt="Korean actor casting platform Plfil"
            />

            <InnerImg_small
              src="/assets/image/sec3/sec3_sub5.png"
              alt="Korean actor casting platform Plfil"
            />

            <InnerImg_small
              src="/assets/image/sec3/sec3_sub6.png"
              alt="Korean actor casting platform Plfil"
            />
          </ImgDiv2>
        </Div2Wrapper>
      </Sec3_img>
    </Wrapper>
  );
};

const Div = styled.div`
  width: 100%;
  height: 588px;
  position: relative;
  z-index: 1;

  @media (max-width: 1080px) {
    height: 459px;
    background-color: pink;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  // mobile 버전
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 0;
    background-color: yellow;
  }
`;

const WrapperBack = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 364px;
  z-index: 2;
  background: linear-gradient(180deg, #000 9.21%, rgba(0, 0, 0, 0) 100%);

  @media (max-width: 1080px) {
    justify-content: center;
    height: 244px;
  }
`;

const Inner = styled.div`
  padding: 80px 60px 0 88px;
  z-index: 5;
  @media (max-width: 1080px) {
    padding: 28px 0 0 0;
  }
`;

const Sec3_Container = styled.div`
  position: relative; /* container를 상대 위치로 설정 */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 160px;
  width: 100%;
  height: 364px;
  background: url("/assets/image/sec3/sec3_img_bg.png") no-repeat;
  background-position: 90% 30%;

  @media (max-width: 1080px) {
    align-items: center;
    margin: 0;
    width: 100%;
    height: 240px;
    background-size: 200%;
    background-position: 50% 25%;
    background-color: blue;
  }
`;

const Sec3_img = styled.div`
  position: absolute;
  display: flex;
  margin: 356px 0 0 88px;
  flex-direction: row;
  height: 232px;
  align-items: flex-end;
  z-index: 5;

  // mobile 버전
  @media (max-width: 1080px) {
    margin: 187px 0 0 0;
    /* padding-left: 12px; */
    padding: 0 12px;
    flex-direction: column;
    height: auto;
    width: 100%;
    align-items: flex-start;
    background-color: yellow;
    /* display: none; */
  }
`;

const ImgDiv1 = styled.div``;
const ImgDiv2 = styled.div`
  @media (max-width: 1080px) {
    padding: 0;
    width: 100%;
    white-space: nowrap;
    overflow-x: hidden;
    background-color: pink;
    /* &::-webkit-scrollbar {
      display: none;
    } */
  }
`;

const Div2Wrapper = styled.div`
  @media (max-width: 1080px) {
    width: auto;
    // overflow-x: auto; /* 가로 스크롤 가능하도록 설정 */
    //white-space: nowrap; /* 요소들을 한 줄로 배치 */
    //width: 100%; 너비를 100%로 설정
  }
`;

const InnerImg_big = styled.img`
  width: 232px;
  border-radius: 2px;
  margin-right: 12px;
  // mobile 버전
  @media (max-width: 1080px) {
    width: 160px;

    margin: 0;
  }
`;

const InnerImg_small = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 2px;
  margin-right: 12px;
  display: inline-block;
  &:last-child {
    margin-right: 0;
  }

  // mobile 버전
  /* mobile 버전 */
  @media (max-width: 1080px) {
    margin-right: 12px; /* 오른쪽 마진 추가 */
  }
`;

const Sec3_InnerText_pc = styled.h2`
  display: flex;
  color: #fff;
  text-align: right;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 502px;

  @media (max-width: 1080px) {
    display: none;
  }
`;

const Sec3_InnerText_mo = styled.h2`
  display: none;
  // mobile 버전
  @media (max-width: 1080px) {
    font-weight: 700;
    color: white;
    display: flex;
    width: 312px;
    height: 99px;
    font-size: 28px;
    line-height: 33.41px;
    text-align: center;
  }
`;

export default Sec3;
