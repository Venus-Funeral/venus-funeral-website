import styled from 'styled-components';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
import Navbar from '../navbar/navbar';

/* eslint-disable-next-line */
export interface PageLayoutProps {
  title?: string;
  description?: string;
}

const StyledPageLayout = styled.div`
  color: pink;
`;

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
        {/* <meta property="og:url" content={`http://www.chainsify${path}`} /> */}
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
    </>
  );
}

export default PageLayout;
