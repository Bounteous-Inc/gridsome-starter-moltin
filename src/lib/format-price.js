const currency = new Intl.NumberFormat(
  'en-CA',
  {
    style: 'currency',
    currency: 'USD',
  },
);

export default function formatPrice(value) {
  return currency.format(value / 100);
}
