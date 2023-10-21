import React from "react";
import styled from "styled-components";

const Sec1 = () => {
  return (
    <Wrapper>
      <div>
        <Sec1_Title>한국 배우가 필요하시다면 빠르게 찾아드립니다</Sec1_Title>
      </div>
      <Container_Wrapper>
        <Sec1_Container>
          <Sec1_img
            width={"138px"}
            src="/assets/image/sec1_img1.png"
            alt="sec1_img1"
          />
          <Sec1_SubText width={"178px"}>
            영어 / 일어 가능한 배우 리스트 보유중
          </Sec1_SubText>
        </Sec1_Container>
        <Sec1_Container>
          <Sec1_img
            marginLeft={"11.5px"}
            width={"167px"}
            src="/assets/image/sec1_img2.png"
            alt="sec1_img2"
          />
          <Sec1_SubText width={"178px"}>
            오디션 공간 대여, 스케쥴링 문의 가능
          </Sec1_SubText>
        </Sec1_Container>
        <Sec1_Container>
          <Sec1_img
            width={"123px"}
            src="/assets/image/sec1_img3.png"
            alt="sec1_img3"
          />
          <Sec1_SubText width={"138px"}>캐스팅 피 출연료의 10%</Sec1_SubText>
        </Sec1_Container>
      </Container_Wrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1440px;
  height: 632px;
  background-color: white;
  /* position: relative; 부모 컨테이너를 상대 위치로 설정 */
`;

const Sec1_Title = styled.h2`
  position: absolute;
  width: 399px;
  height: 96px;
  top: 621px;
  margin-left: 240px;
  font-weight: 700;
  font-size: 40px;
  line-height: 47.73px;
  color: black;
`;

const Container_Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 1440px;
  height: 300px;
  position: relative; /* 부모 컨테이너를 상대 위치로 설정 */
  top: 253px;
`;

const Sec1_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 314px;
  height: 300px;
  margin-right: 24px;
`;

const Sec1_img = styled.img`
  width: ${(props) => props.width};
  margin-top: 50px;
  margin-left: ${(props) => props.marginLeft || "0px"};
`;

const Sec1_SubText = styled.p`
  position: absolute;
  width: ${(props) => props.width};
  height: 58px;
  top: 204px;
  font-weight: 600;
  font-size: 24px;
  line-height: 28.64px;
  text-align: center;
`;

export default Sec1;
