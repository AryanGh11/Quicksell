export default function discountPrice(regularPrice: number, offer: number) {
  const offerAmount = (regularPrice * offer) / 100;
  const finalAmount = Math.ceil(regularPrice - offerAmount);
  return finalAmount;
}
