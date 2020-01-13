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
    emoji: "slightly_smiling_face",
  },
  {
    name: "Oliver",
    emoji: "slightly_smiling_face",
  },
  {
    name: "Jason",
    emoji: "slightly_smiling_face",
  },
  {
    name: "Heize",
    emoji: "slightly_smiling_face",
  },
  {
    name: "Grace",
    emoji: "slightly_smiling_face",
  },
];

const members = getInitialMembersState();

export default members;
