import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
import Link from "next/link";

const Sec4 = () => {
  const innerText_pc = "Through PLFIL,<br/>discover the actor of your dreams.";
  const innerText_mo =
    "Through PLFIL,<br/>discover the actor of<br/>your dreams.";

  return (
    <Wrapper>
      <Fade>
        <Sec4_Text_pc
          dangerouslySetInnerHTML={{ __html: innerText_pc }}
        ></Sec4_Text_pc>
      </Fade>
      <Fade duration={3000}>
        <Sec4_Text_mo
          dangerouslySetInnerHTML={{ __html: innerText_mo }}
        ></Sec4_Text_mo>
        <Fade bottom duration={3000} delay={500}>
          <LinkNoUnderline
            href={""}
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <Sec4_Btn>Casting Inqiry</Sec4_Btn>
          </LinkNoUnderline>
        </Fade>
      </Fade>
    </Wrapper>
  );
};

const LinkNoUnderline = styled(Link)`
  text-decoration: none;
`;

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

const Sec4_Text_pc = styled.div`
  width: 100vw;
  height: auto;
  color: #000;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-bottom: 52px;

  // mobile 버전
  @media (max-width: 1080px) {
    display: none;
  }
`;

const Sec4_Text_mo = styled.div`
  display: none;

  // mobile 버전
  @media (max-width: 1080px) {
    display: flex;
    width: auto;
    height: auto;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
    margin-bottom: 52px;
    position: relative;
    color: #000;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
`;

const Sec4_Btn = styled.button`
  width: 280px;
  height: 57px;
  padding: 12px 40px;
  border-radius: 2px;
  background: transparent;
  border: none;
  color: white;
  background-image: linear-gradient(93.27deg, #ff1744 0%, #ff4512 100%);
  cursor: pointer;
  font-weight: 700;
  font-size: 28px;
  text-align: center;

  // mobile 버전
  @media (max-width: 1080px) {
    width: 100%;
    text-align: center;
  }
`;

export default Sec4;
