import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { certificates } from '../data';

const CertificationsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications that validate my expertise in cloud security, 
            incident response, and networking.
          </p>
        </div>
        
        {/* Certifications Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Carousel Navigation */}
          <div className="absolute inset-y-0 left-0 flex items-center -ml-4 z-10">
            <button 
              onClick={goToPrevious}
              className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous certificate"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center -mr-4 z-10">
            <button 
              onClick={goToNext}
              className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next certificate"
            >
              <ArrowRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
          
          {/* Certificate Card */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {certificates.map((certificate, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 flex flex-col md:flex-row overflow-hidden"
                >
                  {/* Certificate Image */}
                  <div className="md:w-2/5 h-48 md:h-auto overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <img 
                      src={certificate.image || 'https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} 
                      alt={certificate.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Certificate Details */}
                  <div className="md:w-3/5 p-6 bg-white dark:bg-gray-900 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {certificate.name}
                    </h3>
                    
                    <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300 flex-grow">
                      <div className="flex justify-between">
                        <span className="font-medium">Issuing Organization:</span>
                        <span>{certificate.issuer}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="font-medium">Issue Date:</span>
                        <span>{certificate.date}</span>
                      </div>
                      
                      {certificate.expiryDate && (
                        <div className="flex justify-between">
                          <span className="font-medium">Expiry Date:</span>
                          <span>{certificate.expiryDate}</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between">
                        <span className="font-medium">Credential ID:</span>
                        <span className="truncate max-w-[150px]">{certificate.credentialId}</span>
                      </div>
                    </div>
                    
                    {/* Verification Link */}
                    {certificate.verificationLink && (
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <a 
                          href={certificate.verificationLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Verify Certificate
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-blue-600 dark:bg-blue-400'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to certificate ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;