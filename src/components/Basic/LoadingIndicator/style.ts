import styled from '@emotion/styled';

export const Spinner = styled.div<{ size: Number; color: String }>`
  ${(p) => `
		width: ${p.size}px;
		height: ${p.size}px;
	`}

  svg {
    animation: rotate 2s linear infinite;

    circle {
      ${(p) =>
        `stroke: ${
          p.theme.palette[p.color] ? p.theme.palette[p.color].main : p.color
        }`}
      stroke-linecap: round;
      animation: dash 1.4s ease-in-out infinite;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export const Dots = styled.div<{ size: Number; color: String }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 24px;

  > div {
    border-radius: 50%;
    margin: 0 4px;
    animation-name: loading-dots;
    animation-duration: 0.4s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;

    &:nth-child(1) {
      animation-delay: 0s;
    }
    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }

    ${(p) => `
			width: ${p.size}px;
			height: ${p.size}px;
			background: ${
        p.theme.palette[p.color] ? p.theme.palette[p.color].main : p.color
      };
		`}
  }

  @keyframes loading-dots {
    0% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(0.9);
    }
  }
`;
