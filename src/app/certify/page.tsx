import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Certify - Academify",
    description:
      "Top-level knowledge shared by the most authoritative sources, powered by blockchain technology.",
  };

const CertifyPage = () => {
  return (
    <div className="min-h-screen bg-backgroundColor p-8 px-10 pt-24 flex flex-col items-center">
      <img className="h-60 lg:h-72" src='/work-in-progress-image.png' />
    </div>
  )
}

export default CertifyPage
