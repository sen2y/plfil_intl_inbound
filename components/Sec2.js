import React from "react";
import styled from "styled-components";

const Sec1 = () => {
  return (
    <Wrapper>
      <Sec2_Container>
        <Sec2_img width="483px" src="/assets/image/sec2_img1.png" />
        <Sec2_InnerContainer>
          <Sec2_InnerText>
            배우 뿐만 아니라
            <br />
            촬영 스태프도 구인 가능합니다.
          </Sec2_InnerText>
          <Sec2_InnerImg src="/assets/image/sec2_img2.png" />
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
  width: 1440px;
  height: 640px;
`;

const Sec2_Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 1080px;
  height: 400px;
  margin-top: 160px;
`;

const Sec2_img = styled.img`
  width: ${(props) => props.width};
`;

const Sec2_InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 597px;
  height: 400px;
`;

const Sec2_InnerText = styled.h3`
  margin-left: 48px;
  width: 489px;
  height: 96px;
  font-weight: 700;
  font-size: 40px;
  line-height: 47.73px;
  text-align: right;
`;

const Sec2_InnerImg = styled.img`
  width: 101px;
  height: 101px;
  margin-left: 437px;
  margin-top: 80px;
`;

const Sec2_InnerSubText = styled.p`
  margin-top: 36px;
  margin-left: 155px;
  width: 382px;
  height: 87px;
  font-weight: 600;
  font-size: 24px;
  line-height: 28.64px;
  text-align: right;
`;

export default Sec1;
