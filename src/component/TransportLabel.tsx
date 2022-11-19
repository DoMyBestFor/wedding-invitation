import { TransportBox } from "../style/Font";
import { theme } from "../style/global/Theme";

export type Transport = "분당선" | "2호선" | "간선" | "지선";

export interface TransportLabelProps {
  type: Transport;
}

export const TransportLabel: React.FC<TransportLabelProps> = (props) => {
  let color = `${theme.colors.white}`;

  switch (props.type) {
    case "분당선":
      color = theme.colors["yellow"];
      break;
    case "2호선":
      color = theme.colors.green;
      break;
    case "간선":
      color = theme.colors.blue;
      break;
    case "지선":
      color = theme.colors["green-100"];
      break;
  }
  return <TransportBox color={color}>{props.type}</TransportBox>;
};
