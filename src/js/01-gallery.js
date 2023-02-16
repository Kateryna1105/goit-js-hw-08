// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
console.log(SimpleLightbox);
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const listItem = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => 
        `<div class="gallery__item">
       <a class="gallery__link" 
       href="${original}">
            <img class="gallery__image" 
              src='${ preview }' 
              data-source='${ original }' 
              alt='${description}'
             />
        </a>
    </div>`).join("")

listItem.insertAdjacentHTML('beforeend', markup);

  const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  }); 
