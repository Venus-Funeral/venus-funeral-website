/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import styled from 'styled-components';
import {
  Container,
  IconButton,
  PageLayout,
  Text,
  TextBanner,
  transformCloundinaryImage,
} from '@venus-funeral/ui';
import {
  attributes,
} from '../../../../../content/serviceOverviews.md';
import { MdPhone, MdFacebook, MdOutlineEmail } from 'react-icons/md';

const { services } = attributes;

const MoreSection = styled.section`
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  margin: 120px 0 80px;
  overflow: hidden;

  & img {
    height: 100%;
    /* width: 100%; */
    /* object-fit: contain; */
  }

  ${({ theme }) => theme.breakPoints.tablet} {
    height: 676px;
    flex-direction: row;

    & > * {
    flex: 1 1 0;
    width: 50%;
    }
  }
`;

const MoreSectionTextWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightgold};
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 24px;

  & h6 {
    font-size: 32px;
    color: white;
  }

  ${({ theme }) => theme.breakPoints.tablet} {
    padding: 0 54px;

    & h6 {
      font-size: 64px;
    }
  }
`;

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
    <PageLayout
      title={data.serviceName}
      description={data.serviceDescription}
      disableCta
    >
      <TextBanner
        header={data.serviceName}
        content={data.serviceDescription}
        imageSrc={transformCloundinaryImage(
          data.serviceImage || data.thumbnail,
          891
        )}
      />
      <Container>
        <MoreSection>
          <MoreSectionTextWrapper>
            <Text fontSize="h2" component="h6">
              立即聯絡我們
              <br />
              了解更多
            </Text>
            <ButtonLinksWrapper>
              <IconButton href={process.env['facebookUrl']} target="_blank">
                <MdFacebook/>
              </IconButton>
              <IconButton href={`tel:${process.env['phone']}`}>
                <MdPhone />
              </IconButton>
              <IconButton href={`mailto:${process.env['email']}`}>
                <MdOutlineEmail />
              </IconButton>
              {/* <Button href="/processes">Whatsapp</Button>
              <Button href="/processes">了解其他服務</Button> */}
            </ButtonLinksWrapper>
          </MoreSectionTextWrapper>
          <div>
            <img
              src={transformCloundinaryImage(
                data.secondaryServiceImage ||
                  data.thumbnail ||
                  data.serviceImage,
                720
              )}
              alt=""
            />
          </div>
        </MoreSection>
      </Container>
    </PageLayout>
  );
};

export async function getStaticProps({ params: { service } }) {
  return {
    props: {
      data:
        services && services.find(({ serviceName }) => serviceName === service),
    },
  };
}

export async function getStaticPaths() {
  const paths =
    services &&
    services.map(({ serviceName }) => ({ params: { service: serviceName } }));
  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}

export default ServiceDetailPage;
