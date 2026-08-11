import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Users, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';

export default function About() {
  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Shri Computers & Multi Services</h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded by <strong className="text-secondary">Shri Shriram Sanjay Mhasrup</strong>, Shri Computers & Multi Services is a premier Common Service Centre (CSC) and Maha e-Seva Kendra located in Shevgaon, Ahilyanagar.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our mission is to bridge the digital divide by providing fast, reliable, and accessible online government services, banking solutions, and high-quality documentation services to the local community.
            </p>
            
            <div className="space-y-3 mt-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary w-6 h-6" />
                <span className="text-gray-700 font-medium">Authorized CSC Center (ID: 625663450012)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary w-6 h-6" />
                <span className="text-gray-700 font-medium">Digital India Partner</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary w-6 h-6" />
                <span className="text-gray-700 font-medium">100% Secure & Confidential</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            {/* The user provided an image, so we can use a placeholder or style it nicely to look like the owner/office */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
                alt="Digital Center" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold">Trusted by Thousands</h3>
                <p className="text-white/80">Serving Shevgaon with Pride</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats/Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <Card className="bg-gray-50 border-none shadow-sm">
            <CardContent className="p-8 text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">To simplify access to government schemes and digital services for rural and urban citizens alike.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-50 border-none shadow-sm">
            <CardContent className="p-8 text-center">
              <div className="mx-auto w-16 h-16 bg-orange-100 text-primary rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">Delivering error-free applications, high-quality printing, and immediate support for all queries.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-50 border-none shadow-sm">
            <CardContent className="p-8 text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer First</h3>
              <p className="text-gray-600">Your privacy and data security are our top priority. We ensure confidential handling of all documents.</p>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
