import DefaultLayout from "@/layouts/DefaultLayout";
import { imageAssets } from "@/public/assets/imgs";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

type Props = {};

const Service = (props: Props) => {
   const [role,setRole] = useState<string | null> (null)
   const router = useRouter();

   useEffect(() => {
      console.log(typeof(sessionStorage.getItem('CHUC_VU')))
      
      let temp = sessionStorage.getItem('CHUC_VU')
      if (temp != 'LE TAN') router.push("/access-denied");
      setRole(temp)
   },[])

   return (
      <DefaultLayout>
         {
            role === 'LE TAN' ?
         <div
            className="flex justify-around justify-items-center h-screen pt-12"
            style={{ height: "90%" }}
         >
            <div
               className="max-w-sm rounded overflow-hidden shadow-lg"
               style={{ height: "480px" }}
            >
               <img
                  className="w-full"
                  src={imageAssets.Service.src}
                  alt="Sunset in the mountains"
               />
               <div className="px-6 py-4" style={{ height: "140px" }}>
                  <div className="font-bold text-xl mb-2">
                     Dịch vụ khách sạn
                  </div>
                  <p className="text-gray-700 text-base">
                     Khách sạn sẽ cung cấp cho bạn những dịch vụ tốt nhất để bạn
                     có trải nghiệm tuyệt nhất trong kỳ du lịch.
                  </p>
               </div>
               <div className="flex flex-col items-center">
                  <a
                     className="px-11 py-4 text-blue-100 no-underline bg-blue-500 rounded hover:bg-blue-600 hover:underline hover:text-blue-200"
                     href="service/hotel"
                  >
                     Đăng ký
                  </a>
               </div>
            </div>
            <div
               className="max-w-sm rounded overflow-hidden shadow-lg"
               style={{ height: "480px" }}
            >
               <img
                  className="w-full"
                  src={imageAssets.Tour.src}
                  alt="Sunset in the mountains"
                  style={{ height: "256px", width: "384px" }}
               />
               <div className="px-6 py-4" style={{ height: "140px" }}>
                  <div className="font-bold text-xl mb-2">Tour du lịch</div>
                  <p className="text-gray-700 text-base">
                     Trải nghiệm các địa điểm xung quanh với tour du lịch hấp
                     dẫn.
                  </p>
               </div>
               <div className="flex flex-col items-center">
                  {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-11 rounded">
                     Đăng ký
                  </button> */}
                  <a
                     className="px-11 py-4 text-blue-100 no-underline bg-blue-500 rounded hover:bg-blue-600 hover:underline hover:text-blue-200"
                     href="service/tour"
                  >
                     Đăng ký
                  </a>
               </div>
            </div>
            {/* <img src={imageAssets.Tour.src} alt="tour-img" /> */}
         </div> : <div>You don't have premisson</div>
         }
      </DefaultLayout>
   );
};

export default Service;
