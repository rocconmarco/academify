import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Publish - Academify",
    description:
      "Top-level knowledge shared by the most authoritative sources, powered by blockchain technology.",
  };

const PublishPage = () => {
  return (
    <div className="min-h-screen bg-backgroundColor p-8 px-10 pt-24 flex flex-col items-center">
      <img className="h-60 lg:h-72" src='/work-in-progress-image.png' />
    </div>
  )
}

export default PublishPage
