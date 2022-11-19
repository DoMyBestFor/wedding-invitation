import { Divider } from "antd";
import { Title } from "../style/Font";

export const ChapterTitle: React.FC = (props) => {
  return (
    <Divider style={{ marginTop: "50px" }}>
      <Title>{props.children}</Title>
    </Divider>
  );
};
