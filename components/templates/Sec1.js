// import React from "react";
// import styled from "styled-components";
// import { useRef, useEffect } from "react";

// const Sec1 = () => {
//   const sec1Ref = useRef(null);

//   const handleScrollAnimation = (entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("animate");
//       }
//     });
//   };

//   useEffect(() => {
//     const options = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.5, // 필요에 따라 이 임계값을 조정합니다.
//     };

//     const observer = new IntersectionObserver(handleScrollAnimation, options);

//     if (sec1Ref.current) {
//       observer.observe(sec1Ref.current);
//     }

//     return () => {
//       if (sec1Ref.current) {
//         observer.unobserve(sec1Ref.current);
//       }
//     };
//   }, []);
//   return (
//     <Wrapper ref={sec1Ref}>
//       <Sec1_Title>
//         PLFIL will search a Korean actor
//         <br />
//         for your needs.
//       </Sec1_Title>

//       <Container_Wrapper>
//         <Sec1_Container className="animate" delay={1.3}>
//           <Sec1_img
//             src="/assets/image/sec1/sec1_img1.png"
//             alt="Korean actor casting platform Plfil"
//           />
//           <Sec1_SubText>
//             PLFIL have
//             <br />
//             English/Japanese-speaking
//             <br />
//             actors ready.
//           </Sec1_SubText>
//         </Sec1_Container>

//         <Sec1_Container className="animate" delay={2.0}>
//           <Sec1_img
//             src="/assets/image/sec1/sec1_img2.png"
//             alt="Korean actor casting platform Plfil"
//           />
//           <Sec1_SubText>
//             Available for venues
//             <br />
//             for auditions and
//             <br />
//             schedule inquiries.
//           </Sec1_SubText>
//         </Sec1_Container>

//         <Sec1_Container className="animate" delay={2.7}>
//           <Sec1_img
//             src="/assets/image/sec1/sec1_img3.png"
//             alt="Korean actor casting platform Plfil"
//           />
//           <Sec1_SubText>
//             Commission is
//             <br />
//             10% of on all works.
//           </Sec1_SubText>
//         </Sec1_Container>
//       </Container_Wrapper>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   width: 100%;
//   height: 632px;
//   padding: 120px 45px 80px;

//   @media (max-width: 1080px) {
//     display: flex;
//     height: auto;
//     flex-direction: column;
//     align-items: center;
//     width: 100%;
//     height: 100%;
//     padding: 60px 0 100px;
//   }
// `;
// const Sec1_Title = styled.div`
//   margin-bottom: 35px;
//   font-weight: 700;
//   font-size: 40px;
//   line-height: normal;
//   color: black;

//   position: relative; // 위치 지정
//   opacity: 0;
//   /* animation: slideDown 1.5s ease-in-out forwards; // 왼쪽에서 오른쪽으로 슬라이드하는 애니메이션 적용

//   @keyframes slideDown {
//     from {
//       opacity: 0;
//       transform: translateY(-100%);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   } */
//   animation: slideLeft 1.5s ease-in-out forwards; // 왼쪽에서 오른쪽으로 슬라이드하는 애니메이션 적용
//   //animation-delay: 1s; /* 1초 지연 추가 */

//   @keyframes slideLeft {
//     from {
//       opacity: 0;
//       transform: translateX(-100%);
//     }
//     to {
//       opacity: 1;
//       transform: translateX(0);
//     }
//   }

//   @media (max-width: 1080px) {
//     width: auto;
//     height: auto;
//     font-weight: 700;
//     font-size: 5.5vw; //28px;
//     /* font-size: ${window.innerWidth * 0.05 > "28px" ? "5vw" : "28px"}; */
//     line-height: normal;
//     text-align: center;
//     margin-bottom: 20px;
//   }

//   @media (min-width: 600px) and (max-width: 1080px) {
//     font-size: 28px;
//   }
// `;

// const Container_Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @media (max-width: 1080px) {
//     flex-direction: column;
//     width: 100%;
//     height: 100%;
//   }
// `;

// const Sec1_Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 314px;
//   height: 300px;
//   margin-right: 24px;
//   &:last-child {
//     margin-right: 0;
//   }

//   opacity: 0;
//   animation: fadeIn 3s ease-in-out forwards;
//   animation-delay: ${(props) => props.delay || 0}s;

//   @keyframes fadeIn {
//     from {
//       opacity: 0;
//       transform: translateY(10px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }

//   /*
//   @media (max-width: 1080px) {
//     margin: 0px 0px 14px 0px;
//     height: 174px;

//     &:last-child {
//       margin-bottom: 0;
//     }
//   } */
//   @media (max-width: 1080px) {
//     width: 100%; // 전체 폭을 사용
//     height: auto; // 높이를 자동으로 조절
//     margin: 0px 0px 14px 0px;
//     &:last-child {
//       margin-bottom: 0;
//     }
//   }
// `;

// const Sec1_img = styled.img`
//   width: 210px;
//   height: 168px;

//   /* @media (max-width: 1080px) {
//     width: 140px;
//     height: 106px;
//   } */
//   @media (max-width: 1080px) {
//     width: 30%; // 부모 요소에 상대적으로 크기 조절
//     height: auto; // 높이를 자동으로 조절
//   }

//   @media (min-width: 600px) and (max-width: 1080px) {
//     width: 210px;
//     /* height: 168px; */
//   }
// `;

// const Sec1_SubText = styled.p`
//   width: auto;
//   height: auto;
//   margin-top: 5px;
//   font-weight: 600;
//   font-size: 24px;
//   line-height: 28.64px;
//   text-align: center;

//   @media (max-width: 1080px) {
//     /* */
//     height: auto;
//     /* font-size: 16px;
//     line-height: 19.09px; */
//     font-size: 4vw;
//     line-height: normal; // 비율에 따라 조절
//   }

//   @media (min-width: 600px) and (max-width: 1080px) {
//     top: 200px;
//     width: auto;
//     height: auto;
//     font-weight: 700;
//     font-size: 24px;
//     line-height: normal;
//     text-align: center;
//     margin-bottom: 20px;
//   }
// `;

// export default Sec1;
import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";

const Sec1 = () => {
  return (
    <Wrapper>
      <Fade delay={800} duration={1000}>
        <Sec1_Title>
          PLFIL will search a Korean actor
          <br />
          for your needs.
        </Sec1_Title>
      </Fade>

      <Container_Wrapper>
        <Fade bottom delay={1300} duration={2000}>
          <Sec1_Container>
            <Sec1_img
              src="/assets/image/sec1/sec1_img1.png"
              alt="Korean actor casting platform Plfil"
            />
            <Sec1_SubText>
              PLFIL have
              <br />
              English/Japanese-speaking
              <br />
              actors ready.
            </Sec1_SubText>
          </Sec1_Container>
        </Fade>
        <Fade bottom delay={2000} duration={2000}>
          <Sec1_Container>
            <Sec1_img
              src="/assets/image/sec1/sec1_img2.png"
              alt="Korean actor casting platform Plfil"
            />
            <Sec1_SubText>
              Available for venues
              <br />
              for auditions and
              <br />
              schedule inquiries.
            </Sec1_SubText>
          </Sec1_Container>
        </Fade>
        <Fade bottom delay={2700} duration={2000}>
          <Sec1_Container>
            <Sec1_img
              src="/assets/image/sec1/sec1_img3.png"
              alt="Korean actor casting platform Plfil"
            />
            <Sec1_SubText>
              Commission is
              <br />
              10% of on all works.
            </Sec1_SubText>
          </Sec1_Container>
        </Fade>
      </Container_Wrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 632px;
  padding: 120px 45px 80px;

  @media (max-width: 1080px) {
    display: flex;
    height: auto;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 60px 0 100px;
  }
`;
const Sec1_Title = styled.div`
  margin-bottom: 35px;
  font-weight: 700;
  font-size: 40px;
  line-height: normal;
  color: black;
  position: relative;

  @media (max-width: 1080px) {
    width: auto;
    height: auto;
    font-weight: 700;
    font-size: 5.5vw;
    line-height: normal;
    text-align: center;
    margin-bottom: 20px;
  }

  @media (min-width: 600px) and (max-width: 1080px) {
    font-size: 28px;
  }
`;

const Container_Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;

const Sec1_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 314px;
  height: 300px;
  margin-right: 24px;
  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 1080px) {
    width: 100%;
    height: auto;
    margin: 0px 0px 14px 0px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Sec1_img = styled.img`
  width: 210px;
  height: 168px;

  @media (max-width: 1080px) {
    width: 30%;
    height: auto;
  }

  @media (min-width: 600px) and (max-width: 1080px) {
    width: 210px;
  }
`;

const Sec1_SubText = styled.p`
  width: auto;
  height: auto;
  margin-top: 5px;
  font-weight: 600;
  font-size: 24px;
  line-height: 28.64px;
  text-align: center;

  @media (max-width: 1080px) {
    height: auto;
    font-size: 4vw;
    line-height: normal; // 비율에 따라 조절
  }

  @media (min-width: 600px) and (max-width: 1080px) {
    top: 200px;
    width: auto;
    height: auto;
    font-weight: 700;
    font-size: 24px;
    line-height: normal;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export default Sec1;
