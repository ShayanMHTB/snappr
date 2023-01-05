import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-bold text-2xl p-4">Travel Photo</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image
            src={"https://unsplash.com/photos/M6XC789HLe8"}
            alt="/"
            width={677}
            height={451}
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={"https://unsplash.com/photos/M6XC789HLe8"}
            alt="/"
            width={215}
            height={217}
            layout="responsive"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  )
}
