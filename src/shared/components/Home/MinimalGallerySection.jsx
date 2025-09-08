import React, { useState, useEffect } from "react";
import { ArrowRight, Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function MinimalGallerySection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const galleryImages = [
    {
      id: 1,
      image: '/images/galleryhome/DSC_0425.JPG',
      alt: 'Campus Architecture',
      category: 'Campus'
    },
    {
      id: 2,
      image: '/images/galleryhome/DSC_0738.JPG',
      alt: 'Study Space',
      category: 'Facilities'
    },
    {
      id: 3,
      image: '/images/galleryhome/DSC_7833 - Copy.JPG',
      alt: 'Student Life',
      category: 'Students'
    },
    {
      id: 4,
      image: '/images/galleryhome/DSC_0720.JPG',
      alt: 'Events',
      category: 'Events'
    },
    {
      id: 5,
      image: '/images/galleryhome/DSC_0631.JPG',
      alt: 'Laboratory',
      category: 'Facilities'
    },
    {
      id: 6,
      image: '/images/galleryhome/DSC_0453.JPG',
      alt: 'Graduation',
      category: 'Events'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      alt: 'Library',
      category: 'Facilities'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop',
      alt: 'Lecture Hall',
      category: 'Campus'
    }
  ];

  const previewImages = galleryImages.slice(0, 6);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  if (showFullGallery) {
    return (
      <div className="min-h-screen bg-white">
        {/* Full Gallery Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-40">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFullGallery(false)}
                className="p-2 hover:bg-purple-50 rounded-full transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-purple-600" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Campus Gallery</h1>
                <p className="text-sm text-gray-600">{galleryImages.length} Photos</p>
              </div>
            </div>
            <button
              onClick={() => setShowFullGallery(false)}
              className="p-2 hover:bg-purple-50 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-purple-600" />
            </button>
          </div>
        </div>

        {/* Full Gallery Grid */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image.image}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium truncate">{image.alt}</p>
                  <p className="text-white/80 text-xs">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white hover:bg-white/10 rounded-full transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white hover:bg-white/10 rounded-full transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="max-w-4xl max-h-[90vh] mx-4">
              <img
                src={selectedImage.image}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{selectedImage.alt}</h3>
                <p className="text-white/80 text-sm">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Minimal Gallery Preview
  return (
    <div className="py-5 lg:py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Minimal Header */}
        <div className={`text-center mb-5 lg:mb-16 transition-all duration-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
            <Camera className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">Gallery</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Campus <span className="text-purple-600">Moments</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the vibrant life and modern facilities at our campus
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center px-4 lg:px-12 py-5 lg:py-12 bg-white">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
              Modern and Enabling Infrastructure at TIET
            </h2>
            <p className="text-gray-600 leading-relaxed text-base xl:text-lg">
              In the modern and enabling infrastructure environment at TIET, students experience a job-oriented educational system tailored to the demands of the corporate age.
            </p>
            <p className="text-gray-600 leading-relaxed text-base xl:text-lg">
              The college features a magnificent building with spacious classrooms, highly proficient and well-trained faculty members, fully equipped laboratories, workshops, drawing halls, seminar halls, full-fledged libraries, lecture halls, and a browsing center with broadband internet connectivity.
            </p>
            <p className="text-gray-600 leading-relaxed text-base xl:text-lg">
              Additional facilities include separate hostels for boys and girls, frequent bus services, a cafeteria, sports amenities, training and placement cells, and NSS programs. The college actively assists students in training and placement activities, ensuring career readiness.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-5 lg:mb-12">
            {previewImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative aspect-square overflow-hidden rounded-xl cursor-pointer transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image.image}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* View All Button */}
        <div className={`text-center transition-all duration-800 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link to={"/gallery"}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300"
          >
            View All Gallery
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Lightbox for Preview */}
        {selectedImage && !showFullGallery && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-w-4xl max-h-[90vh] mx-4">
              <img
                src={selectedImage.image}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{selectedImage.alt}</h3>
                <p className="text-white/80 text-sm">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}