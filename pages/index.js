import styled from "styled-components";
import Banner from "../components/templates/Banner";
import Sec1 from "../components/templates/Sec1";
import Sec2 from "../components/templates/Sec2";
import Sec3 from "../components/templates/Sec3";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Sec4 from "@/components/templates/Sec4";
import Footer from "@/components/templates/Footer";

export default function Home() {
  return (
    <Wrapper>
      <HelmetProvider>
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
      </HelmetProvider>
      <Banner />
      <Inner>
        <Sec1 />
        <Sec2 />
        <Sec3 />
        <Sec4 />
      </Inner>
      <Footer />
    </Wrapper>
  );
}

// 페이지 제목 설정
Home.title = "플필 - 한국 배우 캐스팅 서비스"; // Home 페이지의 타이틀 설정
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Inner = styled.div`
  width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  @media (max-width: 1080px) {
    width: 100%;
    padding: 0 16px;
  }
`;
