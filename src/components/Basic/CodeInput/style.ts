import styled from '@emotion/styled';

export default styled.div<{ fields: number; error: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex: 1;

  /* @noflip */
  direction: ltr;

  > input {
    background: transparent;
    text-align: center;
    box-sizing: border-box;
    -webkit-appearance: initial;
    height: 50px;
    font-size: 20px;

    border: solid 1px ${(p) => p.theme.palette.border.default};
    width: ${(p) => `calc(${100 / p.fields}% - 15px)`};
    /* border-radius: ${(p) => p.theme.shape.borderRadius.sm}; */
    color: ${(p) => p.theme.palette.text.primary};

    ${(p) =>
      p.error &&
      `
			border-color: ${p.theme.palette.error.main}
		`};

    /* &:hover {
			outline: none;
			border: 2px solid ${(p) => p.theme.palette.primary.main};
		} */
    &:focus {
      outline: none;
      border: 2px solid ${(p) => p.theme.palette.primary.main};
    }
  }
`;
