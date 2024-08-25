"use client";

import React, { useEffect, useState } from "react";
import ReactPortal from "./ReactPortal";
import abi from "../../abis/AcademifyPaymentManager.json";
import contractAddresses from "../../smart-contracts-config/contractAddresses";
import { useAccount, useWriteContract } from "wagmi";
import { sepolia } from "viem/chains";
import { parseEther } from "ethers";
import Link from "next/link";

const PurchaseModal = ({ isOpen, handleClose, article, author }) => {
  const [started, setStarted] = useState(false);
  const [errors, setErrors] = useState();
  const [completed, setCompleted] = useState(false);
  const { isConnected } = useAccount();
  const { writeContractAsync } = useWriteContract();

  const handlePayment = async () => {
    try {
      setErrors("");
      setStarted(true);

      const data = await writeContractAsync({
        chainId: sepolia.id,
        address: contractAddresses.AcademifyPaymentManager,
        functionName: "buyArticle",
        abi: abi,
        args: [],
        value: parseEther(article.price.toString()),
      });
      setCompleted(true);
    } catch (err) {
      console.log(err);
      setStarted(false);
      setErrors("Payment failed. Please try again.");
    }
  };

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
      {!completed ? (
        <div className="fixed inset-0 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 brightness-[.4] opacity-95 backdrop-filter backdrop-blur-sm pointer-events-none"></div>
          <div className="w-[90%] max-w-[450px] sm:w-[450px] h-[58%] rounded-lg border-4 border-black shadow-lg z-10 bg-backgroundColor flex flex-col justify-around px-6 pt-4">
            <div className="-mt-5 flex flex-col">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold mb-2">Order details</h1>
                <img src="/academify-logo-reduced.png" className="h-12 w-8" />
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
              {isConnected ? (
                !completed && (
                  <button
                    disabled={started}
                    className="font-bold border-2 border-black hover:bg-owlBeige p-2 px-4 rounded-xl"
                    onClick={handlePayment}
                  >
                    {started
                      ? "Confirming..."
                      : `Buy now ${article.price} ${article.currency}`}
                  </button>
                )
              ) : (
                <Link href="/account">
                  <button className="font-bold border-2 border-black hover:bg-owlBeige p-2 px-4 rounded-xl">
                    Connect Wallet to Buy
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 brightness-[.4] opacity-95 backdrop-filter backdrop-blur-sm pointer-events-none"></div>
          <div className="w-[90%] max-w-[450px] sm:w-[450px] h-60 rounded-lg border-4 border-black shadow-lg z-10 bg-backgroundColor flex flex-col justify-evenly px-6 pt-4">
            <div className="-mt-5 flex flex-col">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold mb-2">Payment Successful! 🎉
                </h1>
              </div>
              <p className="text-start">Thank you for supporting Academify and the community of independent researchers.</p>
            </div>

            <div className="flex gap-4 justify-center">
              <Link href={`https://${article.articleCID}.ipfs.w3s.link`} target="_blank">
                <button onClick={handleClose} className="font-bold border-2 border-black hover:bg-owlBeige p-2 px-4 rounded-xl">
                  Read article
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </ReactPortal>
  );
};

export default PurchaseModal;
