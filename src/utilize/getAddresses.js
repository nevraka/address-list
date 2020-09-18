const getAddresses = (text) => {
  return text.split('\n\n').map((block) => {
    const lines = block.split('\n');
    const postCodeCity = lines[lines.length - 1].split(' ');
    const postCode = postCodeCity[0];
    const city = postCodeCity.slice(1).join(' ');

    return {
      name: lines[0],
      address: lines.length === 3 ? lines[1] : `${lines[1]} ${lines[2]}`,
      city: city,
      postalCode: postCode,
      federalState: null,
    };
  });
};

export default getAddresses;
