
export const dateFormat = (data) => {
    const parseDate = data
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return  parseDate.toLocaleDateString("ru-RU", options).split("г.")[0]
}
