import importAll from 'utils/importAll';
import Member from 'types/Member';

export const getInitialMembersState: () => Member[] = () => {
  const images = importAll(require.context('./img/members', false, /\.(png|jpe?g|svg)$/));

  return images.map(image => {
    const name = image.slice(14).split('.')[0];
    return { name, image, absent: false };
  });
};

interface EmojiExceptions {
  name: string;
  emoji: string;
};

export const emojiArray: EmojiExceptions[] = [
  {
    name: "Joy",
    emoji: "joyy",
  },
  {
    name: "Victoria",
    emoji: "v",
  },
  {
    name: "Oliver",
    emoji: "o2",
  },
];

const members = getInitialMembersState();

export default members;
