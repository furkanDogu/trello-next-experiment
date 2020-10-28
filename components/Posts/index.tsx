import React from "react";

import * as S from "./styles";

type Props = {
  posts: Post[];
};

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <S.Wrap>
      <h2>Posts</h2>
      {posts.map((post) => (
        <S.Post key={post.id} {...post} />
      ))}
    </S.Wrap>
  );
};

export default Posts;
