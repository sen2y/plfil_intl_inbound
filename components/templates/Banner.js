import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <>
      <Wrapper>
        <WrapperBack>
          <Inner>
            <Header>
              <Logo>PLFIL</Logo>
              <HeaderBtn2>Main Service Site &gt;</HeaderBtn2>
            </Header>
            <Content>
              <Banner_Text>
                <Banner_Title>배우를 찾고 계신가요?</Banner_Title>
                <Banner_SubTitle>
                  플필에서 빠르게 캐스팅을 도와드리겠습니다.
                </Banner_SubTitle>
              </Banner_Text>

              <Banner_Btn>
                <ContactBtn>캐스팅 문의</ContactBtn>
              </Banner_Btn>
            </Content>
          </Inner>
        </WrapperBack>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 500px;
  background: url("/assets/image/banner/global_banner.png") no-repeat;
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

const WrapperBack = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 466px;
  z-index: 2;
  background: linear-gradient(180deg, #000 -4.29%, rgba(0, 0, 0, 0) 100%);

  @media (max-width: 1080px) {
    height: 244px;
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
  height: 386px;
  background-color: transparent;
  /* background-color: blue; */
  padding: 80px 60px 80px;

  @media (max-width: 1080px) {
    height: 100%;
    padding: 45px 68px 26px 28px;
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
  background-clip: text; //텍스트만 그라데이션을 보이도록 클리핑
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
    line-height: 22px;
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
  margin: 92px 0 0 0px;

  @media (max-width: 1080px) {
    margin: 0;
    width: 100%;
    margin-top: 48px;
  }
`;

const Banner_Title = styled.h3`
  font-size: 60px;
  font-weight: 800;
  color: white;
  margin-bottom: 12px;

  /* mobile 버전 */
  @media (max-width: 1080px) {
    font-size: 28px;
    width: 246px;
    height: 33px;
    margin-bottom: 8px;
  }
`;

const Banner_SubTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: white;

  /* mobile 버전 */
  @media (max-width: 1080px) {
    font-size: 16px;
    width: 279px;
    height: 28px;
  }
`;

const ContactBtn = styled.button`
  width: 172px;
  height: 48px;

  border-radius: 2px;
  border: none;
  padding: 12px 40px;
  gap: 10px;
  cursor: pointer;
  background-image: linear-gradient(93.27deg, #ff1744 0%, #ff4512 100%);
  color: white;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.87px;

  /* mobile 버전 */
  @media (max-width: 1080px) {
    width: 129px;
    height: 35px;
    top: 200px;
    left: 28px;
    font-size: 16px;
    line-height: 19.09px;
    font-weight: 700;
    padding: 8px 28px;
  }
`;

export default Banner;
