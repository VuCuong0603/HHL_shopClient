type GalleryProductType = {
  images: any;
};

const Gallery = ({ images }: GalleryProductType) => {
  const featImage = images.image?.url;

  return (
    <section className="product-gallery">
      <div className="product-gallery__thumbs">
        <div key={images?.image?._id} className="product-gallery__thumb">
          <img src={images?.image?.url} alt="" />
        </div>
      </div>

      <div className="product-gallery__image">
        <img src={featImage} alt="" />
      </div>
    </section>
  );
};

export default Gallery;
