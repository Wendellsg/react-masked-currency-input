export function currencyFormater(value:number){
    const currencyFormated = new Intl.NumberFormat('pt-br', { style: 'currency', currency: "BRL" }).format(value)
    return currencyFormated
}




