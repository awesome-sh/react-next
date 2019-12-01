import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

import { Header } from './Header';

interface Props {
  title: string;
}

export const MainLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Main>{children}</Main>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: white;
`;

const HeaderWrapper = styled.header`
  width: 100%;
  padding: 30px 24px;
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 12px;
`;

const Main = styled.main`
  width: 100%;
  padding: 30px 24px;
`;
