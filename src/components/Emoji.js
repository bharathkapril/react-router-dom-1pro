import { useState } from "react";
import { emoji } from "../emojiDB";

// console.log(emoji.map((emo) => emo.emoji));

const Emoji = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <h1>Emoji</h1>
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {emoji
        .filter((val) => {
          if (val === "") return val;
          else if (
            val.description.toLowerCase().includes(searchTerm.toLowerCase())
          )
            return val;
        })
        .map((emo, key) => {
          return (
            <h3 key={key}>
              {emo.emoji} -- {emo.description} --{emo.aliases}
              {/* {emo.aliases.map((alias) => (
              <div>{alias}</div>
            ))} */}
            </h3>
          );
        })}
      ;
    </div>
  );
};

export default Emoji;
