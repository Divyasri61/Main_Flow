import React, { useState } from 'react';
import Image from './Image';
import Modal from './Modal';
import './ImageGallery.css';

const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3kgS5uC-0XHaYqqZV7UJb2qyytMyleo4Sg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNuoNaUJSNS2NvHFAKV-th13KTBFEoUZshA&s',
    'https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg',  
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzzqIm6-db43QdiBLoypstdFsCVqZDiLtqNQ&s',
    'https://www.europarl.europa.eu/resources/library/images/20230607PHT95601/20230607PHT95601_original.jpg',
    'https://okcredit-blog-images-prod.storage.googleapis.com/2021/03/Software-Development-Business1--1-.jpg',
    'https://miro.medium.com/v2/resize:fit:794/0*PVdHybB6Vvj3jleY.jpg',
    'https://www.devprojournal.com/wp-content/uploads/2020/02/software-testing-696x392.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiW8uNhqfG1rHsyWaqX1pjmoCEZgPI3sj1NA&s',
    'https://assets.aboutamazon.com/dims4/default/9bced4d/2147483647/strip/true/crop/7968x4482+0+0/resize/1320x743!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F4b%2F40%2Fa3a71ae9440aa62b90fda4d50f7d%2Fwbd00468-1.jpg',
    'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201707/google-campus-main-pic_559_070617104054.jpg',
    'https://media.istockphoto.com/id/529179163/photo/tibet-mount-kailash-north-face.jpg?s=612x612&w=0&k=20&c=ZcDVSIEPZk3q3wIZCWw4lUGwreED1lS1kjWSDTeMqVg=',
    'https://i.ytimg.com/vi/es4x5R-rV9s/maxresdefault.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarqNVgqJkqOvF5fSf0Rc7jlW1B6Vr9DY3Ug&s',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Colv%C3%A1_beach.jpg/640px-Colv%C3%A1_beach.jpg',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/ad/eb/cb/this-image-is-valley.jpg?w=1200&h=1200&s=1',
];

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-gallery-container">
      <div className="image-gallery">
        {images.map((image, index) => (
          <Image key={index} src={image} openModal={openModal} />
        ))}
      </div>
      {selectedImage && <Modal src={selectedImage} closeModal={closeModal} />}
    </div>
  );
}

export default ImageGallery;