// utils/formatPrice.js
export const formatPrice = (price) => {
    return `৳${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  };
  