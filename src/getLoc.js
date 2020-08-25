const getLoc = (results) => {
  if (results.length === 0) {
    return null;
  }
  return results[0].geometry.location;
};

export default getLoc;

// user.loc = getLoc(response.data.results);
