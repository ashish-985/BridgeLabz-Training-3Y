const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

const originalTotal = cart.reduce((total, product) => total + product.price, 0);
let discountedTotal = 0;

const discountedCart = cart.map((product) => {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    const discountAmount = product.price * discountRate;
    const finalPrice = product.price - discountAmount;
    discountedTotal += finalPrice;

    return {
        Item: product.item,
        Category: product.category,
        "Original Price (₹)": product.price,
        "Discount (%)": discountRate * 100,
        "Final Price (₹)": Number(finalPrice.toFixed(2))
    };
});

const extraDiscountRate = originalTotal > 50000 ? 0.05 : 0;
const extraDiscountAmount = discountedTotal * extraDiscountRate;
const finalTotal = discountedTotal - extraDiscountAmount;

console.table(discountedCart);
console.log(`Original cart value: ₹${originalTotal.toFixed(2)}`);
console.log(`Subtotal after item discounts: ₹${discountedTotal.toFixed(2)}`);
console.log(`Extra cart discount: ${extraDiscountRate * 100}% (₹${extraDiscountAmount.toFixed(2)})`);
console.log(`Final cart total: ₹${finalTotal.toFixed(2)}`);
