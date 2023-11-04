// import React, { useRef, useEffect, useState } from "react";
// import styled from "styled-components";
// import useIsMobile from "../../libs/useMobile";

// const Wrapper2 = styled.div`
//   width: 100%;
//   overflow: hidden;
//   position: relative;
// `;

// const Content = styled.div`
//   display: flex;
//   animation: scrollAnimation 10s linear infinite;
//   white-space: nowrap;
// `;

// const Item = styled.div`
//   width: 100px;
//   height: 100px;
//   background-color: #ccc;
//   margin-right: 12px;
//   flex-shrink: 0;
// `;

// const Sec3 = () => {
//   const isMobile = useIsMobile();
//   const innerText_pc =
//     "PLFIL has a directory of over 20,000 actors<br/>awaiting for your casting call..";

//   const innerText_mo =
//     "PLFIL has a directory of<br/>over 20,000 actors<br/>awaiting for your casting call..";
//   const containerRef = useRef(null);
//   const [items, setItems] = useState([1, 2, 3, 4, 5, 6]);

//   useEffect(() => {
//     const container = containerRef.current;
//     let scrollLeft = 0;
//     const itemsCount = 6; // 아이템의 개수
//     const itemWidth = 100; // 아이템의 너비
//     const containerWidth = itemsCount * itemWidth; // 컨테이너의 전체 너비

//     const handleScroll = () => {
//       scrollLeft += 1; // 변경하려는 스크롤 속도
//       container.style.transform = `translateX(-${scrollLeft}px)`;

//       if (scrollLeft >= containerWidth) {
//         scrollLeft = 0;
//         container.style.transform = `translateX(0)`;
//       }
//     };

//     const interval = setInterval(handleScroll, 20); // 슬라이드 속도 조절

//     // 컴포넌트 언마운트 시 인터벌 제거
//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <Wrapper>
//       <Div>
//         <Sec3_Container>
//           <Sec3_InnerText_mo
//             dangerouslySetInnerHTML={{ __html: innerText_mo }}
//           ></Sec3_InnerText_mo>
//           <PC_Text>
//             <Sec3_InnerText
//               dangerouslySetInnerHTML={{ __html: innerText_pc }}
//             ></Sec3_InnerText>
//           </PC_Text>

//           <Sec3_img>
//             <MoDiv>
//               <InnerImg_big
//                 src="/assets/image/sec3/sec3_img_big.png"
//                 alt="Korean actor casting platform Plfil"
//               />{" "}
//             </MoDiv>
//             <MoDiv2>
//               <InnerImg_small
//                 src="/assets/image/sec3/sec3_sub1.png"
//                 alt="Korean actor casting platform Plfil"
//               />

//               <InnerImg_small
//                 src="/assets/image/sec3/sec3_sub2.png"
//                 alt="Korean actor casting platform Plfil"
//               />

//               <InnerImg_small
//                 src="/assets/image/sec3/sec3_sub3.png"
//                 alt="Korean actor casting platform Plfil"
//               />

//               <InnerImg_small
//                 src="/assets/image/sec3/sec3_sub4.png"
//                 alt="Korean actor casting platform Plfil"
//               />

//               <InnerImg_small
//                 src="/assets/image/sec3/sec3_sub5.png"
//                 alt="Korean actor casting platform Plfil"
//               />

//               <InnerImg_small
//                 src="/assets/image/sec3/sec3_sub6.png"
//                 alt="Korean actor casting platform Plfil"
//               />
//             </MoDiv2>
//             {/* </MoDiv> */}
//           </Sec3_img>
//         </Sec3_Container>
//       </Div>
//       <Wrapper2>
//         <Content ref={containerRef}>
//           {items.map((item, index) => (
//             <Item key={index} />
//           ))}
//         </Content>
//       </Wrapper2>
//     </Wrapper>
//   );
// };

// const PC_Text = styled.div`
//   width: 936px;
//   display: flex;
//   align-items: flex-end;
//   justify-content: flex-end;
// `;

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   height: auto;

//   // mobile 버전
//   @media (max-width: 1080px) {
//     flex-direction: column;
//     align-items: center;
//     justify-content: flex-start;
//     width: 100%;
//     height: 100%;
//     padding: 0;
//   }
// `;
// const Div = styled.div`
//   width: 100%;
//   height: 588px;
//   position: relative;
//   z-index: 1;

//   @media (max-width: 1080px) {
//     height: 459px;
//     /* background-color: pink; */
//   }
// `;
// const Sec3_Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;

//   margin-top: 160px;
//   padding: 80px 60px 0 88px;
//   width: 100%;
//   height: 390px;
//   background: linear-gradient(180deg, #000 9.21%, rgba(0, 0, 0, 0) 100%),
//     url("/assets/image/sec3/sec3_img_bg.png") no-repeat;

//   // mobile 버전
//   @media (max-width: 1080px) {
//     align-items: center;
//     margin: 0;
//     padding: 28px 0 0 0;
//     width: 100%;
//     height: auto;
//     /* background: url("/assets/image/sec3/sec3_img_mo.png") no-repeat; */
//     /* background-size: 100% 240px; */

//     height: 240px;
//     background-size: 200%;
//     background-position: 50% 25%;
//   }
//   /* } */
// `;

// const Sec3_img = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-end;
//   margin-top: 20px;
//   height: 232px;
//   // mobile 버전
//   @media (max-width: 1080px) {
//     flex-direction: column;
//     align-items: flex-start;
//     margin: 0;
//     height: auto;
//     width: 100%;
//   }
// `;

// const MoDiv = styled.div`
//   @media (min-width: 1081px) {
//     /* display: none; PC 버전에서 숨김 */
//   }
// `;
// const MoDiv2 = styled.div`
//   @media (min-width: 1081px) {
//     /* display: none; PC 버전에서 숨김 */
//   }
//   @media (max-width: 1080px) {
//     padding: 0 12px;
//     width: 100%;
//     white-space: nowrap;
//     overflow-x: auto;
//     &::-webkit-scrollbar {
//       display: none;
//     }
//   }
// `;

// const InnerImg_big = styled.img`
//   width: 232px;
//   border-radius: 2px;
//   margin-right: 12px;
//   // mobile 버전
//   @media (max-width: 1080px) {
//     width: 160px;
//     padding: 60px 0 0 12px;
//     margin: 0;
//   }
// `;

// const InnerImg_small = styled.img`
//   width: 100px;
//   height: 100px;
//   border-radius: 2px;
//   margin-right: 12px;

//   &:last-child {
//     margin-right: 0;
//   }

//   // mobile 버전
// `;

// const Sec3_InnerText = styled.h2`
//   display: flex;
//   align-items: flex-end;
//   width: auto;
//   height: auto;
//   color: #fff;
//   text-align: right;
//   font-size: 40px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: normal;

//   // mobile 버전
//   @media (max-width: 1080px) {
//     display: none;
//   }
// `;

// const Sec3_InnerText_mo = styled.h2`
//   display: none;
//   // mobile 버전
//   @media (max-width: 1080px) {
//     display: flex;
//     align-items: flex-end;
//     color: white;
//     width: auto;
//     height: auto;
//     line-height: normal;
//     text-align: center;
//     color: #fff;
//     font-size: 20px;
//     font-style: normal;
//     font-weight: 700;
//   }
// `;

// export default Sec3;
import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import useIsMobile from "../../libs/useMobile";

const Sec3 = () => {
  const isMobile = useIsMobile();
  const innerText_pc =
    "PLFIL has a directory of over 20,000 actors<br/>awaiting for your casting call..";

  const innerText_mo =
    "PLFIL has a directory of<br/>over 20,000 actors<br/>awaiting for your casting call..";

  return (
    <Wrapper>
      <Div>
        <Sec3_Container>
          <Sec3_InnerText_mo
            dangerouslySetInnerHTML={{ __html: innerText_mo }}
          ></Sec3_InnerText_mo>
          <PC_Text>
            <Sec3_InnerText
              dangerouslySetInnerHTML={{ __html: innerText_pc }}
            ></Sec3_InnerText>
          </PC_Text>

          <Sec3_img>
            <MoDiv>
              <InnerImg_big
                src="/assets/image/sec3/sec3_img_big.png"
                alt="Korean actor casting platform Plfil"
              />{" "}
            </MoDiv>
            <MoDiv2>
              <InnerImg_small
                src="/assets/image/sec3/sec3_sub1.png"
                alt="Korean actor casting platform Plfil"
              />

              <InnerImg_small
                src="/assets/image/sec3/sec3_sub2.png"
                alt="Korean actor casting platform Plfil"
              />

              <InnerImg_small
                src="/assets/image/sec3/sec3_sub3.png"
                alt="Korean actor casting platform Plfil"
              />

              <InnerImg_small
                src="/assets/image/sec3/sec3_sub4.png"
                alt="Korean actor casting platform Plfil"
              />

              <InnerImg_small
                src="/assets/image/sec3/sec3_sub5.png"
                alt="Korean actor casting platform Plfil"
              />

              <InnerImg_small
                src="/assets/image/sec3/sec3_sub6.png"
                alt="Korean actor casting platform Plfil"
              />
            </MoDiv2>
            {/* </MoDiv> */}
          </Sec3_img>
        </Sec3_Container>
      </Div>
    </Wrapper>
  );
};

const PC_Text = styled.div`
  width: 936px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;

  // mobile 버전
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 0;
  }
`;
const Div = styled.div`
  width: 100%;
  height: 588px;
  position: relative;
  z-index: 1;

  @media (max-width: 1080px) {
    height: 459px;
    /* background-color: pink; */
  }
`;
const Sec3_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 160px;
  padding: 80px 60px 0 88px;
  width: 100%;
  height: 390px;
  background: linear-gradient(180deg, #000 9.21%, rgba(0, 0, 0, 0) 100%),
    url("/assets/image/sec3/sec3_img_bg.png") no-repeat;

  // mobile 버전
  @media (max-width: 1080px) {
    align-items: center;
    margin: 0;
    padding: 28px 0 0 0;
    width: 100%;
    height: auto;
    /* background: url("/assets/image/sec3/sec3_img_mo.png") no-repeat; */
    /* background-size: 100% 240px; */

    height: 240px;
    background-size: 200%;
    background-position: 50% 25%;
  }
  /* } */
`;

const Sec3_img = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 20px;
  height: 232px;
  // mobile 버전
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    height: auto;
    width: 100%;
  }
`;

const MoDiv = styled.div`
  @media (min-width: 1081px) {
    /* display: none; PC 버전에서 숨김 */
  }
`;
const MoDiv2 = styled.div`
  @media (min-width: 1081px) {
    /* display: none; PC 버전에서 숨김 */
  }
  @media (max-width: 1080px) {
    padding: 0 12px;
    width: 100%;
    white-space: nowrap;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const InnerImg_big = styled.img`
  width: 232px;
  border-radius: 2px;
  margin-right: 12px;
  // mobile 버전
  @media (max-width: 1080px) {
    width: 160px;
    padding: 60px 0 0 12px;
    margin: 0;
  }
`;

const InnerImg_small = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 2px;
  margin-right: 12px;

  &:last-child {
    margin-right: 0;
  }

  // mobile 버전
`;

const Sec3_InnerText = styled.h2`
  display: flex;
  align-items: flex-end;
  width: auto;
  height: auto;
  color: #fff;
  text-align: right;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  // mobile 버전
  @media (max-width: 1080px) {
    display: none;
  }
`;

const Sec3_InnerText_mo = styled.h2`
  display: none;
  // mobile 버전
  @media (max-width: 1080px) {
    display: flex;
    align-items: flex-end;
    color: white;
    width: auto;
    height: auto;
    line-height: normal;
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }
`;

export default Sec3;
