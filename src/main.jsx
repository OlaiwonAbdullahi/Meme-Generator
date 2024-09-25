import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index.jsx";
import { fetchMeme } from "./actions/Index.jsx";
import { thunk } from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => console.log("store", store.getState()));

store.dispatch(fetchMeme());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
