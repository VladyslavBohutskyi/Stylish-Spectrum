if (!customElements.get('cart-main')) {
  customElements.define('cart-main', class CartMain extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      PubSub.subscribe('cart-updated', () => this.updateCart())
      this.initCart()
    }

    initCart() {
      this.querySelectorAll('.change_qty').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          this.changeCount(btn.dataset.variant_id, btn.dataset.quantity)
        })
      })

    }

    updateCart(){
      fetch(window.theme.shopUrl + `?section_id=${this.dataset.section_id}`)
      .then((res) => res.text())
      .then((data) => {
        const html = new DOMParser().parseFromString(data, 'text/html');
        this.querySelector('.cart__container').innerHTML = html.querySelector('.cart__container').innerHTML
        this.initCart()
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
          // document.querySelector('.header_cart_count').innerHTML = data.item_count
          // this.updateCart()

          PubSub.publish('cart-updated')
        })

    }



  })
}