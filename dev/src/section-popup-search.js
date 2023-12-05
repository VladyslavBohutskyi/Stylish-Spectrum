if (!customElements.get('popup-search')) {
  customElements.define('popup-search', class PopupSearch extends HTMLElement {
    constructor() {
      super();
    }

    searchInput = this.querySelector('.popup-search__input')

    connectedCallback() {
      PubSub.subscribe('open-search', this.openSearch.bind(this))
      this.querySelector('.icon-close').addEventListener('click', this.closeSearch.bind(this))
      this.searchInput.addEventListener('input', () => this.setValue(this.searchInput.value))
      this.querySelector('.popup-search__btn').addEventListener('click', () => this.search())
      window.addEventListener('keydown', this.searchEnter.bind(this))
    }


    searchEnter(e) {
      if (this.classList.contains('active') && e.keyCode === 13) {
        this.search();
      }
    }

    openSearch() {
      this.classList.add('active')
    }

    closeSearch() {
      this.classList.remove('active')
    }

    setValue(value) {
      this.querySelector('.form-hidden-input').value = value
    }

    search() {
      const form = this.querySelector('.popup-search__form-hidden')
      const formUrl = window.theme.shopUrl + window.theme.routes.search_page
      const formBody = {
        method: 'POST',
        body: new FormData(form)
      }
      fetch(formUrl, formBody)
        .then((res) => {
          if (res.ok) {
            return res.text()
          }
        })
        .then((data) => {
          const html = new DOMParser().parseFromString(data, "text/html");
          const searchResultContainer = this.querySelector('.popup-search__results')
          if (html.querySelector('.search-main__results_col') !== null) {
            searchResultContainer.innerHTML = html.querySelector('.search-main__results').innerHTML
          } else {
            searchResultContainer.innerHTML = 'No matches found'
          }        
        });
    }
  }
  )
}