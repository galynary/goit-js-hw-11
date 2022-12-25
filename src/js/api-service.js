
import axios from 'axios';

export default async function axiosGet(value, page, perpage) {

	const PIXA__KEY = '31129543-53dedf11cf0639b43ae86da60';
	
	return await axios.get(`https://pixabay.com/api/?key=${PIXA__KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perpage}&page=${page}`)
		.then(response => {
			return response.data; // доступ масиву обьектов
		});


}


