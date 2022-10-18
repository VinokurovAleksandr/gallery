import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');
const cardGallery = createCardsImgGallery(galleryItems);

function createCardsImgGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
       <a class="gallery__item" href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
        </a>
        `
    })
        .join('');
}

galleryBox.insertAdjacentHTML('beforeend', cardGallery);

new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt'
});