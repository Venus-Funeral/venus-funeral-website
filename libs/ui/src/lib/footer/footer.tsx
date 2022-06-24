import styled from 'styled-components';
import Container from '../container/container';
import Link from 'next/link';
import Logo from '../logo/logo';

/* eslint-disable-next-line */
export interface FooterProps {}

const StyledFooter = styled.div`
  background: ${(props) => props.theme.colors.khaki};
  width: 100%;
  height: 136px;
  color: white;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  /* margin: 0 0 12px 12px; */
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
`;

const LinksWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 16px;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const BottomLogo = styled(Logo)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 72px;
`;

const StyledP = styled.p`
  font-size: ${(props) => props.theme.fontSize.body2};
`;

const navItems_first = [
  { label: '關於我們', href: '/about' },
  { label: '服務流程', href: '/processes' },
  { label: '聯絡我們', href: '/' },
];

const navItems_second = [
  { label: 'Youtube', href: '/' },
  { label: 'Instagram', href: '/' },
];

export function Footer(props: FooterProps) {
  return (
    <StyledFooter>
      <StyledContainer>
        <LinksContainer>
          <LinksWrapper>
            <h4>金星殯儀</h4>
            {navItems_first &&
              navItems_first.map(({ label, href }, idx) => (
                <Link href={href} key={idx} passHref>
                  <a>{label}</a>
                </Link>
              ))}
          </LinksWrapper>
          <LinksWrapper>
            <h4>關注我們</h4>
            {navItems_second &&
              navItems_second.map(({ label, href }, idx) => (
                <Link href={href} key={idx} passHref>
                  <a>{label}</a>
                </Link>
              ))}
          </LinksWrapper>
        </LinksContainer>
        <LogoWrapper>
          <a>
            <BottomLogo />
          </a>
          <StyledP>@2022 Venus Funeral</StyledP>
          <StyledP>服務及條款</StyledP>
        </LogoWrapper>
      </StyledContainer>
    </StyledFooter>
  );
}

export default Footer;
