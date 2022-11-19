import { Col, message, Modal, Row } from "antd";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Contents, InfoButton } from "../style/Font";
import { ChapterTitle } from "../component/ChapterTitle";

export const AccountInfo: React.FC = () => {
  const [manOpen, setManOpen] = useState<boolean>(false);
  const [womanOpen, setWomanOpen] = useState<boolean>(false);
  return (
    <div style={{ textAlign: "center", marginTop: "10vh" }}>
      <ChapterTitle>마음 전하는곳</ChapterTitle>
      <Contents>축하의 마음을 담아 축의금을 전달해 보세요.</Contents>
      <br />
      <br />
      <Row>
        <Col span={24}>
          <InfoButton onClick={() => setManOpen(true)}>신랑측 계좌번호 확인하기</InfoButton>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <InfoButton onClick={() => setWomanOpen(true)}>신부측 계좌번호 확인하기</InfoButton>
        </Col>
      </Row>

      <Modal
        title="신랑측 계좌번호"
        visible={manOpen}
        onOk={() => setManOpen(false)}
        onCancel={() => setManOpen(false)}
      >
        <CopyToClipboard text={"d"}>
          <InfoButton onClick={() => message.success("복사 되었습니다.")}>신랑 박종대</InfoButton>
        </CopyToClipboard>
        <CopyToClipboard text={"d"}>
          <InfoButton onClick={() => message.success("복사 되었습니다.")}>부) 박용균</InfoButton>
        </CopyToClipboard>
        <Contents>
          <div style={{ margin: "5vw", fontSize: "0.7rem" }}>* 클릭하면 클립보드로 복사됩니다.</div>
        </Contents>
      </Modal>

      <Modal
        title="신부측 계좌번호"
        visible={womanOpen}
        onOk={() => setWomanOpen(false)}
        onCancel={() => setWomanOpen(false)}
      >
        <CopyToClipboard text={"d"}>
          <InfoButton onClick={() => message.success("복사 되었습니다.")}>신부 김정선</InfoButton>
        </CopyToClipboard>
        <CopyToClipboard text={"d"}>
          <InfoButton onClick={() => message.success("복사 되었습니다.")}>부) 김병일</InfoButton>
        </CopyToClipboard>
        <Contents>
          <div style={{ margin: "5vw", fontSize: "0.7rem" }}>* 클릭하면 클립보드로 복사됩니다.</div>
        </Contents>
      </Modal>
    </div>
  );
};
