import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";

import { fetchTrello } from "config/fetchers";

const Post: React.FC = ({ children, ...post }) => {
  return <p>{(post as Post).desc}</p>;
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await (
    await fetchTrello(
      `https://api.trello.com/1/lists/${process.env.TRELLO_POST_LIST_ID}/cards`,
      {
        fields: "id",
      }
    )
  ).json();

  return {
    paths: res.map((post: any) => ({ params: post })),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  let props = {};

  if (params) {
    const post = await (
      await fetchTrello(`https://api.trello.com/1/cards/${params.id}`, {
        attachments: true,
        fields: ["name", "desc"],
        attachment_fields: "url",
      })
    ).json();

    post.url = post.attachments[0]?.url || "";
    delete post.attachments;

    props = post;
  }

  return { props };
};
