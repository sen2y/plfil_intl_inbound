import { useEffect, useState } from "react";

// 커스텀 훅 생성
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile(); // 초기 로드 시 체크
    window.addEventListener("resize", checkIsMobile); // 창 크기 변경 감지

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return isMobile;
}

export default useIsMobile;
