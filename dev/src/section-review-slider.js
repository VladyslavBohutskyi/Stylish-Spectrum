if (!customElements.get('s-review-slider')) {

  customElements.define('s-review-slider', class SReviewSlider extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.initSlider()
      this.getAttribute('data-slider_apply') == 'true'
        ? this.querySelectorAll('.s-review-slider__review').forEach((e) => e.classList.add('full-height'))
        : false
    }

    initSlider() {
      this.speed = this.getAttribute('data-speed')
      this.apply = (this.getAttribute('data-slider_apply') == 'true' ? false : true)

      this.settings = {
        prevNextButtons: false,
        pageDots: false,
        cellAlign: 'left',
        contain: true,
        draggable: true,
        watchCSS: this.apply
      }

      this.speed == 'false' ? false : this.settings.autoPlay = +this.speed;

      this.slider = new Flickity(this.querySelector('.s-review-slider__slider'), this.settings)
    }
  })

}