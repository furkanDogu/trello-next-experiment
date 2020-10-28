import styled from "styled-components";

import { Post as BasePost } from "components";

export const Post = styled(BasePost)``;

export const Wrap = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: row;
  width: 100%;
  height: 100%;

  *:nth-child(even) {
    margin-left: 14px;
  }
  *:nth-child(odd) {
    margin-right: 14px;
  }
`;
