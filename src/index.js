import './css/styles.css';
import './css/common.css';
import { GalleryAPI } from './fetchGallery';
import { LoadMoreBtn } from './loadMoreBtn';
import { Notify } from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';



const API_KEY = '32190498-c060c2ff03edf94bf531f7f07';

const refs = {
    searchForm: document.querySelector('#search-form'),
    imageContainer: document.querySelector('.gallery'),
    searchBtn: document.querySelector('.search-button'),
}


refs.searchForm.addEventListener('submit', onFormSubmit);
const galleryAPI = new GalleryAPI();
const loadMoreBtn = new LoadMoreBtn('load-more', onLoadMoreBtn);
const simplelightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

async function onFormSubmit(evt) {
    evt.preventDefault();
    refs.imageContainer.innerHTML = '';
    galleryAPI.query = evt.currentTarget.elements.searchQuery.value.trim();
    if (galleryAPI.query === '') {
        Notify.warning('Enter something');
        return;
    }

      
    galleryAPI.resetPage();
   

    try {
        const { hits, totalHits } = await galleryAPI.axiosAPI();
        if(totalHits === 0) {
          Notify.warning("Sorry, there are no images matching your search query. Please try again.")
          refs.imageContainer.innerHTML = ''; 
         loadMoreBtn.hide();
        return;
        };
        Notify.success(`Hooray! We found ${totalHits} images.`);
        onMarkupPhotos(hits);
        simplelightbox.refresh();
        loadMoreBtn.show();
    } catch (error) {
      Notify.failure('Error');
    }
   
}

function onMarkupPhotos(hits) {
  const markupPhotos = hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return ` 
        <div class="photo-card">
        <a href="${largeImageURL}" class="gallery-link">
                <img src="${webformatURL}" alt="${tags}" loading="lazy" />
                </a>
              <div class="info">
                <p class="info-item">
                  <b>Likes: </b>${likes}
                </p>
                <p class="info-item">
                  <b>Views: </b>${views}
                </p>
                <p class="info-item">
                  <b>Comments: </b>${comments}
                </p>
                <p class="info-item">
                  <b>Downloads: </b>${downloads}
                </p>
              </div>
      </div>
      `;
      }
    )
    .join('');

    refs.imageContainer.insertAdjacentHTML('beforeend', markupPhotos);
}


async function onLoadMoreBtn() {
    loadMoreBtn.loading();
    try {
        const { hits, totalHits } = await galleryAPI.axiosAPI(); 
        onMarkupPhotos(hits);

        loadMoreBtn.endLoading();
        if(hits.length < 40){
          loadMoreBtn.hide();
          simplelightbox.refresh();
          Notify.warning("We're sorry, but you've reached the end of search results.");
          return;
        }
    } catch (error) {
       Notify.failure('Error'); 
    }
}




