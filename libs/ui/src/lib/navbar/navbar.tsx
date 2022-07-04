import Link from 'next/link';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from '../container/container';
import Logo from '../logo/logo';
import MobileMenu from '../mobile-menu/mobile-menu';

/* eslint-disable-next-line */
export interface NavbarProps {}

const StyledNavbar = styled.nav<{showBorder?: boolean}>`
  background: white;
  border-bottom: ${({showBorder}) => showBorder ? '1px solid #EBEBEB' : '1px solid white'};
  transition: 200ms ease;
  width: 100%;
  height: 96px;
  position: sticky;
  top: 0;
  margin-bottom: 24px;
  z-index: 500;
`;

const StyledContainer = styled(Container)`
  align-items: center;
  justify-content: space-between;
  display: flex;
  background: white;
  max-height: 95px;
`;

const LinksWrapper = styled.div`
  display: none;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;

  ${({ theme }) => theme.breakPoints.tablet} {
    display: flex;
  }
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.default};
  font-size: ${({ theme }) => theme.fontSize.body1};
  position: relative;
  transition: 200ms ease;

  &:after {
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: '.';
    color: transparent;
    background: #b48650;
    height: 3px;
    transition: 200ms ease;
    border-radius: 4px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
    transition: 200ms ease;

    &:after {
      transition: 200ms ease;
      width: 100%;
    }
  }
`;

export const navItems = [
  { label: '關於我們', href: '/about' },
  { label: '服務概覽', href: '/services' },
  { label: '服務流程', href: '/processes' },
  { label: '帛事花牌', href: '/flowers' },
  { label: '聯絡我們', href: '/contact' },
];

export function Navbar(props: NavbarProps) {
  const [showBorder, setShowBorder] = useState(false)
  console.log('showBorder',showBorder)
  useEffect(() => {
    const handleScroll = () => {
      // console.log('window.scrollY', window.scrollY)
      if (window.scrollY > 10) {
        setShowBorder(true)
      } else {
        setShowBorder(false)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true })
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])
  
  return (
    <StyledNavbar showBorder={showBorder}>
      <StyledContainer>
        <Link href="/">
          <a style={{ zIndex: 100 }}>
            <Logo />
          </a>
        </Link>
        <LinksWrapper>
          {navItems &&
            navItems.map(({ label, href }) => (
              <Link href={href} key={href} passHref>
                <StyledLink>{label}</StyledLink>
              </Link>
            ))}
        </LinksWrapper>
        <MobileMenu />
      </StyledContainer>
    </StyledNavbar>
  );
}

export default Navbar;
