import React, { Component } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Output from "./components/Output";
import { connect } from "react-redux";
import MemeItem from "./components/MemeItem";

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

        {/* Responsive grid layout with 4 columns on larger screens */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 w-full p-4">
          {memes.slice(0, this.state.memeLimit).map((meme, index) => (
            <MemeItem key={index} meme={meme} />
          ))}
        </div>

        {/* Load More Button */}
        <div
          className="mt-8 text-center cursor-pointer text-primary w-full mb-4"
          onClick={() => {
            this.setState({ memeLimit: this.state.memeLimit + 10 });
          }}
        >
          <button className="bg-bgColor border border-hrColor w-28 h-10 rounded-lg">
            Load More
          </button>
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
export default connect(mapStateToProps, null)(App);
