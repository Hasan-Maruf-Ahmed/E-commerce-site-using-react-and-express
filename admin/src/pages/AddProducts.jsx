import { useRef, useState } from "react";
import { Form } from "react-router-dom";
import axios from "../axios";
import { toast } from 'react-toastify'

import upload_area from "../assets/upload_area.svg";

export const AddProducts = () => {
  const formRef = useRef(null);

  const [image, setImage] = useState(null);
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const submission = {
      name: formData.get("name"),
      price: formData.get("price"),
      category: formData.get("category"),
    };

    let imageFormData = new FormData();
    imageFormData.append("product_image", image);

    try {
      const response = await axios.post("/upload", imageFormData);
      if (response.status === 200) {
        submission.image = response.data.image_url;
        try {
          const serverResponse = await axios.post("/addproducts", submission);
          console.log(serverResponse.data.message);
          toast.success(serverResponse.data.message);
        } catch(err) {
          console.log(err.message);
          toast.error(err.message);
        }
      }
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }

    formRef.current.reset();
    setImage(null);
  };

  return (
    <div className="m-12">
      <Form
        className="space-y-4"
        method="post"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <label className="flex flex-col gap-4">
          <span className="text-lg font-bold">Product Name:</span>
          <input
            className="max-w-80 w-full border-2 border-gray-400 rounded-md py-3 px-4 bg-transparent focus:border-orange-500 focus:outline-none"
            type="text"
            name="name"
            placeholder="Type here..."
          />
        </label>
        <label className="flex flex-col gap-4">
          <span className="text-lg font-bold">Price:</span>
          <input
            className="max-w-80 w-full border-2 border-gray-400 rounded-md py-3 px-4 bg-transparent focus:border-orange-500 focus:outline-none"
            type="number"
            name="price"
            placeholder="Type here..."
          />
        </label>
        <label className="flex flex-col gap-4">
          <span className="text-lg font-bold">Stock:</span>
          <input
            className="max-w-80 w-full border-2 border-gray-400 rounded-md py-3 px-4 bg-transparent focus:border-orange-500 focus:outline-none"
            type="number"
            name="stock"
            placeholder="Type here..."
          />
        </label>
        {/* <label className="flex flex-col gap-4">
          <span className="text-lg font-bold">Product Name:</span>
          <input
            className="max-w-80 w-full border-2 border-gray-400 rounded-md py-3 px-4 bg-transparent focus:border-orange-500 focus:outline-none"
            type="text"
            name="Name"
            placeholder="Type here..."
          />
        </label> */}
        <label className="mb-3 flex items-center gap-x-4 cursor-pointer">
          <span className="text-lg font-bold">Product Category:</span>
          <select
            name="category"
            className="cursor-pointer ring-1 ring-slate-900/40 rounded-sm outline-none focus:ring-orange-500 p-1"
          >
            <option value=""></option>
            <option value="Smart Watch">Smart Watch</option>
            <option value="Headphones">Headphones</option>
            <option value="Speakers">Speakers</option>
            <option value="Charging Accessories">Charging Accessories</option>
            <option value="Security">Security</option>
            <option value="Powerbanks">Powerbanks</option>
            <option value="Powerbanks">Monitor</option>
          </select>
        </label>
        <label htmlFor="file-input" className="cursor-pointer flex">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt=""
            className="w-28 rounded-sm inline-block"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="product_image"
          id="file-input"
          className="pointer-events-none hidden"
        />
        <button
          type="submit"
          className="bg-orange-500 py-3 px-4 rounded-full text-white font-bold"
        >
          Add Product
        </button>
      </Form>
    </div>
  );
};
