import styled from "styled-components";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <Wrapper>
      <Banner />
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const Section1 = styled.div`
  width: 1440px;
  height: 632px;
  background-color: pink;
`;

const Section2 = styled.div`
  width: 1440px;
  height: 640px;
  background-color: yellow;
`;

const Section3 = styled.div`
  width: 1440px;
  height: 1312px;
  background-color: green;
`;
