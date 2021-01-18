export default (results, price: string) => {
  return results.filter((result) => {
    return result.price === price;
  });
};
