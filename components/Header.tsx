import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

export const Header: React.FC = () => {
  return (
    <Container>
      <Link href="/">
        <Logo>Post-app</Logo>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  backgroudn-color: white;
  color: #222222;
`;

const Logo = styled.a`
  color: #222222;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
`;
