const defaultsBad = () => {
    function total (subtotal, tax) {
        let taxes = tax || 1;

        return subtotal * taxes;
    }
}

const defaults = () => {
    function total (subtotal, tax = 1) {
        return subtotal * tax;
    }
}
