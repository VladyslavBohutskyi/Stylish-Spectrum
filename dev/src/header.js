const pubsub = require("./scripts/pubsub");

if (!customElements.get('s-header')) {

  customElements.define('s-header', class SHeader extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.megaMenus = Array.from(this.querySelectorAll('.s-mega-menu'))
      this.menuItems = this.querySelectorAll('.s-header__menu_item')
      this.querySelector('.s-header__account_cart').addEventListener('click', this.opeenCartDrawer)
      PubSub.subscribe('cart-updated', this.updateCount.bind(this))
      this.menuItems.forEach((menuItem) => {
        this.addClassParentMenu(menuItem)
        this.openMegaMenuMobile(menuItem)
        this.openMegaMenuDesktop(menuItem)
        this.closeMegaMenuDesktop(menuItem)
      })
      this.toggleMenuMobile()
      this.closeMegaMenuMobile()
      if(this.querySelector('.s-header__open-search')){
        this.querySelector('.s-header__open-search').addEventListener('click', () => this.openSearch())
      }
    }

    opeenCartDrawer(){
      PubSub.publish('open-drawer')
    }

    openSearch(){
      PubSub.publish('open-search')
    }

    updateCount(){
      fetch(window.theme.shopUrl + '/cart.js')
        .then((res) => res.json())
        .then((data) => {
          this.querySelector('.header_cart_count').innerHTML = data.item_count
        })
    }

    addClassParentMenu(menuItem) {
      this.megaMenus.map((megaMenuItem) => {
        menuItem.getElementsByTagName('a')[0].innerHTML == megaMenuItem.getAttribute('data-parent-menu')
          ? menuItem.classList.add('s-header__menu_item--parent')
          : false
      })
    }

    openMegaMenuDesktop(menuItem) {
      menuItem.addEventListener('mouseover', (e) => {
        this.megaMenus.map((megaMenuItem) => {
          e.target.innerHTML == megaMenuItem.getAttribute('data-parent-menu')
            ? megaMenuItem.classList.add('active')
            : false
        })
      })
    }

    closeMegaMenuDesktop(menuItem) {
      menuItem.addEventListener('mouseout', (e) => {
        this.megaMenus.map((megaMenuItem) => {
          e.target.innerHTML == megaMenuItem.getAttribute('data-parent-menu')
            ? megaMenuItem.classList.remove('active')
            : false
        })
      })
    }

    toggleMenuMobile() {
      this.querySelector('.s-header__menu_btn').addEventListener(
        "click", () => (
          document.querySelector('.body_overlay').classList.toggle('active'),
          this.querySelector('.s-header').classList.toggle('s-header--menu-active'),
          document.querySelector('body').classList.toggle('hidden'),
          this.querySelector('.s-header__menu').classList.remove('hide'),
          this.megaMenus.map((e) => {
            e.classList.remove('active')
          })
        )
      )
    }

    openMegaMenuMobile(menuItem) {
      menuItem.querySelector('.s-header__menu_item_arrow').addEventListener('click', (e) => {
        this.megaMenus.map((megaMenuItem) => {
          if (e.target.getAttribute('data-menu-name') == megaMenuItem.getAttribute('data-parent-menu')) {
            megaMenuItem.classList.add('active')
            this.querySelector('.s-header__menu').classList.add('hide')
          }
        })
      })
    }

    closeMegaMenuMobile() {
      this.querySelectorAll('.s-mega-menu__close').forEach((closeMegaMenu) => {
        closeMegaMenu.addEventListener('click', (e) => {
          this.querySelector('.s-header__menu').classList.remove('hide')
          this.megaMenus.map((e) => {
            e.classList.remove('active')
          })
        }
        )
      })
    }

  }
  )
}
