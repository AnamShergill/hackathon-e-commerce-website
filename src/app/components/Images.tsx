import React from "react";
import stand from "../../../public/images/stand.png";
import laptop from "../../../public/images/laptop.png";
import brownChair from "../../../public/images/brownchair.png";
import whiteDining from "../../../public/images/white-dinning.png";
import bed from "../../../public/images/bed.png";
import mirror from "../../../public/images/mirror.png";
import kitchen from "../../../public/images/kitchen.png";
import frame from "../../../public/images/frame.png";
import camera from "../../../public/images/camera.png";
import Image from "next/image";

function Images() {
  return (
    <div className="h-[600px] w-full overflow-x-auto hide-scrollbar flex gap-4 snap-x">
      <div className="flex flex-col gap-3 snap-center">
        <Image alt="furniture" src={stand} className="h-[380px] w-full max-w-[270px] object-contain" />
        <Image alt="furniture" src={brownChair} className="h-[320px] w-full max-w-[380px] object-cover" />
      </div>

      <div className="flex flex-col gap-3 pt-3 snap-center">
        <Image alt="furniture" src={laptop} className="h-[280px] w-full max-w-[480px] object-cover" />
        <Image alt="furniture" src={camera} className="h-[230px] w-full max-w-[340px] object-fill" />
      </div>

      <div className="my-20">
        <Image alt="furniture" src={whiteDining} className="h-[350px] w-full max-w-[290px] object-fill" />
      </div>

      <div className="flex-col flex gap-2 snap-center">
        <Image alt="furniture" src={bed} className="h-[320px] w-full max-w-[350px] object-cover" />
        <div className="flex gap-2">
          <Image alt="furniture" src={frame} className="h-[240px] w-full max-w-[170px] object-cover" />
          <Image alt="furniture" src={kitchen} className="h-[186px] w-full max-w-[350px] object-fill" />
        </div>
      </div>

      <div className="flex gap-4 snap-center">
        <Image alt="furniture" src={mirror} className="h-[480px] w-full max-w-[420px] object-cover" />
      </div>
    </div>
  );
}

export default Images;
