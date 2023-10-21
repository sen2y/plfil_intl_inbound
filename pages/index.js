import styled from "styled-components";
import Banner from "../components/Banner";
import Sec1 from "../components/Sec1";

export default function Home() {
  return (
    <Wrapper>
      <Banner />
      <Sec1 />
      <Sec2></Sec2>
      <Sec3></Sec3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const Sec2 = styled.div`
  width: 1440px;
  height: 640px;
  background-color: yellow;
`;

const Sec3 = styled.div`
  width: 1440px;
  height: 1312px;
  background-color: green;
`;
