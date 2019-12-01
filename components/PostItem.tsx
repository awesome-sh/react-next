import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { PostType } from '../api';

interface Props {
  post: PostType;
}

export const PostItem: React.FC<Props> = ({ post }) => {
  return (
    <Link href={`/posts/[id]`} as={`/posts/${post.id}`}>
      <Container>{post.title}</Container>
    </Link>
  );
};

const Container = styled.div`
  width: 100%;
  border: 1px solid #eeeeee;
  padding: 32px;
  cursor: pointer;
`;
