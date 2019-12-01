import { NextPage } from 'next';
import React from 'react';

import { getPosts, PostType } from '../api';
import { MainLayout } from '../components/MainLayout';
import { PostList } from '../components/PostList';

interface Props {
  posts: PostType[];
}

const Home: NextPage<Props> = ({ posts }) => (
  <MainLayout title="홈">
    <PostList posts={posts} />
  </MainLayout>
);

Home.getInitialProps = async () => {
  const { posts } = await getPosts();

  return {
    posts
  };
};

export default Home;
