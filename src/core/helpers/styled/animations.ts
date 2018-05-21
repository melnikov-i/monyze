import { keyframes } from 'styled-components';

/**
 * Анимация страницы по умолчанию
 */
export const emergence = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;