import { Container, Text, Button } from "@venus-funeral/ui"
import styled from "styled-components"
import { attributes } from '../../../content/serviceOverviews.md'

const { sellPoints } = attributes

const StyledContainer = styled(Container)`
  margin-top: 80px;

  ${({theme}) => theme.breakPoints.tablet} {
    margin-top: 160px;
  }
`

const PointWrapper = styled.div`
  text-align: center;
  max-width: 720px;
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: 64px;
  }
`

const SubHeader = styled(Text)`
  font-weight: bold;
  margin-bottom: 24px;
`

const Content = styled(Text)`
  line-height: 32px;
`

const LinkWrapper = styled.div`
    max-width: 720px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.lightgold};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 48px 0;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`

const SellingPointsSection: React.FC = () => {
  return (
    <StyledContainer>
      {
        sellPoints && sellPoints.map(({ header, content }, idx) => (
          <PointWrapper key={idx}>
            <SubHeader component="h6" fontSize="h3">
              {header}
            </SubHeader>
            <Content fontSize="subtitle">
              {content}
            </Content>
          </PointWrapper>
        ))
      }
      <ButtonWrapper>
        <Button href="/processes">了解更多服務流程</Button>
      </ButtonWrapper>
    </StyledContainer>
  )
}

export default SellingPointsSection