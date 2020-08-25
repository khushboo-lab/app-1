import React, { useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Pictures, Input, Icon, Img } from '../ImagesContainer/styled';
import axios from 'axios';

const Pic = () => {
  const [image, setImage] = useState({ src: '', alt: '' });

  const onSelectImg = (e) => {
    const img = e.target.files;
    if (img && img.length > 0) {
      saveImage(img[0])
    }
  };
  


  const saveImage = (image) => {
    const data = new FormData() 
    data.append('image', image, image.name)
    axios.post('https://clothify-api.vercel.app/image', data, {
      headers: {
        'accept': 'application/json',
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNDA1NjgzYTIzODI2MDhiMDA5MWI5YSIsImlhdCI6MTU5ODMwODk2NywiZXhwIjoxNjI5ODQ0OTY3fQ.HjU_-1Zu_9z60EcItokCcyjzi5YCXIDIZVK3-RRJFuQ'
      }
    })
      .then((response) => {

        setImage({ src: response.data.data.imagePath, alt: image.name })
      }).catch((error) => {
        //handle error
      });
  }

  return (
    <Pictures>
      { image.src ? <Img src={image.src} alt={image.alt} /> : null }
      <Icon icon={faPlus} />
      <Input onChange={onSelectImg} type="file" />
    </Pictures>

  );
};

export default Pic;
