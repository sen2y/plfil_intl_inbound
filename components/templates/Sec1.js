import React from "react";
import styled from "styled-components";
import useIsMobile from "../../libs/useIsMobile";

const Sec1 = () => {
  const isMobile = useIsMobile();

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
            width={isMobile ? "92px" : "auto"}
            src="/assets/image/sec1/sec1_img1.png"
            alt="Korean actor casting platform Plfil"
          />
          <Sec1_SubText width={isMobile ? "119px" : "178px"}>
            영어 / 일어 가능한 배우 리스트 보유중
          </Sec1_SubText>
        </Sec1_Container>
        <Sec1_Container>
          <Sec1_img_ml
            src="/assets/image/sec1/sec1_img2.png"
            alt="Korean actor casting platform Plfil"
          />
          <Sec1_SubText width={isMobile ? "119px" : "178px"}>
            오디션 공간 대여, 스케쥴링 문의 가능
          </Sec1_SubText>
        </Sec1_Container>
        <Sec1_Container>
          <Sec1_img
            width={isMobile ? "82px" : "123px"}
            src="/assets/image/sec1/sec1_img3.png"
            alt="Korean actor casting platform Plfil"
          />
          <Sec1_SubText width={isMobile ? "92px" : "138px"}>
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
  line-height: 47.73px;
  color: black;

  @media (max-width: 1080px) {
    width: 280px;
    height: 66px;
    font-weight: 700;
    font-size: 28px;
    line-height: 33.41px;
    text-align: center;
    margin-bottom: 20px;
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

  @media (max-width: 1080px) {
    margin: 0px 0px 14px 0px;
    height: 174px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Sec1_img = styled.img`
  /* width: ${(props) => props.width}; */
  margin-left: 0;
`;

const Sec1_img_ml = styled.img`
  width: 167px;
  margin-left: 11.5px;

  @media (max-width: 1080px) {
    width: 106px;
  }
`;

const Sec1_SubText = styled.p`
  width: ${(props) => props.width};
  height: 58px;
  margin-top: 25px;
  font-weight: 600;
  font-size: 24px;
  line-height: 28.64px;
  text-align: center;

  @media (max-width: 1080px) {
    top: 200px;
    height: 38px;
    font-size: 16px;
    line-height: 19.09px;
  }
`;

export default Sec1;
