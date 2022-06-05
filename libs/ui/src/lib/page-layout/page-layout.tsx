import styled from 'styled-components';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
import Navbar from '../navbar/navbar';
import { ImWhatsapp } from 'react-icons/im'

/* eslint-disable-next-line */
export interface PageLayoutProps {
  title?: string;
  description?: string;
}

const WhatsappFab = styled.a`
  position: fixed;
  background: #23CE63;
  right: 24px;
  bottom: 24px;
  color: white;
  padding: 16px;
  border-radius: 50%;
  z-index: 500;
  cursor: pointer;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 6%), 0 2px 32px 0 rgb(0 0 0 / 16%);

  svg {
    fill: white;
  }

  ${({theme}) => theme.breakPoints.desktop} {
    right: 32px;
    bottom: 60px;
  }
`

export function PageLayout({
  title,
  description,
  children
}: PropsWithChildren<PageLayoutProps>) {
  return (
    <>
      <Head>
        <meta name="keywords" content="" />
        <meta name="description" content={description} />
        {/*Facebook SEO*/}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {/* <meta property="og:image" content={thumbnail} /> */}

        {/*Twitter SEO*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chainsify" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {/* <meta name="twitter:image" content={thumbnail} /> */}
      </Head>
      <Navbar />
      {children}
      <WhatsappFab>
        <ImWhatsapp color="#fff" fontSize={42}/>
      </WhatsappFab>
    </>
  );
}

export default PageLayout;
