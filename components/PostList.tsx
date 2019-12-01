import React from 'react';
import styled from 'styled-components';

import { PostType } from '../api';
import { PostItem } from './PostItem';

interface Props {
  posts: PostType[];
}

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div>
      {posts.map(post => {
        return (
          <PostWrapper key={post.id}>
            <PostItem post={post} />
          </PostWrapper>
        );
      })}
    </div>
  );
};

const PostWrapper = styled.div`
  margin-bottom: 12px;
  :last-child {
    margin-bottom: 0;
  }
`;
