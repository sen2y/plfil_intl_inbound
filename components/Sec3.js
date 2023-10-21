import React from "react";
import styled from "styled-components";

const Sec3 = () => {
  return (
    <Wrapper>
      <Sec3_Container>
        <Sec3_img src="/assets/image/sec3_img1.png"></Sec3_img>

        <Sec3_InnerText>
          플필에는 약 2만여명의 배우들이
          <br />
          캐스팅을 기다리고 있습니다.
        </Sec3_InnerText>
      </Sec3_Container>
      <Sec3_Text>
        플필을 통해
        <br />
        원하시는 배우들을 캐스팅 해보세요!
      </Sec3_Text>
      <Sec3_Btn>캐스팅 문의</Sec3_Btn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 1440px;
  height: 1312px;
`;

const Sec3_Container = styled.div`
  position: absolute;
  top: 1933px;
  width: 1080px;
  height: 428px;
`;

const Sec3_img = styled.img``;

const Sec3_InnerText = styled.h2`
  position: absolute;
  width: 502px;
  height: 96px;
  top: 80px;
  left: 518px;
  font-weight: 700;
  font-size: 40px;
  line-height: 47.73px;
  text-align: right;
  color: white;
`;

const Sec3_Text = styled.div`
  width: 670px;
  height: 114px;
  position: absolute;
  top: 2621px;
  text-align: center;
  font-weight: 800;
  font-size: 48px;
  line-height: 57.28px;
  font-style: normal;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
`;

const Sec3_Btn = styled.button`
  width: 280px;
  height: 57px;
  position: absolute;
  top: 2787px;
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
`;

export default Sec3;