export function ratingToArray(rating) {
  let ratingLn = Math.floor(rating);
  const tempArray = [];
  for (let i = 0; i < ratingLn; i++) {
    tempArray.push(i);
  }
  return tempArray;
}

export function discountedPrice(discount, price) {
  let newPrice = price - price * (discount / 100);
  return Math.floor(newPrice);
}
