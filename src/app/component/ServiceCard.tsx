import Image from "next/image";

interface ServiceCardProps {
  title: string;
  icon: string;
  bgColor: string;
  textColor: string;
  buttonIcon: string;
}

export default function ServiceCard({
  title,
  icon,
  bgColor,
  textColor,
  buttonIcon,
}: ServiceCardProps) {
  return (
    // <div className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-all ${bgColor}`}>
    //   <div className="flex flex-col justify-between h-full">
    //     {/* Card Title */}
    //     <h3 className={`text-lg font-semibold ${textColor}`}>{title}</h3>

    //     {/* Icon */}
    //     <div className="mt-4 flex justify-center">
    //       <Image src={icon} alt={`${title} icon`} width={80} height={80} className="object-contain" />
    //     </div>

    //     {/* Learn More */}
    //     <a href="#" className="flex items-center mt-6 gap-2">
    //       <Image src={buttonIcon} alt="Arrow icon" width={20} height={20} />
    //       <span className="text-sm font-medium text-green-600">Learn more</span>
    //     </a>
    //   </div>
    // </div>
    <div className={`${bgColor} p-6 rounded-3xl shadow-md`}>
    <div className="grid grid-cols-2 gap-4 items-center">
      {/* left side */}
      <div>
      <h3 className={`text-2xl font-semibold ${textColor}`}>{title}</h3>
      
      <a href="#" className="flex items-center font-medium gap-2 mt-8">
      
      <Image src={buttonIcon} alt="Arrow icon" width={35} height={35} />
          <span className={`text-xl ${textColor}`}>Learn more</span>
          </a>
      </div>
      {/* right side */}
      <div className="flex justify-center">
        <Image
          src={icon}
          alt={title}
          width={150}
          height={150}
          className="object-contain"
        />
      </div>
      </div>
    </div>
  );
}
