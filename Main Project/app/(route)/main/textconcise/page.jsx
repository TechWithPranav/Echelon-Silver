"use client";  // Ensure you are using client-side rendering

import React from 'react';
// import ApexChart from '../../../components/Charts/Charts';  // Correct import based on default export
import { useState } from 'react';
import DocumentUpload from '@/components/document_summarize/DocumentUpload';


const textconcise = () => {

  const [textToAnalyze, setTextToAnalyze] = useState('This is a positive statement.');
  return (
    <>
    
      <h1 className='text-5xl text-center mt-12 mb-8'>TextConciser</h1>
    <DocumentUpload />

      
    </>
  );
}

export default textconcise;
