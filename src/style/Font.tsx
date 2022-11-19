import styled from "styled-components";
import { text } from "./global/Text";
import { theme } from "./global/Theme";

export const HeaderName = styled.div`
  ${text.h2};
  text-align: center;
`;

export const WeddingInfo = styled.div`
  ${text.h3};
  margin-top: 20px;
  opacity: 0.6;
`;

export const Title = styled.p`
  ${text.h1};
  margin: auto;
`;

export const Contents = styled.p`
  ${text.body1};
  margin-top: 50px;
  opacity: 0.8;
`;

export const BoldContents = styled.p`
  ${text.h3};
  display: inline;
  margin: 0 20px;
`;

export const PlaceContents = styled(Contents)`
  text-align: left;
  @media screen and (min-width: 768px) {
    text-align: center;
  }
`;

export const TransportBox = styled.span<{ color: string }>`
  padding: 5px;
  background-color: ${(props) => props.color};
  ${text.body3};
  margin-right: 10px;
`;

export const InfoButton = styled.div`
  display: block;
  ${text.body1};
  margin-bottom: 5vh;
  background-color: ${theme.colors["red-300"]};
  &:hover {
    cursor: pointer;
    background-color: ${theme.colors["red-200"]};
  }
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 30px;
  }
`;
