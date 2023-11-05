import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <Wrapper>
        <Inner>
          <Header>
            <Logo>PLFIL</Logo>
            <LinkNoUnderline href={""} passHref>
              <HeaderBtn2>Main Service Site &gt;</HeaderBtn2>
            </LinkNoUnderline>
          </Header>

          <Content>
            <Fade duration={3000}>
              <Banner_Text>
                <Banner_Title>Looking for a qualified actor?</Banner_Title>
                <Banner_SubTitle>
                  PLFIL will be an agent in facilitating
                  <br />
                  your casting process.
                </Banner_SubTitle>
              </Banner_Text>{" "}
            </Fade>

            <Fade left distance="50px" delay={500} duration={1000}>
              <LinkNoUnderline href={""} passHref>
                {" "}
                <Banner_Btn>
                  <ContactBtn>Casting Inqiry</ContactBtn>
                </Banner_Btn>{" "}
              </LinkNoUnderline>
            </Fade>
          </Content>
        </Inner>
      </Wrapper>
    </>
  );
};

const LinkNoUnderline = styled(Link)`
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 500px;
  background: linear-gradient(180deg, #000 -4.29%, rgba(0, 0, 0, 0) 100%),
    url("/assets/image/banner/global_banner.png") no-repeat;
  background-size: cover;
  background-position: 90% center;
  z-index: 1;

  @media (max-width: 1080px) {
    width: 100%;
    height: 261px;
    background-color: pink;
    background-position: 45% 55%;
    background-size: 250%;
  }
`;

const Inner = styled.div`
  width: 1080px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;

  @media (max-width: 1080px) {
    height: 100%;
    padding: 12px 24px 0 28px;
    height: auto;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 420px;
  background-color: transparent;
  /* background-color: blue; */
  padding: 80px 60px 80px;

  @media (max-width: 1080px) {
    height: 100%;
    padding: 45px 0px 26px 28px;
  }
`;

const Logo = styled.p`
  font-family: "Majoris Italic";
  font-size: 40px;
  font-weight: 400;
  width: 121px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 16px;
  color: transparent;
  background-image: linear-gradient(93.27deg, #ff1744 0%, #ff4512 100%);
  background-clip: text;
  -webkit-background-clip: text; /* 웹킷 브라우저 지원을 위해 추가*/

  /* mobile 버전 */
  @media (max-width: 1080px) {
    width: 85px;
    height: 35px;
    margin: 0;
    font-size: 28px;
  }
`;

const HeaderBtn2 = styled.button`
  width: 159px;
  height: 38px;
  background: transparent;
  border: 1px solid #ff1744;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  margin: 0px 12px;

  /* mobile 버전 */
  @media (max-width: 1080px) {
    width: 133px;
    height: 30px;
    font-size: 12px;
    font-weight: 700;
    margin: 0;
  }
`;

const Banner_Text = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;

  /* mobile 버전 */
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const Banner_Btn = styled.div`
  display: flex;
  height: auto;
  margin: 56px 0 0 0px;

  @media (max-width: 1080px) {
    margin: 0;
    width: 100%;
    margin-top: 33px;
  }
`;

const Banner_Title = styled.h3`
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  font-size: 60px;
  font-style: normal;
  font-weight: 800;
  padding-bottom: 12px;

  /* mobile 버전 */
  @media (max-width: 1080px) {
    font-size: 22px;
    width: auto;
    height: auto;
    margin-bottom: 8px;
    padding-bottom: 0;
  }
`;

const Banner_SubTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  line-height: normal;

  /* mobile 버전 */
  @media (max-width: 1080px) {
    font-size: 14px;
    width: 279px;
    height: auto;
  }
`;

const ContactBtn = styled.button`
  border-radius: 2px;
  border: none;
  padding: 12px 40px;
  cursor: pointer;
  background-image: linear-gradient(93.27deg, #ff1744 0%, #ff4512 100%);
  color: white;
  font-size: 20px;
  font-weight: 700;

  /* mobile 버전 */
  @media (max-width: 1080px) {
    font-size: 16px;
    font-weight: 700;
    padding: 8px 28px;
  }
`;

export default Banner;
