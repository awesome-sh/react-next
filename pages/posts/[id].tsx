import { NextPage, NextPageContext } from 'next';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { getPost, PostType } from '../../api';
import { MainLayout } from '../../components/MainLayout';
import { Post } from '../../components/Post';

interface Props {
  post: PostType;
}

const PostDetailPage: NextPage<Props> = ({ post }) => {
  return (
    <MainLayout title={`${post.title} 게시글`}>
      <Link href="/">
        <BackToHome>홈으로 돌아가기 가기</BackToHome>
      </Link>
      <Divier />
      <Post post={post} />
    </MainLayout>
  );
};

PostDetailPage.getInitialProps = async (ctx: NextPageContext) => {
  const { id } = ctx.query;

  const { post } = await getPost(id as string);

  return {
    post
  };
};

export default PostDetailPage;

const BackToHome = styled.a`
  color: #2f5fd1;
  cursor: pointer;
  display: block;
`;

const Divier = styled.div`
  height: 1px;
  border-bottom: 1px solid #eeeeee;
  margin: 24px 0;
`;
