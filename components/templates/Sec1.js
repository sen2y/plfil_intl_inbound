import React from "react";
import styled from "styled-components";

const Sec1 = () => {
  return (
    <Wrapper>
      <Sec1_Title>
        한국 배우가 필요하시다면
        <br />
        빠르게 찾아드립니다
      </Sec1_Title>

      <Container_Wrapper>
        <Sec1_Container>
          <Sec1_img
            src="/assets/image/sec1/sec1_img1.png"
            alt="Korean actor casting platform Plfil"
          />
          <Sec1_SubText>
            영어 / 일어 가능한
            <br />
            배우 리스트 보유중
          </Sec1_SubText>
        </Sec1_Container>
        <Sec1_Container>
          <Sec1_img
            src="/assets/image/sec1/sec1_img2.png"
            alt="Korean actor casting platform Plfil"
          />
          <Sec1_SubText>
            오디션 공간 대여,
            <br />
            스케쥴링 문의 가능
          </Sec1_SubText>
        </Sec1_Container>
        <Sec1_Container>
          <Sec1_img
            src="/assets/image/sec1/sec1_img3.png"
            alt="Korean actor casting platform Plfil"
          />
          <Sec1_SubText>
            캐스팅 피<br />
            출연료의 10%
          </Sec1_SubText>
        </Sec1_Container>
      </Container_Wrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 632px;
  padding: 120px 45px 80px;

  @media (max-width: 1080px) {
    display: flex;
    height: auto;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 60px 0 100px;
  }
`;
const Sec1_Title = styled.div`
  margin-bottom: 35px;
  font-weight: 700;
  font-size: 40px;
  line-height: normal;
  color: black;

  @media (max-width: 1080px) {
    width: auto;
    height: auto;
    font-weight: 700;
    font-size: 6vw; //28px;
    /* font-size: ${window.innerWidth * 0.05 > "28px" ? "5vw" : "28px"}; */
    line-height: normal;
    text-align: center;
    margin-bottom: 20px;
  }

  @media (min-width: 600px) and (max-width: 1080px) {
    font-size: 28px;
  }
`;

const Container_Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;

const Sec1_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 314px;
  height: 300px;
  margin-right: 24px;
  &:last-child {
    margin-right: 0;
  }
  /* 
  @media (max-width: 1080px) {
    margin: 0px 0px 14px 0px;
    height: 174px;

    &:last-child {
      margin-bottom: 0;
    }
  } */
  @media (max-width: 1080px) {
    width: 100%; // 전체 폭을 사용
    height: auto; // 높이를 자동으로 조절
    margin: 0px 0px 14px 0px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Sec1_img = styled.img`
  width: 210px;
  height: 168px;

  /* @media (max-width: 1080px) {
    width: 140px;
    height: 106px;
  } */
  @media (max-width: 1080px) {
    width: 30%; // 부모 요소에 상대적으로 크기 조절
    height: auto; // 높이를 자동으로 조절
  }

  @media (min-width: 600px) and (max-width: 1080px) {
    width: 210px;
    /* height: 168px; */
  }
`;

const Sec1_SubText = styled.p`
  width: auto;
  height: 58px;
  margin-top: 5px;
  font-weight: 600;
  font-size: 24px;
  line-height: 28.64px;
  text-align: center;

  @media (max-width: 1080px) {
    /* */
    height: auto;
    /* font-size: 16px;
    line-height: 19.09px; */
    font-size: 4vw;
    line-height: normal; // 비율에 따라 조절
  }

  @media (min-width: 600px) and (max-width: 1080px) {
    top: 200px;
    width: auto;
    height: auto;
    font-weight: 700;
    font-size: 24px;
    line-height: normal;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export default Sec1;
