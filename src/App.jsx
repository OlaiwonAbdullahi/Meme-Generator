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
      memeLimit: 10,
      text0: "", // Initialize top text state
      text1: "", // Initialize bottom text state
    };
  }

  // Method to update text0 and text1 in state when called
  updateText = (newText0, newText1) => {
    this.setState({
      text0: newText0,
      text1: newText1,
    });
  };

  render() {
    const { memes } = this.props; // Access memes from props passed via Redux
    const { text0, text1, memeLimit } = this.state; // Access text0, text1 from state

    return (
      <div className="text-textColor">
        <Header />
        {/* Pass the updateText function as a prop to Form */}
        <Form updateText={this.updateText} />
        {/* <Output />
        Responsive grid layout with 3 to 6 columns depending on screen size 
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 w-full p-4">
          {memes.slice(0, memeLimit).map((meme, index) => (
            <MemeItem
              key={index}
              meme={meme}
              text0={text0} // Pass text0 state to MemeItem
              text1={text1} // Pass text1 state to MemeItem
            />
          ))}
        </div>

        
        <div
          className="mt-8 text-center cursor-pointer text-primary w-full mb-4"
          onClick={() => {
            this.setState({ memeLimit: memeLimit + 10 });
          }}
        >
          <button className="bg-bgColor border border-hrColor w-28 h-10 rounded-lg">
            Load More
          </button>
        </div>
        */}
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
