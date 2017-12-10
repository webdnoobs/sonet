import React, { Component } from "react";
import NewsFeed from "./NewsFeed";
import Poster from "./Poster";

class PostList extends Component {
  render() {
    return (
      <div>
          <div> <Poster/> </div>
          <div> <NewsFeed/> </div>
      </div>
    );
  }
}

export default PostList;
