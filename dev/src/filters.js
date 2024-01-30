if (!customElements.get('main-filters')) {
    customElements.define('main-filters', class MFilters extends HTMLElement {
      constructor() {
        super();
      }
      
      searchParams = new URLSearchParams(window.location.search)
      connectedCallback() {
        this.addListeners()
        this.addClassToColorFilter()
      }

      addClassToColorFilter() {
        const filtersArray = Array.from(this.querySelectorAll('.main-filters__filters__item__list'))
        filtersArray.forEach((e) => {
          e.parentElement.outerText == 'Color' ? e.classList.add('main-filters__filters__item__list__color') : false
        })
      }
  
      addListeners(){
        this.querySelector('#sort-by').addEventListener('change', ()=> this.sortBy())
        this.querySelectorAll('.main-filters__filters__item').forEach(el => el.addEventListener('click', ()=> this.openFilter(el)))
        document.addEventListener('click', (e)=> {
          if(!e.target.closest('.main-filters__filters__item') && !e.target.closest('.main-filters__filters__item__dropdown')){
            this.querySelectorAll('.main-filters__filters__item').forEach(el => el.classList.remove('active'))
          }
        })
        this.querySelectorAll('.main-filters__filters__item__list__add_filter').forEach(el => el.addEventListener('click', (e)=> this.updatePage(el, e)))
      }
  
      sortBy(){
        this.searchParams.set('sort_by', this.querySelector('#sort-by').value)
        window.location.search = this.searchParams.toString()
      }
  
      openFilter(el){
        this.querySelectorAll('.main-filters__filters__item').forEach(el => el.classList.remove('active'))
        el.classList.add('active')
      }
      updatePage(el,e){
        e.preventDefault()
        const filterValue = el.dataset.filterValue
        fetch(window.theme.shopUrl + filterValue)
          .then((res) => res.text())
          .then((data) => {
            history.replaceState(null, null, window.theme.shopUrl + filterValue)
            this.searchParams = new URLSearchParams(window.location.search)
            const html = new DOMParser().parseFromString(data, "text/html");
            document.querySelector('.main-collection__products').innerHTML = html.querySelector('.main-collection__products').innerHTML
            this.querySelectorAll('.main-filters__filters__item__list').forEach((el, index) => {
              el.innerHTML = html.querySelectorAll('.main-filters__filters__item__list')[index].innerHTML
            })
            this.querySelector('.main-filters__checked').innerHTML = html.querySelector('.main-filters__checked').innerHTML
            this.addListeners()
          })
      }
  
    })
  }