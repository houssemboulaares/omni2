
"use client"
import React, { useState, ChangeEvent } from 'react';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';




function Cloudinary({ setImg }: any) {
  const cloudName = 'dcq9dwrsb';
  const presetName = 'l4ng65bl';

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', presetName);

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setImg(data.secure_url);
    } catch (error) {
      console.error('Error uploading image: ', error);
    }
  };

  return (
    <div className='cloudinary'>
      <label>
        <MdOutlineAddPhotoAlternate />
        <input type="file" onChange={handleUpload} />
      </label>
    </div>
  );
}

export default Cloudinary;
