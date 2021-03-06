import React from "react";
import TopicList from "./TopicList";
import "../styles/panels.css";
import Nav from "./Nav";
import Sort from "./Sort";

const SideBar = ({ sortItems, item }) => {
  return (
    <div className="sidebar">
      <h2>
        <b>&lt;</b> Topics <b>/&gt;</b>
      </h2>
      <TopicList />
      <div className="seperator" />
      <Nav />
      <div className="seperator" />
      {item && (
        <>
          <h2>
            <b>&lt;</b> Sort <b>/&gt;</b>
          </h2>
          <Sort sortItems={sortItems} item={item} />{" "}
        </>
      )}
    </div>
  );
};

export default SideBar;
