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
        variant.title == tempVariant 
        ? currentVariantId = variant.id
        : false
      })
      this.querySelector('#variant-select').value = currentVariantId
    }
  }
 )
}
