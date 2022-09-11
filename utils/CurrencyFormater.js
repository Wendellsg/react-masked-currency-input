export function currencyFormater(value){
    const currencyFormated = new Intl.NumberFormat('pt-br', { style: 'currency', currency: "BRL" }).format(value)
    return currencyFormated
}




