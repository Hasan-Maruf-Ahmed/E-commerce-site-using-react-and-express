import { Form } from "react-router-dom";

export const AddProducts = () => {
  return (
    <div className="m-12">
      <Form className="space-y-4" method="post">
        <label className="flex flex-col gap-4">
          <span className="text-lg font-medium">Product Name:</span>
          <input
            className="max-w-80 w-full border-2 border-gray-400 rounded-md py-3 px-4 bg-transparent focus:border-orange-500 focus:outline-none"
            type="text"
            name="Name"
            placeholder="Type here..."
          />
        </label>
        <label className="flex flex-col gap-4">
          <span className="text-lg font-medium">Product Name:</span>
          <input
            className="max-w-80 w-full border-2 border-gray-400 rounded-md py-3 px-4 bg-transparent focus:border-orange-500 focus:outline-none"
            type="text"
            name="Name"
            placeholder="Type here..."
          />
        </label>
        <label className="flex flex-col gap-4">
          <span className="text-lg font-medium">Product Name:</span>
          <input
            className="max-w-80 w-full border-2 border-gray-400 rounded-md py-3 px-4 bg-transparent focus:border-orange-500 focus:outline-none"
            type="text"
            name="Name"
            placeholder="Type here..."
          />
        </label>
        <label className="flex flex-col gap-4">
          <span className="text-lg font-medium">Product Name:</span>
          <input
            className="max-w-80 w-full border-2 border-gray-400 rounded-md py-3 px-4 bg-transparent focus:border-orange-500 focus:outline-none"
            type="text"
            name="Name"
            placeholder="Type here..."
          />
        </label>
      </Form>
    </div>
  );
};
