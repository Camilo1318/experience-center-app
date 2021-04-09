
export const getLenteByType = (lentes, type) => {

    const validType = ['Monofocales', 'Bifocales', 'Ocupacionales', 'Progresivos', 'all']

    if (!validType.includes(type)) {
        throw new Error(`Type "${type}" no hace parte de los tipos`)
    }

    if (type === 'all') {
        return lentes;
    } else {
        return lentes.filter(lente => lente.lenteType === type);
    }

}
