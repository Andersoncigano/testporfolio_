
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';

// --- ÁREA DE EDIÇÃO DA FOTO ---
const USER_IMAGE_URL = "https://i.ibb.co/zC8jtbr/sombra.png"; 
// ------------------------------

const Hero: React.FC = () => {
  const fallbackImage = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop";
  const initialImage = USER_IMAGE_URL || "/profile.png";
  const [imgSrc, setImgSrc] = useState(initialImage);

  const handleImageError = () => {
    if (imgSrc !== fallbackImage) {
      setImgSrc(fallbackImage);
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col md:flex-row bg-gray-50 overflow-hidden">
      {/* Left Column: Image */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative bg-gray-50 flex flex-col justify-end items-center">
        
        {/* Container da imagem */}
        <div className="relative z-10 w-full h-full flex items-end justify-center pb-0">
          <img 
            src={imgSrc} 
            onError={handleImageError}
            alt={PERSONAL_INFO.name} 
            className="max-h-[85%] md:max-h-[90%] w-auto object-contain object-bottom"
          />
        </div>

      </div>

      {/* Right Column: Content */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center md:justify-start p-6 md:pl-0 bg-gray-50 relative z-30">
        
        <div className="w-full max-w-2xl relative text-left z-10 md:-ml-20 lg:-ml-24">
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-brandBlack font-black leading-none mb-8 tracking-tighter opacity-0 reveal-up delay-200">
            {PERSONAL_INFO.name}
          </h1>

          <div className="w-20 h-1 bg-brandBlack my-8 opacity-0 reveal-up delay-400"></div>

          <h2 className="text-xs md:text-base lg:text-lg font-bold text-gray-700 uppercase tracking-[0.25em] flex flex-col items-start gap-3 opacity-0 reveal-up delay-600">
            <span>Diretor de Arte</span>
            <span>e Inteligência Artificial</span>
          </h2>
        </div>

        {/* Background blobs */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white rounded-full opacity-40 animate-float"></div>
        <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-white rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>

      </div>
    </section>
  );
};

export default Hero;