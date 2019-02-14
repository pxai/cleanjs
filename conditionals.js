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

const negativeConditionalsBad = () => {
    function isNotAdult (age) {
      return age < 18;
    }

    if (!isNotAdult(32)) {
        // ...
    }
}

const negativeConditionals = () => {
    function isAdult (age) {
      return age >= 18;
    }

    if (isAdult(32)) {
        // ...
    }
}
