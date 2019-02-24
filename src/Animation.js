import { keyframes } from 'styled-components';



export const slideUp =keyframes`
  from {
    transform: translateY(8px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;
