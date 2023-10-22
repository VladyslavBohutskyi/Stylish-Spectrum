if (!customElements.get('cart-main')) {
  customElements.define('cart-main', class CartMain extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.initCart()
    }

    initCart() {

      this.querySelectorAll('.change_qty').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          this.changeCount(e.target.dataset.variant_id, e.target.dataset.quantity)
        })
      })

    }

    changeCount(id, quantity) {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'id': id,
          'quantity': quantity
        })
      }

      fetch(window.theme.shopUrl + '/cart/change.js', requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          } else {
            return response.json()
          }

        })
        .then((data) => {
          console.log(data)
        })

    }



  })
}