import { NextPage } from "next";
import { Container, Header, PageLayout, TextBanner, transformCloundinaryImage } from '@venus-funeral/ui';
import { attributes, react as Content } from '../../../../content/serviceOverviews.md'

const { services } = attributes

const ServiceDetailPage: NextPage = ({ data }: any) => {
  return (
    <PageLayout>
      <TextBanner
        header={data.serviceName}
        content={data.serviceDescription}
        imageSrc={transformCloundinaryImage(data.serviceImage || data.thumbnail, 891)}
      />
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
