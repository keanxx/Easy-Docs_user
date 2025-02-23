import React from "react";
import MenuBar from "../Components/MenuBar";
import BarangayIndigency from "../Components/Barangay Certificates/BarangayIndigency";
import BarangayClearance from "../Components/Barangay Certificates/BarangayClearance";

const GetCertification = () => {
  return (
    <>
      <MenuBar />
      <div className="w-[100%] h-screen space-y-5 p-5 md:w-[95%] mx-auto">
        
        {/* Use DropdownSection Component */}
        <BarangayClearance 
          title="Barangay Clearance" 
          content="HAHAHA Bading." 
        />

        <BarangayIndigency 
          title="Barangay Indigency" 
          content="Bading ulit." 
        />

        
      </div>
    </>
  );
};

export default GetCertification;
