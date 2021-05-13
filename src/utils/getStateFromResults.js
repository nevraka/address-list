const getStateFromResults = (results) => {
  for (let result of results) {
    for (let ac of result.address_components) {
      for (let type of ac.types) {
        if (type === 'administrative_area_level_1') {
          return ac.long_name;
        }
      }
    }
  }

  return 'NOT FOUND';
};

export default getStateFromResults;
