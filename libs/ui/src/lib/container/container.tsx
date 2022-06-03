import { PropsWithChildren } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ContainerProps {
  className?: string;
}

const StyledContainer = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0 24px;
`;

export function Container({
  children,
  className,
}: PropsWithChildren<ContainerProps>) {
  return (
    <StyledContainer className={className}>
      {children}
    </StyledContainer>
  );
}

export default Container;
