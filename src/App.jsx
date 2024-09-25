import React, { Component } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Output from "./components/Output";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.state = {
      memeLimit: 10, // Limit for displaying memes
    };
  }

  render() {
    const { memes } = this.props; // Access memes from props passed via Redux

    return (
      <div className="text-textColor">
        <Header />
        <Form />
        <Output />
        {/* Use slice to limit the number of memes displayed */}
        {memes.slice(0, this.state.memeLimit).map((meme, index) => (
          <h4 key={index}>{meme.name}</h4>
        ))}
        <div
          className=""
          onClick={() => {
            this.setState({ memeLimit: this.state.memeLimit + 10 });
          }}
        >
          Load More
        </div>
      </div>
    );
  }
}

// mapStateToProps to map the Redux state to component props
const mapStateToProps = (state) => {
  return {
    memes: state.memes, // Adjust according to your state structure
  };
};

// Connect the App component to the Redux store
export default connect(mapStateToProps)(App);
