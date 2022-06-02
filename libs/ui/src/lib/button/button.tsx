import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {}

const StyledButton = styled.div`
  color: ${(props) => props.theme.colors.gold}
`;

export function Button(props: ButtonProps) {
  return (
    <StyledButton>
      <h1>Welcome to Button!</h1>
    </StyledButton>
  );
}

export default Button;
