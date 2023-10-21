import styled from "styled-components";
import Banner from "../components/Banner";
import Sec1 from "../components/Sec1";
import Sec2 from "../components/Sec2";
import Sec3 from "../components/Sec3";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title></title>
        <meta
          name="title"
          content="Plfil - All In One Korean Actor Casting Platform for Global Casting Directors"
        />
        <meta
          name="description"
          content="Korean actor Online Casting Platform, Take a look at the massive database of actors and cast rising stars. Find Korean actors/actresses for your project"
        />
        <meta
          name="keywords"
          content="global, plfil, casting, casting platform, actor's profile, rising stars, casting board, korean top star, korean actors, korean casti0ng, korean actor, korean actress, korean actor casting, korean actor casting platform, korean actor casting service, korean actor casting website, korean actor casting site, "
        />
      </Helmet>
      <Wrapper>
        <Banner />
        <Sec1 />
        <Sec2 />
        <Sec3 />
      </Wrapper>
    </>
  );
}

// 페이지 제목 설정
Home.title = "플필 - 한국 배우 캐스팅 서비스"; // Home 페이지의 타이틀 설정

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;
