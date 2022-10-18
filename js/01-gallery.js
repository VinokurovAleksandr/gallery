import { galleryItems } from './gallery-items.js';

console.log(createCardsImgGallery(galleryItems));

const galleryEl = document.querySelector('.gallery');
const cardGallery = createCardsImgGallery(galleryItems);

function createCardsImgGallery(galleryItems) {
    return galleryItems.map(({preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
    </div>
    `
    })
        .join('');
};

galleryEl.insertAdjacentHTML('beforeend', cardGallery);

/**
 * Реализация делегирования на div.gallery и получение url большого изображения.
 */
galleryEl.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return
    }

    const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}">
    `);
    instance.show(onEscKeyDown)


    function onEscKeyDown() {
    const ESC_KEY_CODE = 'Escape';
        galleryEl.addEventListener('keydown', (evt) =>{
            if (evt.code === ESC_KEY_CODE) {
        instance.close()
        }
        } )   
};
});
