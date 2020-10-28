import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import { Posts } from "components";
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
      <Posts posts={posts as Post[]} />
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

  return {
    props: {
      posts: res.map(({ id, name, ...rest }: any) => ({
        id,
        name,
        url: rest.attachments[0]?.url || "",
      })),
    },
  };
};
