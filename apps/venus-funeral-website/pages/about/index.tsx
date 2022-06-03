import { Container, PageLayout, Text } from "@venus-funeral/ui";
import { NextPage } from "next";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import styled, { keyframes } from "styled-components";
import { attributes, react as Content } from '../../../../content/aboutus.md'

console.log(attributes)

const {
  companyIntro,
  founderIntro,
  mediaReports,
  missions,
} = attributes

const StyledBannerWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column-reverse;
  /* justify-content: flex-end; */
  
  ${({ theme }) => theme.breakPoints.desktop} {
    justify-content: flex-end;
    flex-direction: row;
    max-height: 600px;
    height: 600px;
  }
`

const expand = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 95px;
  }
`

const StyledHeader = styled(Text) <{ disableUnderline?: boolean }>`
  margin-bottom: 0;
  position: relative;
  margin-bottom: 52px;

  &:after {
    display: ${({ disableUnderline }) => disableUnderline ? 'none' : 'block'};
    position: absolute;
    height: 4px;
    width: 0;
    bottom: -24px;
    left: 0%;
    content: '';
    background: ${({ theme }) => theme.colors.gold};
    border-radius: 4px;
    animation: 0.5s ${expand} ease-out;
    animation-delay: 1200ms;
    animation-fill-mode: forwards
  }
`

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`

const OurStoryWrapper = styled.div`
  position: relative;
  height: 100%;
  padding: 40px 0;
  display: flex;
  z-index: 100;
  display: flex;
  align-items: flex-start ;
  transform: translateY(-64px);
  padding: 0 24px;

  ${({ theme }) => theme.breakPoints.desktop} {
    width: 45%;
    left: 0;
    top: 0;
    align-items: center ;
    position: absolute;
    padding: 0;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: white;
  box-shadow:0 6px 20px rgb(0 0 0 / 20%);
  border-radius: 8px;
  width: 100%;
  height: auto;
  padding: 40px 42px;
  letter-spacing: 1.05px ;
  line-height: 180% ;
`

const ImageWrapper = styled.div`
  width: 100%;

  ${({ theme }) => theme.breakPoints.desktop} {
    width: 75%;
  }
`

const OwnerImage = styled.img`
  border-radius: 8px;
  width: 100%;
  margin-bottom: 60px;
  height: auto;
  z-index: 10;
  object-fit: cover;

  ${({ theme }) => theme.breakPoints.tablet} {
    width: 45%;
    margin-bottom: 0px;
  }

  ${({ theme }) => theme.breakPoints.desktop} {
    width: 35%;
  }
`

const OwnerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;

  ${({ theme }) => theme.breakPoints.tablet} {
    flex-direction: row;
  }
`

const OwnerTextWrapper = styled.div`
  padding: 0;
  border-radius: 8px;
  color: white;
  letter-spacing: 1.05px ;
  display:flex;
  gap: 24px;;
  flex-direction: column;
  align-items: flex-start;
  line-height: 180% ;

  ${({ theme }) => theme.breakPoints.tablet} {
    padding: 40px 36px;
  }
`

const OutterWrapper = styled.div`
  width: 100%;
  background:${({ theme }) => theme.colors.lightgold};
  padding: 100px 0;

  ${({ theme }) => theme.breakPoints.tablet} {
  }

  ${({ theme }) => theme.breakPoints.desktop} {
    margin-top: 160px;
  }
`;

const AboutusPage: NextPage = () => {
  console.log('mount')
  return (
    <PageLayout title="關於我們" description={companyIntro}>
      <Container>
        <StyledBannerWrapper>
          <OurStoryWrapper>
            <Slide left delay={500}>
              <Fade delay={500}>
                <TextWrapper>
                  <StyledHeader component="h6" fontSize="h3">我們的故事</StyledHeader>
                  <Text component="p" fontSize="body1">{companyIntro}</Text>
                </TextWrapper>
              </Fade>
            </Slide>
          </OurStoryWrapper>
          <ImageWrapper>
            <Fade>
              <BannerImage src="/aboutus.jpg" alt="banner image" />
            </Fade>
          </ImageWrapper>
        </StyledBannerWrapper>
      </Container>
        <Fade delay={600}>
      <OutterWrapper>
          <OwnerContainer>
            <OwnerImage src="/owner.jpg" alt="Owner Image"/>
            <OwnerTextWrapper>
              <StyledHeader disableUnderline component="h6" fontSize="h3" color="inherit">Title</StyledHeader>
              <Text component="p" fontSize="body1" color="inherit">
                {founderIntro}
              </Text>
            </OwnerTextWrapper>
          </OwnerContainer>
      </OutterWrapper>
        </Fade>
    </PageLayout>
  )
}

export default AboutusPage
