import React from "react";

interface ModalProps {
  title: string;
  description: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, description, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#1E1930] text-white w-[400px] p-6 rounded-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl font-bold"
        >
          &times;
        </button>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-4 text-[#8794A9]">{description}</p>
      </div>
    </div>
  );
};

export default Modal;
