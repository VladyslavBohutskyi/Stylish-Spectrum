if (!customElements.get('search-main')) {
  customElements.define('search-main', class SearchMain extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      console.log(this);
    }

  })
}