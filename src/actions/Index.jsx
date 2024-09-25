// Action type constant (fixed typo)
export const RECEIVE_MEMES = "RECEIVE_MEMES";

// Action creator for receiving memes
function receiveMemes(json) {
  const { memes } = json.data; // Destructure memes from json data
  return {
    type: RECEIVE_MEMES,
    memes,
  };
}

// Function to fetch memes from the API
function fetchMemeJson() {
  return fetch("https://api.imgflip.com/get_memes").then((response) =>
    response.json()
  ); // Removed the erroneous semicolon
}

// Thunk action creator to fetch memes and dispatch receiveMemes
export function fetchMeme() {
  return function (dispatch) {
    return fetchMemeJson().then((json) => dispatch(receiveMemes(json))); // Passing json to receiveMemes
  };
}
