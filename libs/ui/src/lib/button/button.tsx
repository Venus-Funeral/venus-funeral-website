import styled from 'styled-components';
import { PropsWithChildren } from 'react';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface ButtonProps {
  className?: string;
  href: string;
}

const StyledButton = styled.a`
  color: ${(props) => props.theme.colors.default};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 32px;
  border: 1px solid ${(props) => props.theme.colors.default};
  border-radius: 50px;
  transition: 250ms ease;
  cursor: pointer;

  &:hover {
    color: white;
    background: ${(props) => props.theme.colors.default};
    transition: 250ms ease;
  }
`;

export function Button({
  children,
  className,
  href
}: PropsWithChildren<ButtonProps>) {
  return (
    <Link href={href}>
      <StyledButton className={className}>
        {children}
      </StyledButton>
    </Link>
  );
}

export default Button;