/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { SearchBar } from "./SearchBar";

export const SearchModal = ({ open, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  if (!open) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div ref={modalRef} >
        <SearchBar />
        <p className="text-gray-700">Your search content goes here...</p>
      </div>
    </div>
  );
};
