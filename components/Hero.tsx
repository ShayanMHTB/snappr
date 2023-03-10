import { Raleway } from "@next/font/google";

const raleway = Raleway({});

export default function Hero(props: any) {
  return (
    <div className={`flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img ${raleway.className}`}>
      {/* Hero image overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem] lg:ml-[-20rem]">
        <h2 className="text-5xl font-bold">{ props.heading }</h2>
        <p className="py-5 text-xl">{ props.message }</p>
        <button className="px-8 py-2 border rounded-lg hover:bg-white/20">Book</button>
      </div>
    </div>
  );
}
