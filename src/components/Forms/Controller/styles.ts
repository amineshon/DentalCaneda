import styled from '@emotion/styled';

export const Root = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .formControl {
    width: 100%;
    margin: ${(p) => p.theme.spacing(2)};
  }

  .footer {
    margin: ${(p) => p.theme.spacing(2)} 0;
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }

  .submitButton {
    /* padding: ${(p) => p.theme.spacing(1)} ${(p) => p.theme.spacing(9)}; */
    height: 56px;
  }
`;
