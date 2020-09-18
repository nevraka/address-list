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

const getStateFromResults2 = (results) => {
  for (let i = 0; i < results.length; i++) {
    for (let j = 0; j < results[i].address_components.length; j++) {
      for (let k = 0; k < results[i].address_components[j].types.length; k++) {
        if (
          results[i].address_components[j].types[k] ===
          'administrative_area_level_1'
        ) {
          return results[i].address_components[j].long_name;
        }
      }
    }
  }

  return 'NOT FOUND';
};
