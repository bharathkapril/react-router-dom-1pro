import { emoji } from "../emojiDB";

console.log(emoji.map((emo) => emo.emoji));

const Emoji = () => {
  return (
    <div>
      <h1>Emoji</h1>
      {emoji.map((emo) => {
        return (
          <h3>
            {emo.emoji} -- {emo.description}
          </h3>
        );
      })}
      ;
    </div>
  );
};

export default Emoji;
