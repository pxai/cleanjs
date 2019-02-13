const conditionalFlagsBad = () => {
    function total(subtotal, hasDiscount) {
      if (hasDiscount) {
        return subtotal + TAX - DISCOUNT;
      }

      return subtotal + TAX;
    }
}

const conditionalFlags = () => {
    function total(subtotal) {
        return subtotal + TAX;
    }

    function totalWithDiscount (subtotal) {
      return subtotal + TAX - DISCOUNT;
    }
}
