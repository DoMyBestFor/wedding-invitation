import { CSSProperties } from "styled-components";
import { FlowerIcon } from "../style/Image";

export interface FlowerProps {
  style: CSSProperties;
}

export const Flower: React.FC<FlowerProps> = (props) => {
  return <FlowerIcon style={props.style}>{"\u2745"}</FlowerIcon>;
};
