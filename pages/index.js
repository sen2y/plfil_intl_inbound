import styled from "styled-components";
import Banner from "../components/Banner";
import Sec1 from "../components/Sec1";
import Sec2 from "../components/Sec2";
import Sec3 from "../components/Sec3";

export default function Home() {
  return (
    <Wrapper>
      <Banner />
      <Sec1 />
      <Sec2 />
      <Sec3 />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;
