import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Sec2 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // 스크롤이 뷰포트의 50%에 도달하면 콜백을 실행
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 스크롤이 해당 컴포넌트에 도달하면 애니메이션을 추가
          containerRef.current.classList.add("animate");
        } else {
          // 스크롤이 해당 컴포넌트 밖으로 나가면 애니메이션을 제거
          containerRef.current.classList.remove("animate");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Wrapper>
      <Sec2_Container>
        <Sec2_img
          src="/assets/image/sec2/sec2_img1.png"
          alt="Korean actor casting platform Plfil"
        />
        <Sec2_InnerContainer ref={containerRef} className="animate">
          <Sec2_InnerText>
            Not only actors,
            <br />
            you also can hire
            <br />
            film crew members.
          </Sec2_InnerText>

          <Img_Wrapper>
            <Sec2_InnerImg
              src="/assets/image/sec2/sec2_img2.png"
              alt="Korean actor casting platform Plfil"
            />
          </Img_Wrapper>

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
  width: 100%;
  height: 640px;
  padding: 160px 60px 80px 0;

  @media (max-width: 1080px) {
    width: 100%;
    height: 100%;
    padding: 0 0 100px;
  }
`;

const Sec2_Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 400px;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 0px;
  }
`;

const Img_Wrapper = styled.div`
  @media (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

// const Sec2_img = styled.img`
//   width: 100%;

//   opacity: 0; /* 초기에 투명 */
//   transition: opacity 1.5s;

//   &.animate {
//     opacity: 1; /* 스크롤 시 표시되도록 투명에서 불투명으로 변경 */
//   }
// `;

// const Sec2_InnerContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
//   height: 400px;
//   opacity: 0; /* 초기에 투명 */
//   transition: opacity 1.5s;

//   &.animate {
//     opacity: 1; /* 스크롤 시 표시되도록 투명에서 불투명으로 변경 */
//   }
//   @media (max-width: 1080px) {
//     margin-top: 40px;
//     width: auto;
//     height: auto;
//     align-items: center;
//   }
// `;
const Sec2_img = styled.img`
  width: 100%;
`;

const Sec2_InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 400px;

  opacity: 0; /* 초기에 투명 */
  transition: opacity 2s;

  &.animate {
    opacity: 1; /* 스크롤 시 표시되도록 투명에서 불투명으로 변경 */
  }

  @media (max-width: 1080px) {
    margin-top: 40px;
    width: auto;
    height: auto;
    align-items: center;
  }
`;

const Sec2_InnerText = styled.h3`
  width: 489px;
  height: 96px;
  font-weight: 700;
  font-size: 40px;
  line-height: normal;
  text-align: right;

  @media (max-width: 1080px) {
    margin-left: 0px;
    width: auto;
    font-size: 28px;
    text-align: center;
  }
`;

const Sec2_InnerImg = styled.img`
  width: 101px;
  height: 101px;
  margin: 80px 0px 0px 437px;

  @media (max-width: 1080px) {
    margin: 40px 0px 28px 0px;
  }
`;

const Sec2_InnerSubText = styled.p`
  margin: 36px 0px 0px 155px;
  width: 382px;
  height: 87px;
  font-weight: 600;
  font-size: 24px;
  line-height: 28.64px;
  text-align: right;

  @media (max-width: 1080px) {
    margin: 0;
    width: 255px;
    height: 57px;
    font-size: 16px;
    line-height: 19.09px;
    text-align: center;
  }
`;

export default Sec2;
