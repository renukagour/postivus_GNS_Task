/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import linkedln from '../../../public/linkedln.png'
interface TeamMemberProps {
  name: string;
  title: string;
  experience: string;
  imagePath: StaticImageData;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, title, experience, imagePath }) => {
  return (
    <div className="flex overflow-hidden flex-col px-9 pt-10 pb-16 bg-white border border-solid border-zinc-900 min-h-[331px] min-w-[240px] rounded-[45px] shadow-[0px_5px_0px_rgba(25,26,35,1)] w-[387px] max-md:px-5">
      <div className="flex flex-col w-full max-w-[317px]">
        <div className="flex gap-0 items-start w-full">
          <div className="flex flex-1 shrink gap-5 items-end pr-11 basis-0 min-w-[240px]">
            <Image loading="lazy" src={imagePath} className="object-contain shrink-0 aspect-[1.03] w-[106px]" alt={`${name} profile`} />
            <div className="flex flex-col rounded-none w-[148px]">
              <div className="self-start text-xl font-medium">{name}</div>
              <div className="text-">{title}</div>
            </div>
          </div>
          <Image loading="lazy" src={linkedln} className="object-contain shrink-0 aspect-square w-[34px]" alt="" />
        </div>
        <div className="mt-7 w-full border border-black border-solid min-h-[1px]" />
        <div className="mt-7 text-lg">{experience}</div>
      </div>
    </div>
  );
};

export default TeamMember;
