if (!customElements.get('main-product')) {
  
  customElements.define('main-product', class MProduct extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      // this.variantsScript = JSON.parse(this.querySelector('[type="product_variant"]').textContent) 
      this.variants = JSON.parse(this.getAttribute('data-variants'))
      this.options = this.querySelectorAll('.variants-option')
      this.options.forEach((option) => (
        option.addEventListener('change', (e) =>  this.variantOnClick())
      ))
    }



    variantOnClick(){

      let tempVariant = ''
      this.options.forEach( (variant) => {
        tempVariant += `${variant.querySelector('input:checked').value} / `
      })
      tempVariant = tempVariant.slice(0, -3)
      let currentVariantId = ''
      this.variants.map((variant) => {
        if(variant.title == tempVariant){
          (currentVariantId = variant.id, 
          history.replaceState(null, null, window.location.pathname + `?variant=${variant.id}`))
          this.querySelector('.featured-image').setAttribute('src', variant.featured_image.src)
          let currency = this.querySelector('.main-product__content_price').innerHTML[0]
          this.querySelector('.main-product__content_price').innerHTML = `${currency+(variant.price/100).toFixed(2)}` 
          variant.available 
          ? this.querySelector('.main-product__content_available').innerHTML = ''
          : this.querySelector('.main-product__content_available').innerHTML = 'Sold Out'
          
        } 
      })
      this.querySelector('#variant-select').value = currentVariantId
    }
  }
 )
}
