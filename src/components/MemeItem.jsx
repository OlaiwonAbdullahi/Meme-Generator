import React, { Component } from "react";

class MemeItem extends Component {
  render() {
    const { meme } = this.props;

    return (
      <div className="mt-7">
        <img
          src={meme.url}
          alt={meme.name}
          className="meme-image w-full h-auto rounded mb-2"
        />
        <p className="meme-name text-center text-sm font-semibold">
          {meme.name}
        </p>
      </div>
    );
  }
}

export default MemeItem;
