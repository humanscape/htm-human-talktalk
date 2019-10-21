import importAll from 'utils/importAll';

const resolveMembers = () => {
  const members = importAll(require.context('./img/members', false, /\.(png|jpe?g|svg)$/));

  return members.map(image => {
    const name = image.slice(14).split('.')[0];
    return { name, image };
  });
};

const members = resolveMembers();

export default members;
