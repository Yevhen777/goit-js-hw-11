import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

async function uploadPhoto(inputValue, pageData, perPage) {
  try {
    const getData =
      await axios.get(`https://pixabay.com/api/?key=27697156-dc70d52aa76d1b34fad0e72d3&q=${inputValue}
          &image_type=photo&orientation=horizontal&safesearch=true&page=${pageData}&per_page=${perPage}`);

    if (getData.data.hits.length === 0) {
      throw getData.status;
    }

    const arrayFromData = getData.data;

    return arrayFromData;
  } catch (error) {
    Notify.failure('Sorry, there are no images matching your search query. Please try again.');
  }
}

export { uploadPhoto };
