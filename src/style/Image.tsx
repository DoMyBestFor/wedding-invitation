import styled from "styled-components";
import { animations } from "./global/Animation";
import { theme } from "./global/Theme";

export const MainImage = styled.div`
  margin: 50px 0;
  animation: appear 2s linear;
  ${animations.appear};
`;

export const FlowerIcon = styled.span`
  color: ${theme.colors.pink};
  animation: fall 2s ease-in infinite;
  ${animations.fall};
`;
