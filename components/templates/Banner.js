import React from "react";
import styled from "styled-components";
import useIsMobile from "../../libs/useIsMobile";

const Banner = () => {
  // const isMobile = useIsMobile();
  // console.log("isMobile:", isMobile); // Add this line

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 500px;
  position: relative;
  background: url("/assets/image/banner/global_banner.png") no-repeat;
  background-size: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    background: url("/assets/image/banner/global_banner_mo.png") no-repeat;
    background-size: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1080px;
  height: 80px;
  background-color: transparent;
`;

const Content = styled.div`
  width: 1080px;
  height: 386px;
  background-color: transparent;
  /* background-color: blue; */
`;

const Logo = styled.p`
  font-family: "Majoris Italic";
  font-size: 40px;
  font-weight: 400;
  line-height: 50.47px;
  /* align-items: center; */
  color: transparent;
  background-image: linear-gradient(93.27deg, #ff1744 0%, #ff4512 100%);
  background-clip: text; //텍스트만 그라데이션을 보이도록 클리핑
  -webkit-background-clip: text; /* 웹킷 브라우저 지원을 위해 추가*/

  /* mobile 버전 */
  @media (max-width: 768px) {
    margin-left: 28px;
    font-size: 28px;
    line-height: 35.33px;
  }
`;

const HeaderBtn2 = styled.button`
  margin-left: 772px;
  width: 159px;
  height: 38px;
  background: transparent;
  border: 1px solid #ff1744;
  border-radius: 2px;
  gap: 10px;
  color: white;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  text-align: center;

  /* mobile 버전 */
  @media (max-width: 768px) {
    margin: 2px 28px 0px 0px;
    width: 133px;
    height: 30px;
    font-size: 12px;
    line-height: 22px;
    font-weight: 700;
  }
`;

const Banner_Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 1080px;
  height: auto;
  margin: 80px 0px 0px 60px;
`;

const Banner_Btn = styled.div`
  display: flex;
  width: 1080px;
  height: auto;
  margin: 92px 0 0 60px;
`;

const Banner_Title = styled.h3`
  font-size: 60px;
  font-weight: 800;
  line-height: 71.6px;
  color: white;

  /* mobile 버전 */
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 33.41px;
    top: 92px;
    left: 28px;
    width: 246px;
    height: 33px;
  }
`;

const Banner_SubTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  line-height: 35.8px;
  color: white;

  /* mobile 버전 */
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 19.09px;
    top: 133px;
    left: 28px;
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
  @media (max-width: 768px) {
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
