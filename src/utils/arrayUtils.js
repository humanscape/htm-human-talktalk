export const shuffle = (array) => {
  let currentIndex = array.length;
  let temp = -1;
  let randomIndex = -1;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
};

export const groupize = (array, size, style) => {
  if (array.length < size) {
    throw new Error('Cannot set team size more than array size.');
  }
  
  const newArray = [];
  
  let teamCount = -1;
  if (style === 'floor') {
    teamCount = Math.floor(array.length / size);
  }
  if (style === 'ceil') {
    teamCount = Math.ceil(array.length / size);
  }
  if (style === 'round') {
    teamCount = Math.round(array.length / size);
  }

  if (teamCount === -1) {
    throw new Error('Unhandled groupize style.');
  }

  for (let i = 0; i < teamCount; i++) {
    newArray.push([]);
  }

  let currentIndex = 0;

  array.forEach(element => {
    newArray[currentIndex].push(element);
    if (currentIndex === teamCount - 1) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
  });

  return newArray;
};
