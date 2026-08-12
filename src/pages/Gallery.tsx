import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop', category: 'Office' },
  { id: 2, src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop', category: 'Services' },
  { id: 3, src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop', category: 'Customers' },
  { id: 4, src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop', category: 'Office' },
  { id: 6, src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop', category: 'Customers' },

  {
    id: 1,
    src: "/shop/Shop-1.jpeg",
    category: "Office",
    title: "Shri Computer & Multi Services",
    titleMr: "श्री कॉम्प्युटर अँड मल्टी सर्व्हिसेस"
  },

    {
    id: 1,
    src: "/shop/Shop-2.jpeg",
    category: "Office",
    title: "Shri Computer & Multi Services",
    titleMr: "श्री कॉम्प्युटर अँड मल्टी सर्व्हिसेस"
  },

    {
    id: 1,
    src: "/shop/Shop-3.jpeg",
    category: "Office",
    title: "Shri Computer & Multi Services",
    titleMr: "श्री कॉम्प्युटर अँड मल्टी सर्व्हिसेस"
  },

    {
    id: 1,
    src: "/shop/Shop-4.jpeg",
    category: "Office",
    title: "Shri Computer & Multi Services",
    titleMr: "श्री कॉम्प्युटर अँड मल्टी सर्व्हिसेस"
  },

    {
    id: 1,
    src: "/shop/Shop-5.jpeg",
    category: "Office",
    title: "Shri Computer & Multi Services",
    titleMr: "श्री कॉम्प्युटर अँड मल्टी सर्व्हिसेस"
  },

  //   {
  //   id: 1,
  //   src: "/shop/Shop-6.jpeg",
  //   category: "Office",
  //   title: "Shri Computer & Multi Services",
  //   titleMr: "श्री कॉम्प्युटर अँड मल्टी सर्व्हिसेस"
  // },

  //   {
  //   id: 1,
  //   src: "/shop/Shop-7.jpeg",
  //   category: "Office",
  //   title: "Shri Computer & Multi Services",
  //   titleMr: "श्री कॉम्प्युटर अँड मल्टी सर्व्हिसेस"
  // }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h1>
          <p className="text-gray-600 text-lg">
            Take a look at our office, services, and happy customers.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(img.src)}
            >
              <img src={img.src} alt={img.category} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium px-4 py-2 border border-white/50 rounded-full backdrop-blur-sm">View</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <button 
              className="absolute top-6 right-6 text-white hover:text-gray-300"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X className="w-8 h-8" />
            </button>
            <img src={selectedImage} alt="Enlarged" className="max-w-full max-h-[90vh] object-contain rounded-md" onClick={(e) => e.stopPropagation()} />
          </div>
        )}
      </div>
    </div>
  );
}
