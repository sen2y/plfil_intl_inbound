import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <Wrapper>
      <Banner_Header>
        <Logo>PLFIL</Logo>
        <HeaderBtn2>Main Service Site &gt;</HeaderBtn2>
      </Banner_Header>
      <Banner_Img src="/assets/image/global_banner.png" alt="banner" />

      <Banner_Text>배우를 찾고 계신가요?</Banner_Text>
      <Banner_SubText>
        플필에서 빠르게 캐스팅을 도와드리겠습니다.
      </Banner_SubText>

      <ContactBtn>캐스팅 문의</ContactBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1440px;
  height: 500px;
  position: relative; /* 부모 컨테이너를 상대 위치로 설정 */
`;

const Banner_Header = styled.div`
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  top: 14px;
  width: 1440px;
  height: 80px;
  border: 1px;
  position: absolute;
  color: white;
`;

const Logo = styled.p`
  margin-left: 196px;
  font-family: "Majoris Italic";
  font-size: 40px;
  font-weight: 400;
  line-height: 50.47px;
  align-items: center;
  color: transparent;
  background-image: linear-gradient(93.27deg, #ff1744 0%, #ff4512 100%);
  background-clip: text; /* 텍스트만 그라데이션을 보이도록 클리핑 */
  -webkit-background-clip: text; /* 웹킷 브라우저 지원을 위해 추가*/
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
  padding: 8px 16px;
  cursor: pointer;
`;

const Banner_Img = styled.img``;

const Banner_Text = styled.h1`
  font-size: 60px;
  font-weight: 800;
  line-height: 71.6px;
  position: absolute;
  top: 160px;
  left: 240px;
  color: white;
`;

const Banner_SubText = styled.h2`
  font-size: 30px;
  font-weight: 700;
  line-height: 35.8px;
  position: absolute;
  top: 244px;
  left: 240px;
  color: white;
`;

const ContactBtn = styled.button`
  width: 172px;
  height: 48px;
  top: 372px;
  left: 240px;
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
  position: absolute;
`;

export default Banner;
