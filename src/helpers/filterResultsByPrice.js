export default (results, price) => {
  return results.filter((result) => {
    return result.price === price;
  });
};
