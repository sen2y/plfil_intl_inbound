import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";

const Sec1 = () => {
  return (
    <Wrapper>
      <Fade delay={1000} duration={2000}>
        <Sec1_Title>
          PLFIL will search a Korean actor
          <br />
          for your needs.
        </Sec1_Title>
      </Fade>

      <Container_Wrapper>
        <Sec1_Container>
          <Fade bottom distance={"50px"} delay={1300} duration={2000}>
            <Sec1_img
              src="/assets/image/sec1/sec1_img1.png"
              alt="Korean actor casting platform Plfil"
            />
            <Sec1_SubText>
              PLFIL have
              <br />
              English/Japanese-speaking
              <br />
              actors ready.
            </Sec1_SubText>
          </Fade>
        </Sec1_Container>

        <Sec1_Container>
          <Fade bottom distance={"50px"} delay={2000} duration={2000}>
            <Sec1_img
              src="/assets/image/sec1/sec1_img2.png"
              alt="Korean actor casting platform Plfil"
            />
            <Sec1_SubText>
              Available for venues
              <br />
              for auditions and
              <br />
              schedule inquiries.
            </Sec1_SubText>
          </Fade>
        </Sec1_Container>

        <Fade bottom distance={"50px"} delay={2700} duration={2000}>
          <Sec1_Container>
            <Sec1_img
              src="/assets/image/sec1/sec1_img3.png"
              alt="Korean actor casting platform Plfil"
            />
            <Sec1_SubText>
              Commission is
              <br />
              10% of on all works.
            </Sec1_SubText>
          </Sec1_Container>
        </Fade>
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
    font-size: 5.5vw; //28px;
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

  @media (max-width: 1080px) {
    width: 100%;
    height: auto;
    margin: 0px 0px 14px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Sec1_img = styled.img`
  width: 210px;
  height: 168px;

  @media (max-width: 1080px) {
    width: 30%;
    height: auto;
  }

  @media (min-width: 600px) and (max-width: 1080px) {
    width: 210px;
  }
`;

const Sec1_SubText = styled.p`
  width: auto;
  height: auto;
  margin-top: 5px;
  font-weight: 600;
  font-size: 24px;
  line-height: normal;
  text-align: center;

  @media (max-width: 1080px) {
    font-size: 4vw;
  }

  @media (min-width: 600px) and (max-width: 1080px) {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export default Sec1;
