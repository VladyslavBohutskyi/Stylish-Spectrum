if (!customElements.get('best-sellers')) {
  customElements.define('best-sellers', class SBest extends HTMLElement {

      constructor() {
        super();
      }
       nameCollection = this.dataset.collection
       countProducts = this.dataset.count
       numberPage = 1
       countLoadMore = 1
       countCollectionProducts = null
       collectionProducts = []
      connectedCallback() {

        this.updateCollection()

        this.querySelector('.best-sellers__btn').addEventListener('click', ()=> this.loadMore())
      }

      updateCollection(){
        if(this.countCollectionProducts !== false){
        fetch(window.theme.shopUrl + `/collections/${this.nameCollection}?page=${this.numberPage}`)
          .then((res) => res.text())
          .then((data) => {
            const html = new DOMParser().parseFromString(data, "text/html");
            html.querySelectorAll('.main-collection__product').forEach(el => el.classList.value = 'best-sellers__product' )
            const products = Array.from(html.querySelectorAll('.best-sellers__product'))
            this.countCollectionProducts = this.countCollectionProducts ?? products.length

            if(this.countCollectionProducts > products.length)this.countCollectionProducts = false

            this.collectionProducts = [...this.collectionProducts, ...products]
            this.numberPage++

            if((this.collectionProducts.length < ((this.countProducts * this.countLoadMore) + (+this.countProducts)))){
              this.updateCollection()
            }
            this.querySelector('.best-sellers__btn').disabled = false;

          })
        }
      }

      loadMore(){
        console.log(this.collectionProducts.length);
        console.log(this.countLoadMore);
        console.log(this.countProducts);
        if(this.collectionProducts.length > (this.countLoadMore * this.countProducts)){
          const newProducts = document.createElement('div')
          this.collectionProducts.forEach((product, index) => {
            if(index >= this.countProducts * this.countLoadMore && index < (this.countProducts * this.countLoadMore) + (+this.countProducts)){
              newProducts.appendChild(product);
            }
          })


          if(newProducts.childElementCount < this.countProducts){
            for (let i = this.countProducts; i > newProducts.childElementCount; i--){
              newProducts.insertBefore(this.collectionProducts[this.collectionProducts.length-i], newProducts.firstChild);
            }
            this.querySelector('.best-sellers__btn').disabled = true;
          }

          this.querySelector('.best-sellers__products').innerHTML = newProducts.innerHTML
          this.countLoadMore++

          if( this.countLoadMore * this.countProducts > this.collectionProducts.length - this.countProducts ){
            this.querySelector('.best-sellers__btn').disabled = true;
            this.updateCollection()
          }
        }
      }
    }
  )
}