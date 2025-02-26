"use client";

import { OutputContent } from '@components/demo/OutputContent';
import ColorDiv from '@components/output/ColorDiv';



export default function Home() {
 


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-200 to-purple-50 flex flex-col justify-center items-center px-8">
      
  
      <OutputContent/>

      <ColorDiv/> 
     

      
      
      
    </div>
  );
}