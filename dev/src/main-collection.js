if (!customElements.get('main-collection')) {
  customElements.define('main-collection', class MainCollection extends HTMLElement {
    constructor() {
      super();
    }
    
    searchParams = new URLSearchParams(window.location.search)
    
    connectedCallback() {
      this.querySelector('#sort-by').addEventListener('change', () => this.sortBy())
    }
    sortBy(){ 
      this.searchParams.set('sort_by', this.querySelector('#sort-by').value)
      window.location.search = this.searchParams.toString()
    }
  })
}