if (!customElements.get('product-card')) {
  customElements.define('product-card', class ProductCard extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {

    }

    addToCart() {
      const form = this.querySelector('.shopify-product-form')
      const formUrl = window.theme.shopUrl + window.theme.routes.cart_add_url
      const formBody = {
        method: 'POST',
        body: new FormData(form)
      }

      fetch(formUrl, formBody).then((response) => {
        if (response.ok) {
          PubSub.publish(PubSub.EVENTS.cartUpdated)
          PubSub.publish(PubSub.EVENTS.openCartDrawer)
        }
      })
    }

  }
  )
}