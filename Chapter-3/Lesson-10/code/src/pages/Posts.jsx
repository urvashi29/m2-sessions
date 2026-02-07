import React, { useEffect } from "react";
import { useGetAllPostQuery, useGetPostByIdQuery } from "../slices/postSlice";

const Posts = () => {
  const responsePosts = useGetAllPostQuery();
  const particularPost = useGetPostByIdQuery(2);
  console.log(particularPost);

  console.log(responsePosts);

  if (responsePosts.isLoading) return <div>Loading....</div>;

  const postList = responsePosts.data.map((post) => {
    return <p key={post.id}>{post.title}</p>;
  });

  return <>{postList}</>;
};

export default Posts;
