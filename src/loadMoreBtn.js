export class LoadMoreBtn {
    constructor(className, onLoadMoreClick) {
      document.body.insertAdjacentHTML('beforeend', 
      `<button type="button" class="${className}">Load more</button>`);
      this.loadMoreBtnRef = document.querySelector(`.${className}`);
      this.loadMoreBtnRef.addEventListener('click', onLoadMoreClick);
      this.hide();
    } 
    hide() {
    this.loadMoreBtnRef.style.display = 'none';
  }
  show(){
      this.loadMoreBtnRef.style.display = 'block';
  }
  loading() {
      this.loadMoreBtnRef.textContent = 'Loading...';
  }
  endLoading() {
      this.loadMoreBtnRef.textContent = 'Load more';
  }
  }