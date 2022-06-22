import Link from 'next/link';
import styled from 'styled-components';
import Container from '../container/container';
import Logo from '../logo/logo';

/* eslint-disable-next-line */
export interface NavbarProps {}

const StyledNavbar = styled.nav`
  background: white;
  width: 100%;
  height: 96px;
  position: sticky;
  top: 0;
  margin-bottom: 8px;
  z-index: 500;
`;

const StyledContainer = styled(Container)`
  align-items: center;
  justify-content: space-between;
  display: flex;
`;

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.gray};
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

const navItems = [
  { label: '關於我們', href: '/about' },
  { label: '服務流程', href: '/processes' },
  { label: '帛事花牌', href: '/flowers' },
]

export function Navbar(props: NavbarProps) {
  return (
    <StyledNavbar>
      <StyledContainer>
        <Link href="/">
          <a>
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
      </StyledContainer>
    </StyledNavbar>
  );
}

export default Navbar;
