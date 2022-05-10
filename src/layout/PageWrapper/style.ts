import styled from '@emotion/styled';

// Styles
export const Root = styled.div<{ headerVisible: Boolean }>`
  min-height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;
  margin: 0;
  min-width: 0;
  display: flex;
  flex-direction: column;

  ${(p) =>
    p.headerPadding &&
    `
		
	`}

  .MuiInputLabel-root {
    /* @noflip */
    /* left: 0; */

    /* @noflip */
    /* right: auto; */
  }
`;

export const Content = styled.div<{ headerVisible: Boolean }>`
  padding-top: 24px;
  background-color: ${(p) => p.theme.palette.background.default};
  ${(p) =>
    p.headerVisible &&
    `
		min-height: calc(100vh - ${p.theme.shape.headerHeight}px);
	`}
`;
