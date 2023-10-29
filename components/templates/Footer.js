import React from "react";
import styled from "styled-components";
import useIsMobile from "../../libs/useIsMobile";

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        {isMobile ? (
          <>
            <Sec2>
              <SNS_Btn src="/assets/image/footer/insta.png"></SNS_Btn>
              <SNS_Btn src="/assets/image/footer/kakao.png"></SNS_Btn>
              <SNS_Btn src="/assets/image/footer/plus.png"></SNS_Btn>
              <SNS_Btn src="/assets/image/footer/blog.png"></SNS_Btn>
            </Sec2>
            <TextSec>
              <Text_Btn>개인정보처리방침 및 이용약관</Text_Btn>
              <Text_Btn>서비스 소개</Text_Btn>
            </TextSec>
            <Sec3>
              <Text>
                (주)플필 | 대표자 : 류민국 | 사업자등록번호 : 430-87-02549
              </Text>
              <Text>통신판매업 신고번호 : 2022-서울강남-03908</Text>
              <Text>
                사업장 소재지 : 서울특별시 서초구 잠원동 18-18 신사빌딩 2층
              </Text>
              <Text>광고 및 제휴문의 : contact@plfil.com</Text>
              <Text>인재채용 및 사이트관련문의 : support@plfil.com</Text>
              <Text>© Plfil, Inc.</Text>
            </Sec3>
          </>
        ) : (
          <>
            <Sec1>
              <Logo src="/assets/image/footer/logo.png" />
              <TextSec>
                <Text_Btn>서비스 소개</Text_Btn>
                <Text_Btn>개인정보처리방침 및 이용약관</Text_Btn>
              </TextSec>
            </Sec1>
            <Sec2>
              <SNS_Btn src="/assets/image/footer/insta.png"></SNS_Btn>
              <SNS_Btn src="/assets/image/footer/kakao.png"></SNS_Btn>
              <SNS_Btn src="/assets/image/footer/plus.png"></SNS_Btn>
              <SNS_Btn src="/assets/image/footer/blog.png"></SNS_Btn>
            </Sec2>
            <Sec3>
              <Text>
                (주)플필 | 대표자 : 류민국 | 사업자등록번호 : 430-87-02549 |
                통신판매업 신고번호 : 2022-서울강남-03908
              </Text>
              <Text>
                사업장 소재지 : 서울특별시 서초구 잠원동 18-18 신사빌딩 2층
              </Text>
              <Text>광고 및 제휴문의 : contact@plfil.com</Text>
              <Text>인재채용 및 사이트관련문의 : support@plfil.com</Text>
              <Text>© Plfil, Inc.</Text>
            </Sec3>
          </>
        )}
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 320px;
  border-top: 1px solid #dddddd;

  // mobile 버전
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
  }
`;
const Inner = styled.div`
  width: 1080px;
  height: 320px;
  padding: 33px 10px 40px 10px;
  // mobile 버전
  @media (max-width: 1080px) {
    width: 100%;
    height: 100%;
    padding: 20px 20px 24px 20px;
  }
`;

const Sec1 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Logo = styled.img`
  width: 85px;

  // mobile 버전
  @media (max-width: 1080px) {
    display: none;
  }
`;

const TextSec = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 10px;

  @media (max-width: 1080px) {
    margin: 24px 0 0 0;
  }
`;

const Text_Btn = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: black;
  margin-right: 32px;
  &:last-child {
    margin-right: 0;
  }
  cursor: pointer;

  @media (max-width: 1080px) {
    font-size: 12px;
    margin-right: 20px;
  }
`;

const Sec2 = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 26px;
  :last-child {
    margin-right: 10px;
  }

  // mobile 버전
  @media (max-width: 1080px) {
    justify-content: flex-start;
    margin: 0;
  }
`;

const SNS_Btn = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 12px;
  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 1080px) {
    margin: 0 12px 0 0;
  }
`;

const Sec3 = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 10px 0 0 0;

  // mobile 버전
  @media (max-width: 1080px) {
    margin: 20px 0 0 0;
  }
`;

const Text = styled.p`
  margin: 0 0 5px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  @media (max-width: 1080px) {
    font-size: 12px;
    color: #666666;
  }
`;

export default Footer;
