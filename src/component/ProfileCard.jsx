import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons';
import { faPersonRays } from '@fortawesome/free-solid-svg-icons';
import { faHeadSideMask } from '@fortawesome/free-solid-svg-icons';
import { faFileWaveform } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import SemiCircleProgressBar from "react-progressbar-semicircle";

const ProfileCard = ({
  name,
  gender,
  age,
  patientId,
  progress,
  phone,
  email,
  affectedSide,
  condition,
  speciality,
  medicalHistory,
}) => {
  return (
    <div className="bg-white rounded-xl p-4 mx-4">
      {/* Header Section */}
      <div className='px-3'>
        <h1 className='text-2xl font-semibold text-[#002647] items-center'><FontAwesomeIcon icon={faArrowLeft} size='md' className='pr-2'/>View patient</h1>
      </div>

      <div className="border-[2px] border-gray-300 my-4 "></div>

      <div className="mb-4 mx-3 flex justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[#002647]">{name}, {gender}/{age}</h2>
          <p className="text-[#012E57]">Patient ID: {patientId}</p>
        </div>
        <div className=''><FontAwesomeIcon icon={faCircleUser} className='text-5xl' /></div>
        
      </div>
      
      {/* Goal Reached Section */}
      <div className="relative mt-4 bg-[#002647] rounded-[28px] p-4 text-white shadow-gray-800 shadow-2xl ">
        <p className="text-center font-semibold text-xl">Goal reached</p>

        {/* Using the SemiCircleProgress component */}
        <div className='flex justify-center text-7xl font-semibold'>
          <SemiCircleProgressBar percentage={progress} showPercentValue stroke="#FCB000"  strokeWidth="19"  background="#D9D9D9" diameter="300"/>
        </div>
        

        {/* Chart Indicators */}
        <div className="flex justify-around mt-4 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span>EMG</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <span>ROM</span>
          </div>
        </div>
      </div>

      {/* Patient Details Section */}
      <div className="mt-8 mx-3 grid grid-cols-2 gap-y-2 gap-x-8">
        {/* Key column */}
        <div className=" text-[#7D7D7D]">Phone</div>
        <div className="font-semibold text-gray-800 items-center">
        <FontAwesomeIcon icon={faPhone} className='text-sm pr-1'/>{phone}
        </div>
        
        <div className=" text-[#7D7D7D]">Email</div>
        <div className="font-semibold text-gray-800 break-words items-center">
        <FontAwesomeIcon icon={faEnvelope} className='text-sm pr-1'/>{email}</div>
        
        <div className=" text-[#7D7D7D]">Affected Side</div>
        <div className="font-semibold text-gray-800 items-center">
        <FontAwesomeIcon icon={faPersonRays} className='text-sm pr-1'/>{affectedSide}</div>
        
        <div className=" text-[#7D7D7D]">Condition</div>
        <div className="font-semibold text-gray-800 items-center">
        <FontAwesomeIcon icon={faHeadSideMask} className='text-sm pr-1'/>{condition}</div>
        
        <div className=" text-[#7D7D7D]">Speciality</div>
        <div className="font-semibold text-black items-center">
        <FontAwesomeIcon icon={faSuitcaseMedical} className='text-sm pr-1'/>{speciality}</div>
      </div>
      
      <div className="border-[2px] border-gray-300 my-4"></div>

      {/* Medical History Section */}
      <div className="mt-4 mx-3 grid grid-cols-2 gap-x-8 gap-y-2">
        <button className="flex items-center text-[#002647] font-semibold">
          <span><FontAwesomeIcon icon={faFileWaveform} /></span>
          <span className="ml-2">Medical history</span>
        </button>
        <p className="text-gray-800 font-semibold ">{medicalHistory}</p>
      </div>

      <div className="border-[2px] border-gray-300 my-4"></div>
    </div>
  );
};

export default ProfileCard;
