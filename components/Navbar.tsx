import {
  useEffect,
  useState
} from "react";

import Link from "next/link";

import {
  AiOutlineMenu,
  AiOutlineClose
} from "react-icons/ai";

import { Raleway } from "@next/font/google";

const raleway = Raleway({});

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  function handleNav() {
    setNav(!nav);

    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  useEffect(() => {
    const changeColor = () => {
      if( window.scrollY >= 90 ) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    }
    window.addEventListener('scroll', changeColor);
  }, [])

  return (
    <div style={{backgroundColor: `${color}`}} className={`fixed left-0 top-0 w-full z-10 ease-in duration-300 ${raleway.className}`}>
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href='/' >
          <h1 style={{color: `${textColor}`}} className="font-bold text-4xl">Captur</h1>
        </Link>
        <ul style={{color: `${textColor}`}} className="hidden sm:flex">
          <li className="p-4">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="p-4">
            <Link href={'/#gallery'}>Gallery</Link>
          </li>
          <li className="p-4">
            <Link href={'/work'}>Work</Link>
          </li>
          <li className="p-4">
            <Link href={'/contact'}>Contact</Link>
          </li>
        </ul>

        <div onClick={handleNav} className="block sm:hidden z-10">
          { nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}} /> : <AiOutlineMenu size={20} style={{color: `${textColor}`}} /> }
        </div>
        <div className={ nav ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center w-full h-screen bg-black text-center ease-in duration-300" : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex items-center justify-center w-full h-screen bg-black text-center ease-in duration-300" }>
          <ul>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href={'/'}>Home</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href={'/#gallery'}>Gallery</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href={'/#work'}>Work</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href={'/#contact'}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
