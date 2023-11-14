if (!customElements.get('best-sellers')) {
  customElements.define('best-sellers', class BestSellers extends HTMLElement {
    constructor() {
      super();
    }
    nameCollection = this.dataset.collection
    numberPage = 1
    countLoadMore = 1
    countProducts = this.dataset.count
    collectionProducts = []
    countCollectionProducts = null


    connectedCallback() {
      this.querySelector('.best-sellers__btn').addEventListener('click', () => this.loadMore())
      this.updateCollection()
    }

    updateCollection() {
      if (this.countCollectionProducts != false) {
        fetch(window.theme.shopUrl + `/collections/${this.nameCollection}?page=${this.numberPage}`)
          .then((res) => res.text())
          .then((data) => {
            const html = new DOMParser().parseFromString(data, "text/html");
            html.querySelectorAll('.main-collection__product').forEach(el => el.classList.value = 'best-sellers__product')

            const products = Array.from(html.querySelectorAll('.best-sellers__product'))

            this.countCollectionProducts = this.countCollectionProducts ?? products.length

            if (this.countCollectionProducts > products.length) {this.countCollectionProducts = false}

            this.collectionProducts = [...this.collectionProducts, ...products]
            this.numberPage++

            if (this.collectionProducts.length < (this.countProducts * this.countLoadMore + (+this.countProducts))) {
              this.updateCollection()
            }
          })
      }
    }

    loadMore() {
      this.collectionProducts.forEach((prod, index) => {
        console.log(prod);
        console.log(index);
        if(index > this.countProducts * this.countLoadMore && index < (this.countProducts * this.countLoadMore + (+this.countProducts))){
          this.querySelector('.best-sellers__products').appendChild(prod)
        }
      })

      
    }
  })
}