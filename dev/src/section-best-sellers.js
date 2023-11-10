if (!customElements.get('best-sellers')) {
  customElements.define('best-sellers', class BestSellers extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.querySelector('.best-sellers__btn').addEventListener('click', () => this.loadMore())
    }

    loadMore(){
      console.log(this);
    }

  })
}