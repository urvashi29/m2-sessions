import React, { Suspense } from "react";

const Post = React.lazy(() => import("../../pages/Posts"));

const index = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Post />
    </Suspense>
  );
};

export default index;
