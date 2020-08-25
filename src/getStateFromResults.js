const getStateFromResults = (results) => {
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

export default getStateFromResults;
