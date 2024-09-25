import Form from "./components/Form";
import Header from "./components/Header";
import Output from "./components/Output";
import { connect } from "react-redux";

const App = ({ memes }) => {
  return (
    <div>
      <Header />
      <Form />
      <Output />
      {memes.map((meme, index) => (
        <h4 key={index}>{meme.name}</h4>
      ))}
    </div>
  );
};

// mapStateToProps to map the Redux state to component props
const mapStateToProps = (state) => {
  return {
    memes: state.memes, // Adjust according to your state structure
  };
};

// Connect the App component to the Redux store
export default connect(mapStateToProps)(App);
