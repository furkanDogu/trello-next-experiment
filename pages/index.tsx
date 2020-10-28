import React from "react";
import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import { fetchTrello } from "config/fetchers";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>Trello Experiment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div></div>
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
