let PHPeso = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "PHP",
  minimumFractionDigits: 0,
});

export const usePhpPeso = (number: number) => {
  return PHPeso.format(number);
};
