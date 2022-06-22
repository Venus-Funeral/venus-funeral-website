import { NextPage } from "next";
import styled from "styled-components";
import { Button, Container, Header, PageLayout, Text, TextBanner, transformCloundinaryImage } from '@venus-funeral/ui';
import { attributes, react as Content } from '../../../../content/serviceOverviews.md'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import IconButton from '../../../../libs/ui/src/lib/icon-button/icon-button';

const { services } = attributes

const MoreSection = styled.section`
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  margin: 120px 0 80px;;
  overflow: hidden;

  & > * {
    flex: 1 1 0;
    width: 50%;
  }

  ${({ theme }) => theme.breakPoints.tablet} {
    height: 676px;
    flex-direction: row;
  }

  & img {
    height: 100%;
    /* width: 100%; */
    /* object-fit: contain; */
  }
`

const MoreSectionTextWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightgold};
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 54px;

  & h6 {
    color: white;
  }
`

const ButtonLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 42px;
  max-width: 300px;
  font-size: 42px;
  gap: 32px;

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const ServiceDetailPage: NextPage = ({ data }: any) => {
  return (
    <PageLayout>
      <TextBanner
        header={data.serviceName}
        content={data.serviceDescription}
        imageSrc={transformCloundinaryImage(data.serviceImage || data.thumbnail, 891)}
      />
      <Container>
        <MoreSection>
          <MoreSectionTextWrapper>
            <Text fontSize="h2" component="h6">立即聯絡我們<br />了解更多</Text>
            <ButtonLinksWrapper>
              <IconButton>
                <FaFacebook />
              </IconButton>
              <FaWhatsapp />
              <HiOutlineMail />
              {/* <Button href="/processes">Whatsapp</Button>
              <Button href="/processes">了解其他服務</Button> */}
            </ButtonLinksWrapper>
          </MoreSectionTextWrapper>
          <div>
            <img src={transformCloundinaryImage(data.secondaryServiceImage || data.thumbnail || data.serviceImage, 720)} alt="" />
          </div>
        </MoreSection>
      </Container>
      {/* <Button href="/">
        
      </Button> */}
      {/* <Container>
        <Header>{data.serviceName}</Header>
      </Container> */}
    </PageLayout>
  )
}

export async function getStaticProps({ params: { service } }) {
  return {
    props: {
      data: services && services.find(({ serviceName }) => serviceName === service)
    }
  }
}

export async function getStaticPaths() {
  console.log('services', services)
  const paths = services && services.map(({ serviceName }) => ({ params: { service: serviceName } }))
  return {
    paths,
    fallback: false  // false or 'blocking'
  };
}


export default ServiceDetailPage
