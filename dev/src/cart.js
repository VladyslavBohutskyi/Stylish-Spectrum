if (!customElements.get('cart-main')) {
  customElements.define('cart-main', class CartMain extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.initCart()
    }

    initCart() {

    }
  })
}