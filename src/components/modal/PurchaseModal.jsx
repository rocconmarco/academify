import React, { useEffect } from "react";
import ReactPortal from "./ReactPortal";

const PurchaseModal = ({ isOpen, handleClose, article, author }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 brightness-[.4] opacity-95 backdrop-filter backdrop-blur-sm pointer-events-none"></div>
        <div className="w-[30%] h-[45%] rounded-lg border-4 border-black shadow-lg z-10 bg-backgroundColor flex flex-col justify-around px-6 pt-4">
          <div className="-mt-5 flex flex-col">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold mb-2">Order details</h1>
              <img src="/academify-logo-reduced.png" className="h-12 w-8"></img>
            </div>

            <p>
              <strong>Item:</strong> Article ({article.articleType})
            </p>
            <p>
              <strong>Title:</strong> {article.title}
            </p>
            <p>
              <strong>Author:</strong> {author.firstName} {author.lastName}
            </p>
          </div>

          <div>
            <p>
              <strong>Total:</strong> {article.price} {article.currency}
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleClose}
              className="font-bold border-2 border-black hover:bg-owlBeige p-2 px-4 rounded-xl"
            >
              Cancel
            </button>
            <button className="font-bold border-2 border-black hover:bg-owlBeige p-2 px-4 rounded-xl">
              Buy now ({article.price} {article.currency})
            </button>
          </div>
        </div>
      </div>
    </ReactPortal>
  );
};

export default PurchaseModal;
