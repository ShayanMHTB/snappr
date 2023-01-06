import { AiFillHeart } from "react-icons/ai";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex items-center justify-center my-8 text-xs text-center">
      Built and designed with <AiFillHeart className="mx-1 text-red-500" /> in {currentYear}
    </div>
  );
}
