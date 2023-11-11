if (!customElements.get('main-collection')) {
  customElements.define('main-collection', class MainCollection extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {

    }

  })
}