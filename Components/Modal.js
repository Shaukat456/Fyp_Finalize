import React from "react";
const Modal = ({ handleActionSelect }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className="modal rounded-lg bg-white p-6 shadow-lg">
        <div className="modal-content">
          <h2 className="modal-title mb-4 text-xl font-bold">Select Action</h2>
          <button
            className="modal-button block w-full rounded-md bg-blue-500 py-2 text-center font-semibold text-white hover:bg-blue-600"
            onClick={() => handleActionSelect("Withdraw")}
          >
            Withdraw
          </button>
          <button
            className="modal-button mt-2 block w-full rounded-md bg-blue-500 py-2 text-center font-semibold text-white hover:bg-blue-600"
            onClick={() => handleActionSelect("Transfer")}
          >
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
