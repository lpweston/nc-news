import React, { Component } from "react";
import TopicList from "./TopicList";

class SideBar extends Component {
  render() {
    return (
      <div id="sidebar">
        <h3>Topics</h3>
        <TopicList />
        <h3>Sort</h3>
        <ul>
          <li>Date {this.makeButtons("created_at")}</li>
          <li>Votes {this.makeButtons("votes")}</li>
          <li>Comments {this.makeButtons("commnet_count")}</li>
          <li>Title {this.makeButtons("title")}</li>
          <li>Author {this.makeButtons("author")}</li>
        </ul>
        <input></input>
        <button>Search</button>
      </div>
    );
  }
  makeButtons = sortParam => {
    const { sortArticles } = this.props;
    return (
      <>
        <button value={sortParam + " asc"} onClick={sortArticles}>
          ^
        </button>
        <button value={sortParam + " desc"} onClick={sortArticles}>
          v
        </button>
      </>
    );
  };
}

export default SideBar;
