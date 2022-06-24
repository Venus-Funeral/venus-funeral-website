import styled, { css } from 'styled-components';
import { PropsWithChildren } from 'react';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface ButtonProps {
  className?: string;
  href: string;
  variant?: 'contained' | 'outlined';
}

const StyledButton = styled.a<Partial<ButtonProps>>`
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

  ${({ variant, theme }) =>
    (variant === 'contained' && css`
      border: 1px solid ${theme.colors.default};
      color: white;
      background: ${theme.colors.default};
    `) ||
    (variant === 'outlined' && css`
      border: 1px solid ${theme.colors.default};
      color: ${theme.colors.default};

      &:hover {
        color: white;
        background: ${theme.colors.default};
        transition: 250ms ease;
      }
    `)
  }
`;

export function Button({
  children,
  className,
  href,
  variant = 'outlined',
}: PropsWithChildren<ButtonProps>) {
  return (
    <Link href={href}>
      <StyledButton className={className} variant={variant}>
        {children}
      </StyledButton>
    </Link>
  );
}

export default Button;