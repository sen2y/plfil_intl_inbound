import React from "react";
import styled from "styled-components";
import useIsMobile from "../../libs/useIsMobile";

const Sec3 = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Sec3_Container>
        <Sec3_InnerText>
          플필에는
          {isMobile ? <br /> : " "}
          약 2만여명의 배우들이
          <br />
          캐스팅을 기다리고 있습니다.
        </Sec3_InnerText>

        <Sec3_img>
          {isMobile ? (
            <MoDiv>
              <InnerImg_big
                src="/assets/image/sec3/sec3_img_big.png"
                alt="Korean actor casting platform Plfil"
              />
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
            </MoDiv>
          ) : (
            <>
              <InnerImg_big
                src="/assets/image/sec3/sec3_img_big.png"
                alt="Korean actor casting platform Plfil"
              />
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
            </>
          )}
        </Sec3_img>
      </Sec3_Container>
    </Wrapper>
  );
};

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

const Sec3_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 160px;
  padding: 80px 60px 0 88px;
  width: 100%;
  height: 428px;
  background: url("/assets/image/sec3/sec3_img_bg.png") no-repeat;

  // mobile 버전
  @media (max-width: 1080px) {
    align-items: center;
    margin: 0;
    padding: 28px 0 0 0;
    width: 100%;
    height: auto;
    background: url("/assets/image/sec3/sec3_img_mo.png") no-repeat;
    background-size: 100% 240px;
  }
`;

const Sec3_img = styled.div`
  height: 232px;
  // mobile 버전
  @media (max-width: 1080px) {
    height: auto;
    width: 100%;
  }
`;

const MoDiv = styled.div``;
const MoDiv2 = styled.div`
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
// @media (max-width: 768px) {
//   position: relative;
//   top: 0px;
//   /* width: calc(100% - 28px); 전체 너비에서 28px을 뺀 너비 사용
//   height: 100px; */
//   margin-top: 12px;
//   white-space: nowrap; /* 컴포넌트들이 가로로 나란히 위치하게 함 */

//   overflow-x: auto;
//   &::-webkit-scrollbar {
//     display: none;
//   }
// }

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
  width: 502px;
  height: 96px;
  font-weight: 700;
  font-size: 40px;
  line-height: 47.73px;
  text-align: right;
  color: white;

  // mobile 버전
  @media (max-width: 1080px) {
    width: 312px;
    height: 99px;
    font-size: 28px;
    line-height: 33.41px;
    text-align: center;
  }
`;

export default Sec3;
