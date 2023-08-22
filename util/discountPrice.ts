export default function discountPrice(regularPrice: number, tag: number) {
  const offerAmount = (regularPrice * tag) / 100;
  const finalAmount = Math.ceil(regularPrice - offerAmount);
  return finalAmount;
}
