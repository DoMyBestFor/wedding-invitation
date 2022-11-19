import { Col, Row } from "antd";
import styled from "styled-components";

import { MdCall, MdMessage } from "react-icons/md";
import { BiCalendarCheck } from "react-icons/bi";
import { InfoButton } from "../style/Font";
import { ChapterTitle } from "../component/ChapterTitle";

const HalfDivider = styled.div`
  width: 50%;
  margin-left: 25%;
  height: 1px;
  background-color: buttonHighlight;
  margin-bottom: 3vh;
`;

// 리팩토링 미완료

export const ContactInfo: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <ChapterTitle>연락하기</ChapterTitle>
      <br />
      <br />
      <br />
      <Row>
        <Col span={12}>
          <div
            style={{
              opacity: "0.5",
              fontWeight: "bold",
              marginBottom: "5vh",
              fontSize: "1.5rem",
              color: "blue",
            }}
          >
            신랑측
          </div>
          <HalfDivider />
          <div style={{ fontSize: "1.3rem" }}>신랑</div>
          <div style={{ fontSize: "1.5rem", marginTop: "3vh" }}>
            <a href="tel:1">
              <MdCall style={{ width: "50%" }} />
            </a>
            <a href="sms:1" style={{ color: "black" }}>
              <MdMessage style={{ width: "50%" }} />
            </a>
          </div>
          <div style={{ fontSize: "1.3rem", marginTop: "5vh" }}>아버지 박용균</div>
          <div style={{ fontSize: "1.5rem", marginTop: "3vh" }}>
            <a href="tel:2">
              <MdCall style={{ width: "50%" }} />
            </a>
            <a href="sms:2" style={{ color: "black" }}>
              <MdMessage style={{ width: "50%" }} />
            </a>
          </div>
          <div style={{ fontSize: "1.3rem", marginTop: "5vh" }}>어머니 태향춘</div>
          <div style={{ fontSize: "1.5rem", marginTop: "3vh" }}>
            <a href="tel:3">
              <MdCall style={{ width: "50%" }} />
            </a>
            <a href="sms:3" style={{ color: "black" }}>
              <MdMessage style={{ width: "50%" }} />
            </a>
          </div>
        </Col>
        <Col span={12}>
          <div
            style={{
              opacity: "0.5",
              fontWeight: "bold",
              marginBottom: "5vh",
              fontSize: "1.5rem",
              color: "#f16ca1",
            }}
          >
            신부측
          </div>
          <HalfDivider />
          <div style={{ fontSize: "1.3rem" }}>신부</div>
          <div style={{ fontSize: "1.5rem", marginTop: "3vh" }}>
            <a href="tel:4">
              <MdCall style={{ width: "50%" }} />
            </a>
            <a href="sms:4" style={{ color: "black" }}>
              <MdMessage style={{ width: "50%" }} />
            </a>
          </div>
          <div style={{ fontSize: "1.3rem", marginTop: "5vh" }}>아버지 김병일</div>
          <div style={{ fontSize: "1.5rem", marginTop: "3vh" }}>
            <a href="tel:5">
              <MdCall style={{ width: "50%" }} />
            </a>
            <a href="sms:5" style={{ color: "black" }}>
              <MdMessage style={{ width: "50%" }} />
            </a>
          </div>
          <div style={{ fontSize: "1.3rem", marginTop: "5vh" }}>어머니 차연진</div>
          <div style={{ fontSize: "1.5rem", marginTop: "3vh" }}>
            <a href="tel:6">
              <MdCall style={{ width: "50%" }} />
            </a>
            <a href="sms:6" style={{ color: "black" }}>
              <MdMessage style={{ width: "50%" }} />
            </a>
          </div>
        </Col>
      </Row>
      <InfoButton
        onClick={() => {
          window.location.href =
            "https://docs.google.com/forms/d/e/1FAIpQLSfC89D6L9KMNCQU0H25ZRhs7MbjMYMdyR0DWHJyJuPrTDOgig/viewform";
        }}
      >
        <BiCalendarCheck style={{ marginRight: "5vw" }} />
        참석 여부 체크하기
      </InfoButton>
    </div>
  );
};
