
"use client";
import React from "react";
import jane from '../../../public/jane.png'
import john from '../../../public/john.png'
import emily from '../../../public/emily.png'
import michael from '../../../public/michael.png'
import sarah from '../../../public/sarah.png'
import brian from '../../../public/brian.png'
import '../style.css'
import TeamMember from "./TeamMember";
const teamMembers = [
  {
    name: "John Smith",
    title: "CEO and Founder",
    experience: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
    imagePath: john
  },
  {
    name: "Jane Doe",
    title: "Director of Operations",
    experience: "7+ years of experience in project management and team leadership. Strong organizational skills.",
    imagePath: jane,
  },
  {
    name: "Michael Brown",
    title: "Senior SEO Specialist",
    experience: "5+ years of experience in SEO and content creation. Proficient in keyword research and optimization.",
    imagePath: michael
  },
  {
    name: "Emily Johnson",
    title: "PPC Manager",
    experience: "2+ years of experience in paid search advertising. Skilled in campaign management.",
    imagePath: emily
  },
  {
    name: "Brian Williams",
    title: "Social Media Specialist",
    experience: "4+ years of experience in social media marketing. Skilled in content creation and engagement.",
    imagePath:brian,
  },
  {
    name: "Sarah Kim",
    title: "Content Creator",
    experience: "2+ years of experience in writing and editing. Skilled in SEO-optimized content creation.",
    imagePath:sarah,
  },
];

const Teams: React.FC = () => (
  <section className="py-5 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-4 heading2 w-24">Team</h2>
      <p className="text-gray-600 mb-10">Meet the skilled and experienced team behind our successful digital marketing strategies.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          // <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 p-4 relative transition-transform hover:scale-105">
          //   <div className="absolute top-2 right-2 bg-white rounded-full p-1 text-black-500 shadow">
          //     <FaLinkedin size={18} />
          //   </div>

          //   <div className="flex flex-col items-center">
          //   <div className="text-center">
           
          //   <Image
          //       src={member.imagePath?member.imagePath:""}
          //       alt={member.name}
          //       className="h-24 w-24 object-cover rounded-full mb-4"
          //        />
             
          //       <h3 className="text-lg font-semibold">{member.name}</h3>
          //       <p className="text-sm text-gray-500 font-medium">{member.title}</p>
          //       </div>
          //       <div className="text-center">
          //       <hr className="w-12 border-t-2 border-gray-200 mt-2 mb-3 mx-auto" />
          //       <p className="text-gray-600 text-sm">{member.experience}</p>
          //       </div>
            
          //   </div>
          // </div>
          <TeamMember
          key={index}
          name={member.name}
          title={member.title}
          experience={member.experience}
          imagePath={member.imagePath}
                    />
        ))}
      </div>

      <div className="flex flex-col items-end mt-10">
        <button className="bg-gray-900 text-white px-8 py-3 rounded-md font-medium shadow-md transition-all hover:bg-gray-700 ">See all team</button>
      </div>
    </div>
  </section>
);

export default Teams;
