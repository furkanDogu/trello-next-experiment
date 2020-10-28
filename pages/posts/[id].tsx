import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";

const Post: React.FC = () => <></>;

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
