export const formatPrice = (price) => {
  const reversedPrice = String(price).split("").reverse();
  const formattedParts = [];
  for (let i = 0; i < reversedPrice.length; i += 3) {
    // Slice a group of 3 characters (or less for the last group)
    const part = reversedPrice.slice(i, i + 3);
    // Join the characters back into a string and push it to the array
    formattedParts.push(part.reverse().join(""));
  }
  // Reverse the formatted parts array back to the correct order
  const formattedNumber = formattedParts.reverse().join(",");

  return formattedNumber;
};
