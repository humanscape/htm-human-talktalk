import importAll from 'utils/importAll';

export const getInitialMembersState = () => {
  const members = importAll(require.context('./img/members', false, /\.(png|jpe?g|svg)$/));

  return members.map(image => {
    const name = image.slice(14).split('.')[0];
    return { name, image, absent: false };
  });
};

export const emojiArray = [
  {
    name: "Joy",
    emoji: "joyy",
  }
];

const members = getInitialMembersState();

export default members;
