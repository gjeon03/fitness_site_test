import { keyframes } from "styled-components";

export const bounce = keyframes`
0% {
  transform: scale(1.05);
}
33% {
  transform: scale(1);
}
66% {
  transform: scale(1.05);
}
100% {
  transform: scale(1);
}
`;
