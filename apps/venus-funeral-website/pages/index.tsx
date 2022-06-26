import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PageLayout, Navbar, ServicePreviewCard, Container, MediaReportCarousel } from '@venus-funeral/ui'
import { attributes, react as Content } from '../../../content/serviceOverviews.md'
import TestimonySlides from '../components/TestimonySlides';
import SellingPointsSection from '../components/SellingPointsSection';

const { services, sellPoints } = attributes

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-bottom: 140px;

  ${({ theme }) => theme.breakPoints.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${({ theme }) => theme.breakPoints.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`

export function Index() {
  return (
    <PageLayout
      description={sellPoints[0].content}
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
      <SellingPointsSection />
      <TestimonySlides />
      <MediaReportCarousel/>
    </PageLayout>
  );
}

export default Index;
