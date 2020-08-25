const getAddresses = (text) => {
  return text.split('\n\n').map((block) => {
    const lines = block.split('\n');
    const postCodeCity = lines[lines.length - 1].split(' ');

    return {
      name: lines[0],
      address: lines.length === 3 ? lines[1] : `${lines[1]} ${lines[2]}`,
      city: postCodeCity[1],
      postalCode: postCodeCity[0],
      federalState: null,
    };
  });
};

export default getAddresses;
