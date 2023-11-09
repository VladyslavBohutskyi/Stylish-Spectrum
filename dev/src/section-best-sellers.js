if (!customElements.get('best-sellers')) {
  customElements.define('best-sellers', class BestSellers extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      console.log('best-sellers');
    }

  })
}