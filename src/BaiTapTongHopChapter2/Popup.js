import React from "react";
import _ from "lodash";
import "./Popup.css";
export default function Popup(props) {
  const { openModal, setOpenModal, item } = props;
  // Cách 1: không dùng join lodash
  //   const classModal = [openModal ? "openModal" : "closeModal"];
  // Cách 2: Dùng join lodash
  const classModal = [
    "fixed",
    "z-10",
    "inset-0",
    "overflow-y-auto",
    openModal ? "openModal" : "closeModal",
  ];
  return (
    <div
      //   className={`fixed z-10 inset-0 overflow-y-auto ${classModal}`}
      className={_.join(classModal, " ")}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        />
        {/* This element is to trick the browser into centering the modal contents. */}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          ​
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  {item.tenMonAn}
                </h3>
                <div className="mt-2">
                  <img src={item.hinhAnh} alt={item.maMonAn} />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              type="button"
              className="cursor-pointer mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
