import React, { useState } from "react";
import styled from "styled-components";

const ImageUpload: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedImage(file);
  };

  const handleSendImage = () => {
    // Handle sending the image here
    if (selectedImage) {
      // Perform the necessary action with the selectedImage
      console.log("Image sent:", selectedImage);
    }
  };

  return (
    <MainWrap>
      <InputWrap>
        <InputLabel htmlFor="image-upload">Select an Image</InputLabel>
        <Input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleImageChange}
        />
      </InputWrap>
      {selectedImage && (
        <ImagePreview src={URL.createObjectURL(selectedImage)} alt="Preview" />
      )}
      <SendButton onClick={handleSendImage}>Send Image</SendButton>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  width: 400px;
  padding: 10px;
`;

const InputWrap = styled.div`
  margin-bottom: 10px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const ImagePreview = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const SendButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default ImageUpload;
