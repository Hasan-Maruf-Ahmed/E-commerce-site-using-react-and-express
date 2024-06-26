/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";

export const SearchModal = ({ open, onClose }) => {
  const modalRef = useRef();

  const [results, setResults] = useState([]);

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
  }, [onClose]);

  if (!open) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div ref={modalRef} >
        <SearchBar setResults={setResults}/>
        <div className="w-full py-4 px-6 bg-white flex flex-col shadow-xl rounded-lg mt-4 max-h-48 overflow-auto">
            {results.length !== 0 &&
            (results.map((result, id) => {
                return <div key={id} className="mb-4"><Link to={`/product/${result._id}`} onClick={() => onClose(false)}>{result.name}</Link></div>
            }))
            }
        </div>
      </div>
    </div>
  );
};
