if (!customElements.get('s-header')) {

  customElements.define('s-header', class SHeader extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.mobMenu()
      this.stickyHeader()
      this.megaMenu()
    }

    mobMenu() {

    }
    stickyHeader() {

    }

    megaMenu() {
      const megaM = Array.from(this.querySelectorAll('.s-mega-menu'))
      this.querySelectorAll('.s-header__menu_item').forEach((menuItem) => {
        menuItem.addEventListener('mouseover', (e) => {
          megaM.map((megaItem) => {
            e.target.innerHTML == megaItem.getAttribute('data-parent-menu') ? megaItem.classList.add('active') : false
          })
        })
      })
      console.log()
    }
   }
  )
}