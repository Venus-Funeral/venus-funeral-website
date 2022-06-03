import styled from 'styled-components';
import { PageLayout, Navbar, ServicePreviewCard, Container } from '@venus-funeral/ui'
import { attributes, react as Content } from '../../../content/serviceOverviews.md'

const { services } = attributes
console.log(services)
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 6px;
  grid-row-gap: 6px;

  ${({theme}) => theme.breakPoints.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  ${({theme}) => theme.breakPoints.desktop} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`

export function Index() {
  return (
    <PageLayout
      title="金星殯儀"
      description="123"
    >
      <Container>
        <CardWrapper>
          {
            services && services.map((service, idx) => (
              <ServicePreviewCard key={idx} {...service} />
            ))
          }
        </CardWrapper>
      </Container>
    </PageLayout>
  );
}

export default Index;
