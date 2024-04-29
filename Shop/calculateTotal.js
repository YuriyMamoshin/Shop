export default function calculateTotal() {
    const isCartNotEmpty = JSON.parse(localStorage.getItem("shop"));
    if (isCartNotEmpty) {
      const cartDataArray = Object.values(
        JSON.parse(localStorage.getItem("shop"))
      );
      const totalAmount = cartDataArray.reduce(
        (prevValue, item) => prevValue + item.price * item.quantity,
        0
      );
      return totalAmount.toFixed(2);
    } else {
      return 0;
    }
  }