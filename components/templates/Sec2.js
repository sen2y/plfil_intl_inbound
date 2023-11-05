import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
import Image from "next/image";

const Sec2 = () => {
  return (
    <Wrapper>
      <Sec2_Container>
        <Fade bottom distance="50px" duration={3000}>
          <Sec2_img
            src="/assets/image/sec2/sec2_img1.png"
            alt="Korean actor casting platform Plfil"
          />
        </Fade>
        <Fade delay={300} duration={3000}>
          <Sec2_InnerContainer>
            <Sec2_InnerText>
              Not only actors,
              <br />
              you also can hire
              <br />
              film crew members.
            </Sec2_InnerText>

            <Img_Wrapper>
              <Sec2_InnerImg
                src="/assets/image/sec2/sec2_img2.png"
                alt="Korean actor casting platform Plfil"
                width={101}
                height={101}
              />
            </Img_Wrapper>

            <Sec2_InnerSubText>
              Film crew members are fluent
              <br />
              in English and have experiences
              <br />
              in global film productions.
            </Sec2_InnerSubText>
          </Sec2_InnerContainer>
        </Fade>
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
  justify-content: space-between;
  width: 100%;
  height: 400px;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
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
  width: 100%;
`;

const Sec2_InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 400px;

  @media (max-width: 1080px) {
    margin-top: 40px;
    width: auto;
    height: auto;
    align-items: center;
  }
`;

const Sec2_InnerText = styled.h3`
  width: 489px;
  height: 96px;
  font-weight: 700;
  font-size: 40px;
  line-height: normal;
  text-align: right;

  @media (max-width: 1080px) {
    margin-left: 0px;
    width: auto;
    font-size: 28px;
    text-align: center;
  }
`;

const Sec2_InnerImg = styled(Image)`
  margin: 80px 0px 0px 437px;

  @media (max-width: 1080px) {
    margin: 40px 0px 28px;
  }
`;

const Sec2_InnerSubText = styled.p`
  margin: 36px 0px 0px 155px;
  width: 382px;
  height: 87px;
  font-weight: 600;
  font-size: 24px;
  line-height: normal;
  text-align: right;

  @media (max-width: 1080px) {
    margin: 0;
    width: auto;
    height: 57px;
    text-align: center;
    font-size: 16px;
  }
`;

export default Sec2;
