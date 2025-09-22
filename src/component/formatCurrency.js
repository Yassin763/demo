const currencyformater = new Intl.NumberFormat(undefined ,{
    currency:"USD",
    style:"currency",
});
const formatCurrency = (number) => {
    return currencyformater.format(number)
};
export default formatCurrency;