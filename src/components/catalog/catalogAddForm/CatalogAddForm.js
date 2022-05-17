import React, { useState } from "react";
import { addProduct } from "../../../utils/firebase";
import "./CatalogAddForm.css";

const initialState = {
  brand: "",
  model: "",
  price: "",
  images: [],
  description: "",
};

const CatalogAddForm = () => {
  const [formState, setFormState] = useState(initialState);
  //const [formImagesState, setFormImagesState] = useState([])
  const [imagesInputNumber, setImagesInputNumber] = useState([0]);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    addProduct(formState);
    setFormState({ ...initialState });
  };

  const onHandleChange = (e) => {
    const { value, name } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    console.log(formState);
  };

  const onHandleChangeImage = (e) => {
    const { value, id } = e.target;
    setFormState((prev) => {
      const newImages = [...prev.images];
      newImages[id] = value;
      return { ...prev, images: newImages };
    });
  };

  console.log(formState);
  console.log(imagesInputNumber); 

  const addImageInput = () => {
    setImagesInputNumber((prev) => [...prev, prev.length]);
  };

  const deleteImageInput = () => {
    if (imagesInputNumber.length > 1) {
      setImagesInputNumber((prev) => [...prev.slice(0, -1)]);
    }
    console.log(imagesInputNumber);
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label for="brand">Brand:</label>
      <input
        onChange={onHandleChange}
        value={formState.brand}
        name="brand"
        type="text"
        required
      />

      <label for="model">Model:</label>
      <input
        onChange={onHandleChange}
        value={formState.model}
        name="model"
        type="text"
        required
      />

      <label for="price">Price:</label>
      <input
        onChange={onHandleChange}
        value={formState.price}
        name="price"
        type="text"
        required
      />

      {imagesInputNumber.map((number) => (
        <>
          <label for="images">Images:</label>
          <input
            id={number}
            onChange={onHandleChangeImage}
            value={formState.images[number]}
            name="images"
            type="text"
            required
          />
        </>
      ))}

      <button onClick={addImageInput} type="button">
        Добавить еще одно изображение
      </button>
      <button onClick={deleteImageInput} type="button">
        Удалить поле ввода для изображения
      </button>

      <label for="description">Описание товара </label>
      <textarea
        onChange={onHandleChange}
        placeholder="Введите описание товара"
        name="description"
        value={formState.description}
        required
      ></textarea>

      <button type="submit">Add a new product</button>
    </form>
  );
};

export default CatalogAddForm;
