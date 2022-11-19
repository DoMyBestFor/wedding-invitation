import { Button, Col, Divider, Row } from "antd";
import map from "../img/map.jpg";

import {
  MdOutlineMap,
  MdDirectionsSubway,
  MdDirectionsBusFilled,
  MdLocalParking,
  MdOutlineCall,
  MdOutlineTransform,
} from "react-icons/md";
import { AiFillCalendar } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { PlaceContents, Title } from "../style/Font";
import { ChapterTitle } from "../component/ChapterTitle";
import { TransportLabel } from "../component/TransportLabel";

export const PlaceInfo: React.FC = () => {
  return (
    <div>
      <ChapterTitle>오시는 길</ChapterTitle>
      <img width="100%" src={map} alt="no img" />
      <div style={{ textAlign: "center" }}>
        <PlaceContents>
          <Row style={{ padding: "1rem" }}>
            <Col span={24} style={{ fontWeight: "bold" }}>
              <MdOutlineMap style={{ marginRight: "30px" }} />
              위치
            </Col>
            <Col span={24}>서울시 성동구 서울숲2길 32-14 갤러리아포레 G층(B2)</Col>
          </Row>
          <Row style={{ padding: "1rem" }}>
            <Col span={24} style={{ fontWeight: "bold" }}>
              <MdDirectionsSubway style={{ marginRight: "3vw" }} />
              지하철
            </Col>
            <Col span={24}>
              <TransportLabel type="분당선" />
              서울숲역 5번 출구 도보 2분
            </Col>
            <Col span={24}>
              <TransportLabel type="2호선" />
              뚝섬역 8번 출구 도보 5분
            </Col>
          </Row>
          <Row style={{ padding: "1rem" }}>
            <Col span={24} style={{ fontWeight: "bold" }}>
              <MdDirectionsBusFilled style={{ marginRight: "3vw" }} />
              버스
            </Col>
            <Col span={24}>
              <TransportLabel type="간선" />
              121, 141, 145, 148, 463 - 뚝섬 서울숲
            </Col>
            <Col span={24}>
              <TransportLabel type="지선" />
              2014, 2224, 2413 - 성동구민 종합 체육센터
            </Col>
            <Col span={24}>
              <span style={{ marginLeft: "5vw" }}>2016, 2224, 2413 - 뚝섬역 8번 출구</span>
            </Col>
          </Row>
          <Row style={{ padding: "1rem" }}>
            <Col span={24} style={{ fontWeight: "bold" }}>
              <MdLocalParking style={{ marginRight: "3vw" }} />
              주차
            </Col>
            <Col span={24}>건물 내 B3-B7 2시간 무료주차(안내데스크 주차 등록)</Col>
          </Row>
          <Row style={{ padding: "1rem" }}>
            <Col span={24} style={{ fontWeight: "bold" }}>
              <MdOutlineCall style={{ marginRight: "3vw" }} />
              연락처
            </Col>
            <Col span={24}>
              <a href="tel:1234" style={{ textAlign: "center" }}>
                <Button style={{ backgroundColor: "inherit", border: "none", boxShadow: "none" }}>
                  1234
                </Button>
              </a>
            </Col>
          </Row>
        </PlaceContents>
        <Row>
          <Col
            span={12}
            style={{ marginTop: "30px" }}
            onClick={() => {
              window.location.href = "http://naver.me/xI8XdhbT";
            }}
          >
            <BiMap style={{ fontSize: "2rem" }} />
            <p>지도에서 검색하기</p>
          </Col>
          <Col
            span={12}
            style={{ marginTop: "30px" }}
            onClick={() => {
              window.location.href = "http://naver.me/Gv9TrrwI";
            }}
          >
            <MdOutlineTransform style={{ fontSize: "2rem" }} />
            <p>노선도에서 검색하기</p>
          </Col>
        </Row>
      </div>
      <Divider style={{ marginTop: "10vh", marginBottom: "5vh" }}>
        <Title>피로연</Title>
      </Divider>
      <div style={{ textAlign: "center" }}>
        <PlaceContents>
          <Row style={{ padding: "1rem" }}>
            <Col span={24} style={{ fontWeight: "bold" }}>
              <MdOutlineMap style={{ marginRight: "3vw" }} />
              위치
            </Col>
            <Col span={24}>경북 영주시 광복로 32번길 16 남서울예식장 3층 연회장</Col>
          </Row>
          <Row style={{ padding: "1rem" }}>
            <Col span={24} style={{ fontWeight: "bold" }}>
              <AiFillCalendar style={{ marginRight: "3vw" }} />
              일정
            </Col>
            <Col span={24}>2022년 6월 25일 토요일 18시</Col>
          </Row>
          <Row style={{ padding: "1rem" }}>
            <Col span={24} style={{ fontWeight: "bold" }}>
              <MdDirectionsBusFilled style={{ marginRight: "3vw" }} />
              주변 정류장
            </Col>
            <Col span={24}>제일교회, 영광중학교 건너, 영광중학교, 중앙시장, 시외버스 정류장</Col>
          </Row>
          <Row style={{ padding: "1rem" }}>
            <Col span={24} style={{ fontWeight: "bold" }}>
              <MdOutlineCall style={{ marginRight: "3vw" }} />
              연락처
            </Col>
            <Col span={24}>
              <a href="tel:1234" style={{ textAlign: "center" }}>
                <Button style={{ backgroundColor: "inherit", border: "none", boxShadow: "none" }}>
                  1234
                </Button>
              </a>
            </Col>
          </Row>
        </PlaceContents>
        <Row>
          <Col
            span={24}
            style={{ marginTop: "30px" }}
            onClick={() => {
              window.location.href = "http://naver.me/G6Ddqt9Z";
            }}
          >
            <BiMap style={{ fontSize: "2rem" }} />
            <p>지도에서 검색하기</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};
