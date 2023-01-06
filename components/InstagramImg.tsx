import Image from "next/image";

import { FaInstagram } from "react-icons/fa";

export default function InstagramImg() {
  const imageSrcs = [
    {
      key: "IgImg1",
      src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8MHwwfGJsYWNrfA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      key: "IgImg2",
      src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      key: "IgImg3",
      src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
    },
    {
      key: "IgImg4",
      src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
    },
    {
      key: "IgImg5",
      src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
    },
    {
      key: "IgImg6",
      src: "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
      {imageSrcs.map((imgSrc) => {
        return(
          <Image
            key={imgSrc.key}
            src={imgSrc.src} 
            alt="/"
            width={1240}
            height={600}
          />
        );
      })}
      <div className="flex justify-center items-center aboslute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group">
        <p className="text-gray-300 hidden group-hover:block">
          <FaInstagram size={30} />
        </p>
      </div>
    </div>
  )
}
