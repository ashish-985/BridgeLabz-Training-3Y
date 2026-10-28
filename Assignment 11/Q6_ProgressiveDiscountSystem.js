const purchaseTotal = 6500;
let discountPercentage;

if (purchaseTotal >= 10000) {
    discountPercentage = 25;
} else if (purchaseTotal >= 5000) {
    discountPercentage = 15;
} else if (purchaseTotal >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

const discountAmount = Math.round(purchaseTotal * discountPercentage / 100);
const finalPrice = Math.round(purchaseTotal - discountAmount);

console.log(`Original total: ₹${Math.round(purchaseTotal)}`);
console.log(`Discount percentage: ${discountPercentage}%`);
console.log(`Discount amount: ₹${discountAmount}`);
console.log(`Final price after discount: ₹${finalPrice}`);
