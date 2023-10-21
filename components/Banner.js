import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 클라이언트 측에서만 실행되도록 useEffect 내부에서 window 객체 사용
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile(); // 초기 로드 시 체크
    window.addEventListener("resize", checkIsMobile); // 창 크기 변경 감지

    // 컴포넌트가 언마운트될 때 리스너 제거
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <Wrapper>
      <Banner_Header>
        <Logo>PLFIL</Logo>
        <HeaderBtn2>Main Service Site &gt;</HeaderBtn2>
      </Banner_Header>
      <Banner_Img
        isMobile={isMobile}
        src={
          isMobile
            ? "/assets/image/banner/global_banner_mo.png"
            : "/assets/image/banner/global_banner.png"
        }
        alt="banner"
      />

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

  // mobile 버전
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const Banner_Header = styled.div`
  display: flex;
  align-items: center;
  top: 14px;
  width: 1440px;
  height: 80px;
  border: 1px;
  position: absolute;
  color: white;

  /* mobile 버전 */
  @media (max-width: 768px) {
    margin: 12px 0px 0px 0px;
    height: 35px;
    top: 0;
    justify-content: space-between;
    width: 100%;
  }
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

const Banner_Img = styled.img`
  width: ${(props) => (props.isMobile ? "100%" : "1440px")};
`;

const Banner_Text = styled.h3`
  font-size: 60px;
  font-weight: 800;
  line-height: 71.6px;
  position: absolute;
  top: 160px;
  left: 240px;
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

const Banner_SubText = styled.h2`
  font-size: 30px;
  font-weight: 700;
  line-height: 35.8px;
  position: absolute;
  top: 244px;
  left: 240px;
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
