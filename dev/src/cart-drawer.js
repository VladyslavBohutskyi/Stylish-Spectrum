if (!customElements.get('cart-drawer')) {
  customElements.define('cart-drawer', class CartDrawer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      PubSub.subscribe('cart-updated', this.updateCart.bind(this))
      PubSub.subscribe('cart-updated', this.openCart.bind(this))
      PubSub.subscribe('cart-updated', this.updateHeaderCount.bind(this))
      this.initCart()
    }

    openCart(){
      this.classList.add('active')
    }
    closeCart(){
      this.classList.remove('active')
    }

    initCart() {
      this.querySelectorAll('.change_qty').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          this.changeCount(btn.dataset.variant_id, btn.dataset.quantity)
        })
      })
      this.querySelector('.cart-drawer__close').addEventListener('click', this.closeCart.bind(this))
    }


    updateCart() {
      fetch(window.theme.shopUrl + `?section_id=${this.dataset.section_id}`)
        .then((res) => res.text())
        .then((data) => {
          const html = new DOMParser().parseFromString(data, "text/html");
          this.querySelector('.cart__container').innerHTML = html.querySelector('.cart__container').innerHTML
          this.initCart()
        })
    }

    updateHeaderCount(){
      console.log('test');
      console.log(this.querySelector('.cart__subtotal').dataset.item_count)
      document.querySelector('.header_cart_count').innerHTML = this.querySelector('.cart__subtotal').dataset.item_count
    }

    changeCount(id, quantity){
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
          if(!response.ok){
            throw new Error('Network response was not ok');
          } else {
            return response.json()
          }
        })
        .then((data) => {
          this.updateCart()
        })

    }

  })
}