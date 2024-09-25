export const RECEIEVE_MEMES = "RECEIEVE_MEMES";
function receiveMemes(json) {
  const { memes } = json.data;
  return {
    type: RECEIEVE_MEMES,
    memes,
  };
}

function fetchMemeJson() {
  return fetch("https://api.imgflip.com/get_memes");
}
