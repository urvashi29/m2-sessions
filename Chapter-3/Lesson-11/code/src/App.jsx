import React from "react";
import Memo from "./components/Memo";
import Callback from "./components/Callback";
import User from "./pages/User";
import Search from "./components/Search";
import Posts from "./pages/Posts";
import SuspenseComponent from "./components/SuspenseComponent";

const App = () => {
  return (
    <>
      {/* <Memo />
      <Callback /> */}
      {/* <User /> */}
      <Search />
      <SuspenseComponent />
    </>
  );
};

export default App;
