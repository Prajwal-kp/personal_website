import React, { useState } from "react";
import certificateImages from "../data/certificate.ts"; // Default import

const CertificationsSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="certifications" className="py-12 bg-white dark:bg-gray-900">
      <h1 className="text-center font-bold text-2xl my-5">Certifications</h1>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {certificateImages.map((image, index) => (
            <div
              key={index}
              className="w-full h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image}
                alt={`Certificate ${index + 1}`}
                className="w-full h-full object-contain cursor-pointer rounded-lg"
                onClick={() => handleImageClick(image)}
              />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="relative bg-white p-8 rounded-lg shadow-lg max-w-3xl max-h-3xl overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white bg-gray-800 p-2 rounded-full"
              onClick={handleCloseModal}
            >
              X
            </button>
            <img
              src={selectedImage || ""}
              alt="Selected certificate"
              className="w-auto h-auto max-w-full max-h-full p-4 rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;
