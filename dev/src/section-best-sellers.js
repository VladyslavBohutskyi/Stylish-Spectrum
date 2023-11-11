if (!customElements.get('best-sellers')) {
  customElements.define('best-sellers', class BestSellers extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.querySelector('.best-sellers__btn').addEventListener('click', () => this.loadMore())
    }

    loadMore(){
      fetch(window.theme.shopUrl + `/collections/best-sellers?page=1`)
        .then((res) => res.text())
        .then((data) => {
          const html = new DOMParser().parseFromString(data, "text/html");
          html.querySelectorAll('.main-collection__product').forEach(e => e.classList.value = 'best-sellers__product')
          this.querySelector('.best-sellers__products').innerHTML = html.querySelector('.main-collection__products').innerHTML 
          console.log(html)
        })
    }
  })
}