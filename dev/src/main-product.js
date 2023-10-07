if (!customElements.get('main-product')) {
  
  customElements.define('main-product', class MProduct extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {

    }

  }
 )
}
