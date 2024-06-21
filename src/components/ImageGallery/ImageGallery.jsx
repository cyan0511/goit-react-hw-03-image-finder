import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const  ImageGallery = ({ images }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
        />
      ))}
    </ul>
  );
};

export  default ImageGallery;