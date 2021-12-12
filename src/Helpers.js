

export default {
    FormatPrice: (value) => {
        return value.toLocaleString('pt-br', {minimumFractionDigits:2})
    }
}