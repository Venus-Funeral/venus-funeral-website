import styled, { css } from 'styled-components';
import { PropsWithChildren } from 'react';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface IconButtonProps {
  className?: string;
  color?: string;
  iconSize?: number;
}

type ButtonProps = IconButtonProps & React.ComponentPropsWithoutRef<'button'> & {
  href?: undefined;
}

type AnchorProps = IconButtonProps & React.ComponentPropsWithRef<'a'> & {
  href: string;
}

type ButtonLinkProps = ButtonProps | AnchorProps

const isLink = (props: ButtonLinkProps): props is AnchorProps => 'href' in props
const isButton = (props: ButtonLinkProps): props is ButtonProps => props.href === undefined

interface StyledIconButtonIconProps {
  size?: number;
  color?: string
}

const StyledIconButton = styled.button<StyledIconButtonIconProps>`
  border-radius: 50px;
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ size }) => size || 40}px;
  padding: 4px;
  cursor: pointer;
`;

export function IconButton({
  color,
  className,
  children,
  iconSize,
  ...props
}: PropsWithChildren<ButtonLinkProps>) {
  if (isLink(props)) {
    return (
      <Link href={props.href} passHref>
        <StyledIconButton
          size={iconSize}
          className={className}
          as="a"
          {...props}
        >
          {children}
        </StyledIconButton>
      </Link>
    )
  }

  if (isButton(props)) {
    return (
      <StyledIconButton
        size={iconSize}
        className={className}
        {...props}
      >
        {children}
      </StyledIconButton>
    )
  }

  return null
}

export default IconButton;
