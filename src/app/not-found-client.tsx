// app/not-found-client.tsx
"use client";

import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function NotFoundClient() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Decorative Elements - Matching About Page */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl w-full text-center">
          
          {/* 404 Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 px-6 py-3 rounded-full font-poppins font-medium text-sm mb-8 shadow-sm">
            <AlertTriangle className="h-5 w-5 mr-2" />
            404 Error
          </div>

          {/* Large 404 Text */}
          <div className="text-8xl sm:text-9xl lg:text-[12rem] font-medium mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-poppins leading-none">
            404
          </div>
          
          {/* Error Message */}
          <h1 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
            Oops! This Page Has
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Gone Missing
            </span>
          </h1>
          
          <p className="font-poppins text-base sm:text-lg text-slate-700 max-w-xl mx-auto leading-relaxed">
            Don't worry - even our expert leak detection skills can't find this page! It might have been moved, deleted, or the URL might be incorrect. Let us help you get back on track.
          </p>

        </div>
      </div>
    </main>
  )
}