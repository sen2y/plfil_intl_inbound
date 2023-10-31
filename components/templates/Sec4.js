import React from "react";
import styled from "styled-components";

const Sec4 = () => {
  return (
    <Wrapper>
      <Sec4_Text>
        플필을 통해
        <br />
        원하시는 배우들을 캐스팅 해보세요!
      </Sec4_Text>
      <Sec4_Btn>캐스팅 문의</Sec4_Btn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 260px 204px 240px;

  // mobile 버전
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 140px 0;
  }
`;

const Sec4_Text = styled.div`
  width: 670px;
  height: 114px;
  text-align: center;
  font-weight: 800;
  font-size: 48px;
  line-height: 57.28px;
  font-style: normal;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
  margin-bottom: 52px;

  // mobile 버전
  @media (max-width: 1080px) {
    position: relative;
    width: 257px;
    height: 129px;
    font-size: 36px;
    line-height: 42.96px;
    text-align: center;
  }
`;

const Sec4_Btn = styled.button`
  width: 280px;
  height: 57px;
  gap: 10px;
  padding: 12px 40px;
  border-radius: 2px;
  background: transparent;
  border: none;
  color: white;
  background-image: linear-gradient(93.27deg, #ff1744 0%, #ff4512 100%);
  cursor: pointer;
  font-weight: 700;
  font-size: 28px;
  line-height: 33.41px;
  text-align: center;

  // mobile 버전
  @media (max-width: 1080px) {
    width: 100%;
    text-align: center;
  }
`;

export default Sec4;
