
const gifts = ['book', 'game', 'socks'];
const wrapped = wrapping(gifts);
function wrapping(gifts) {
    if (gifts.length !== 0) {
      return gifts.map(gift => {
        let wrappingPaper = "*".repeat(gift.length + 2);
        gift = `${wrappingPaper}\n*${gift}*\n${wrappingPaper}`;
        console.log(gift);
        return gift;
      });
    }
    console.log(gifts);
    return gifts;
}