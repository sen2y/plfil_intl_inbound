import React from "react";
import styled from "styled-components";
import useIsMobile from "../../libs/useIsMobile";

const Sec2 = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Sec2_Container>
        <Sec2_img
          width={isMobile ? "100%" : "auto"}
          src="/assets/image/sec2/sec2_img1.png"
          alt="Korean actor casting platform Plfil"
        />
        <Sec2_InnerContainer>
          {isMobile ? (
            <Sec2_InnerText>
              배우 뿐만 아니라
              <br />
              촬영 스태프도
              <br />
              구인 가능합니다.
            </Sec2_InnerText>
          ) : (
            <Sec2_InnerText>
              배우 뿐만 아니라
              <br />
              촬영 스태프도 구인 가능합니다.
            </Sec2_InnerText>
          )}
          <Img_Wrapper>
            <Sec2_InnerImg
              src="/assets/image/sec2/sec2_img2.png"
              alt="Korean actor casting platform Plfil"
            />
          </Img_Wrapper>

          <Sec2_InnerSubText>
            영어로 소통이 가능하며,
            <br />
            다국적 제작팀과 함께
            <br />
            일해본 경험을 가진 스태프들이 있습니다.
          </Sec2_InnerSubText>
        </Sec2_InnerContainer>
      </Sec2_Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 640px;
  padding: 160px 60px 80px 0;

  @media (max-width: 1080px) {
    width: 100%;
    height: 100%;
    padding: 0 0 100px;
  }
`;

const Sec2_Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 400px;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 0px;
  }
`;

const Img_Wrapper = styled.div`
  @media (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

const Sec2_img = styled.img`
  width: ${(props) => props.width};
`;

const Sec2_InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 400px;

  @media (max-width: 1080px) {
    margin-top: 40px;
    width: 255px;
    height: 325px;
    align-items: center;
  }
`;

const Sec2_InnerText = styled.h3`
  width: 489px;
  height: 96px;
  font-weight: 700;
  font-size: 40px;
  line-height: 47.73px;
  text-align: right;

  @media (max-width: 1080px) {
    margin-left: 0px;
    width: 184px;
    height: 99px;
    font-size: 28px;
    line-height: 33.41px;
    text-align: center;
  }
`;

const Sec2_InnerImg = styled.img`
  width: 101px;
  height: 101px;
  margin: 80px 0px 0px 437px;

  @media (max-width: 1080px) {
    margin: 40px 0px 28px 0px;
  }
`;

const Sec2_InnerSubText = styled.p`
  margin: 36px 0px 0px 155px;
  width: 382px;
  height: 87px;
  font-weight: 600;
  font-size: 24px;
  line-height: 28.64px;
  text-align: right;

  @media (max-width: 1080px) {
    margin: 0;
    width: 255px;
    height: 57px;
    font-size: 16px;
    line-height: 19.09px;
    text-align: center;
  }
`;

export default Sec2;
