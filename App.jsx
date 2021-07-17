import React, { Component } from "react";
import axios from "axios";

class app extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      loading: false,
      page: 0,
      prevY: 0
    };
  }

  getPhotos(page) {
    this.setState({ loading: true });
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      )
      .then((res) => {
        this.setState({ posts: [...this.state.posts,...res.data] });
        this.setState({ loading: false });
      });
  }

  componentDidMount() {
    this.getPhotos(this.state.page);

    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    };

    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.loadingRef);
  }

  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y) {
      const lastPhoto = this.state.posts[this.state.posts.length - 1];
      const curPage = lastPhoto.albumId;
      this.getPhotos(curPage);
      this.setState({ page: curPage });
    }
    this.setState({ prevY: y });
  }

  render() {
    // Additional css
    const loadingCSS = {
      height: "200px",
      width:"400px",
      margin: "30px"
    };

    // To change the loading icon behavior
    const loadingTextCSS = { display: this.state.loading ? "block" : "none" };   
    return (
      <div className="container">
        <div style={{ minHeight: "800px", margin: "20px" }}>
          {this.state.posts.map((user) => (
           <view>
            <p><new > {user.id}.</new></p>
            <new> Title : {user.title}.</new>
            <p><new> Body : {user.body}.</new></p>
          </view>     
          ))}          
        </div>
        <div
          ref={(loadingRef) => (this.loadingRef = loadingRef)}
          style={loadingCSS}
        >
          <span style={loadingTextCSS}>Loading...</span>
        </div>
      </div>
    );
  }
}

export default app;