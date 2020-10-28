import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import { fetchTrello } from "config/fetchers";

type Props = {
  posts: Post[];
};

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Trello Experiment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await (
    await fetchTrello(
      `https://api.trello.com/1/lists/${process.env.TRELLO_POST_LIST_ID}/cards`,
      {
        attachments: true,
        fields: "name",
        attachment_fields: "url",
      }
    )
  ).json();

  return { props: { posts: res } };
};
