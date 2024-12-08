import Image from "next/image";



export default function Shop() {
  return (
    <div className="relative w-full h-80">
      {/* Background Image */}
      <Image 
        src="/images/shopheader.png" 
        alt="header image"
        layout="fill" 
        objectPosition="center" 
        className="z-0"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-black z-10">
        <h3 className="font-bold text-4xl">Shop</h3>
        <h5 className="text-lg mt-2 cursor-pointer ">
          <span className="font-bold ">Home</span> / Shop
        </h5>
        
      </div>
    <br/>
<div className=" w-full h-full border-spacing-6 bg-slate-50">
  
</div>
    </div>
    
   
   
  );
}

