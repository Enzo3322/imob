export function formatCurrencyBRL(number: number): string {
  try {
    // Format the number as Brazilian currency
    const formattedValue: string = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(number);

    return formattedValue;
  } catch (error) {
    return "Error: The provided value is not a valid number.";
  }
}
