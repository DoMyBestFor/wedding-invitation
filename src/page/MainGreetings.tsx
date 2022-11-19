import { Divider } from "antd";
import flower from "../img/flower.jpg";
import { CalendarWedding } from "../component/CalendarWedding";
import { BoldContents, Contents, HeaderName, WeddingInfo } from "../style/Font";
import { MainImage } from "../style/Image";
import { ChapterTitle } from "../component/ChapterTitle";

export const MainGreetings: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      {/* Header */}
      <HeaderName>박종대</HeaderName>
      <Divider />
      <HeaderName>김정선</HeaderName>

      {/* Main Image */}
      <MainImage>
        <img src={flower} width="100%" alt="no img" />
      </MainImage>

      {/* Wedding Info */}
      <WeddingInfo>
        2022년 7월 9일, 토요일 오후 2시
        <br />
        보테가마지오 G층 로 스타뇨
      </WeddingInfo>

      {/* Chapter Title */}
      <ChapterTitle>사랑이 꽃피는 날에</ChapterTitle>

      {/* Chapter Contents */}
      <Contents>
        저희 두 사람이 사랑으로 만나
        <br />
        믿음으로 한 가정을 이루려고 합니다.
        <br />
        바쁘신 중에도 저희 두 사람의 앞날을
        <br />
        축복하여 주시면 감사하겠습니다.
      </Contents>
      <Contents style={{ marginBottom: "50px" }}>
        <BoldContents>박용균 · 태향춘</BoldContents>의 장남
        <BoldContents>종대</BoldContents>
        <br />
        <BoldContents>김병일 · 차연진</BoldContents>의 장녀
        <BoldContents>정선</BoldContents>
      </Contents>
      <CalendarWedding />
    </div>
  );
};
