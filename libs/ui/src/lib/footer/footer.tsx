/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import Container from '../container/container';
import Link from 'next/link';
import Logo from '../logo/logo';

/* eslint-disable-next-line */
export interface FooterProps {}

const StyledFooter = styled.div`
  background: ${(props) => props.theme.colors.khaki};
  width: 100%;
  color: white;
  padding: 40px 0;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ${({ theme }) => theme.breakPoints.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: start;
  justify-content: flex-start;

  ${({ theme }) => theme.breakPoints.tablet} {
    flex-direction: column;
    gap: 8px;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 16px;
  flex-direction: column;

  ${({ theme }) => theme.breakPoints.tablet} {
    flex-direction: row;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;

  ${({ theme }) => theme.breakPoints.tablet} {
    align-items: flex-end;
    margin-top: 0%;
  }
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

const navItemsFirstRow = [
  { label: '關於我們', href: '/about' },
  { label: '服務流程', href: '/processes' },
  { label: '聯絡我們', href: '/' },
];

const navItemsSecondRow = [
  { label: 'Facebook', href: process.env['facebookUrl'] as string},
];

export function Footer(props: FooterProps) {
  return (
    <StyledFooter>
      <StyledContainer>
        <LinksContainer>
          <LinksWrapper>
            <h4>金星殯儀</h4>
            {navItemsFirstRow &&
              navItemsFirstRow.map(({ label, href }, idx) => (
                <Link href={href} key={idx} passHref>
                  <a>{label}</a>
                </Link>
              ))}
          </LinksWrapper>
          <LinksWrapper>
            <h4>關注我們</h4>
            {navItemsSecondRow &&
              navItemsSecondRow.map(({ label, href }, idx) => (
                <Link href={href} key={idx} passHref>
                  <a target="_blank">{label}</a>
                </Link>
              ))}
          </LinksWrapper>
        </LinksContainer>
        <LogoWrapper>
          <Link href="/">
            <a>
              <BottomLogo />
            </a>
          </Link>
          <StyledP>@2022 Venus Funeral</StyledP>
        </LogoWrapper>
      </StyledContainer>
    </StyledFooter>
  );
}

export default Footer;
