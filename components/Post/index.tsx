import React from "react";

import * as S from "./styles";

type Props = {} & Post;

const Post: React.FC<Props> = ({ name, desc, url, id }) => {
  console.log(url);
  return (
    <a href={`/${id}`}>
      <S.Wrap>
        <S.Name>{name}</S.Name>
        {desc && <S.Description>{desc}</S.Description>}
        {url && <S.Image src={url} />}
      </S.Wrap>
    </a>
  );
};

export default Post;
