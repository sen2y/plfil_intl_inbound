import React from "react";
import styled from "styled-components";
import useIsMobile from "../../libs/useIsMobile";

const Sec3 = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Sec3_Container>
        <Sec3_img
          src={
            isMobile
              ? "/assets/image/sec3/sec3_img1_mo.png"
              : "/assets/image/sec3/sec3_img1.png"
          }
          alt="Korean actor casting platform Plfil"
        ></Sec3_img>
        {isMobile ? (
          <Sec3_InnerText>
            플필에는
            <br />약 2만여명의 배우들이
            <br />
            캐스팅을 기다리고 있습니다.
          </Sec3_InnerText>
        ) : (
          <Sec3_InnerText>
            플필에는 약 2만여명의 배우들이
            <br />
            캐스팅을 기다리고 있습니다.
          </Sec3_InnerText>
        )}
      </Sec3_Container>
      {isMobile ? (
        <Sec3_MoImgContainer>
          <Sec3_MoImg
            src="/assets/image/sec3/sec3_sub1.png"
            alt="Korean actor casting platform Plfil"
          />
          <Sec3_MoImg
            src="/assets/image/sec3/sec3_sub2.png"
            alt="Korean actor casting platform Plfil"
          />
          <Sec3_MoImg
            src="/assets/image/sec3/sec3_sub3.png"
            alt="Korean actor casting platform Plfil"
          />
          <Sec3_MoImg
            src="/assets/image/sec3/sec3_sub4.png"
            alt="Korean actor casting platform Plfil"
          />
          <Sec3_MoImg
            src="/assets/image/sec3/sec3_sub5.png"
            alt="Korean actor casting platform Plfil"
          />
          <Sec3_MoImg
            src="/assets/image/sec3/sec3_sub6.png"
            alt="Korean actor casting platform Plfil"
          />
        </Sec3_MoImgContainer>
      ) : null}

      <Sec3_Text>
        플필을 통해
        <br />
        원하시는 배우들을 캐스팅 해보세요!
      </Sec3_Text>
      <Sec3_Btn>캐스팅 문의</Sec3_Btn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 1440px;
  height: 1312px;

  // mobile 버전
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    margin-bottom: 200px;
  }
`;

const Sec3_Container = styled.div`
  position: absolute;
  top: 1933px;
  width: 1080px;
  height: 428px;

  // mobile 버전
  @media (max-width: 768px) {
    position: relative;
    margin-top: 100px;
    top: 0px;
    width: 343px;
    height: 347px; //500px;
    /* background-color: blue; */
  }
`;

const Sec3_img = styled.img``;

const Sec3_MoImgContainer = styled.div`
  // mobile 버전
  @media (max-width: 768px) {
    position: relative;
    top: 0px;
    width: calc(100% - 28px); /* 전체 너비에서 28px을 뺀 너비 사용 */
    height: 100px;
    margin-top: 12px;
    white-space: nowrap; /* 컴포넌트들이 가로로 나란히 위치하게 함 */

    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Sec3_MoImg = styled.img`
  // mobile 버전
  @media (max-width: 768px) {
    position: relative;
    top: 0px;
    width: 100px;
    height: 100px;
    border-radius: 2px;
    &:not(:last-child) {
      margin-right: 12px; /* 마지막 요소가 아닌 경우에만 간격을 12px로 설정 */
    }
  }
`;

const Sec3_InnerText = styled.h2`
  position: absolute;
  width: 502px;
  height: 96px;
  top: 80px;
  left: 518px;
  font-weight: 700;
  font-size: 40px;
  line-height: 47.73px;
  text-align: right;
  color: white;

  // mobile 버전
  @media (max-width: 768px) {
    top: 25px;
    width: 343px;
    height: 99px;
    left: 0;
    font-size: 28px;
    line-height: 33.41px;
    text-align: center;
  }
`;

const Sec3_Text = styled.div`
  width: 670px;
  height: 114px;
  position: absolute;
  top: 2621px;
  text-align: center;
  font-weight: 800;
  font-size: 48px;
  line-height: 57.28px;
  font-style: normal;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);

  // mobile 버전
  @media (max-width: 768px) {
    position: relative;
    top: 0px;
    margin-top: 140px;
    width: 257px;
    height: 129px;
    font-size: 36px;
    line-height: 42.96px;
    text-align: center;
  }
`;

const Sec3_Btn = styled.button`
  width: 280px;
  height: 57px;
  position: absolute;
  top: 2787px;
  gap: 10px;
  padding: 12px 40px;
  border-radius: 2px;
  background: transparent;
  border: none;
  color: white;
  background-image: linear-gradient(93.27deg, #ff1744 0%, #ff4512 100%);
  cursor: pointer;
  font-weight: 700;
  font-size: 28px;
  line-height: 33.41px;
  text-align: center;

  // mobile 버전
  @media (max-width: 768px) {
    position: relative;
    top: 0px;
    margin-top: 40px;
    width: 342px;
    text-align: center;
  }
`;

export default Sec3;
