// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
console.log(SimpleLightbox);
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const listItem = document.querySelector('.gallery');
listItem.addEventListener('click', onClick);

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

function onClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }

    let gallery = new SimpleLightbox('.gallery a');
    gallery.on('show.simplelightbox', function () {
    })
};

