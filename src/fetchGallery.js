import axios from 'axios';

const API_KEY = '32190498-c060c2ff03edf94bf531f7f07';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export class GalleryAPI {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }


    async axiosAPI() {
    const options = new URLSearchParams({
        key: API_KEY,
        q: this.searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: this.page,
        per_page: 40, 
    });
    const { data } = await axios(`?${options}`);
    this.page += 1;
    return data;
}

resetPage() {
    this.page = 1;
}

get query() {
    return this.searchQuery;
}

set query(newQuery) {
    this.searchQuery = newQuery;
}
}