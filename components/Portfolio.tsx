import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-bold text-2xl p-4">Travel Photo</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image
            src={"https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"}
            alt="/"
            width={677}
            height={451}
          />
        </div>
        <div className="flex items-center w-full h-full">
          <Image
            src={"https://images.unsplash.com/photo-1533029030467-904d7bbd602b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9uZyUyMGtvbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"}
            alt="/"
            width={215}
            height={217}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex items-center w-full h-full">
          <Image
            src={"https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWlhbWl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"}
            alt="/"
            width={215}
            height={217}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex items-center w-full h-full">
          <Image
            src={"https://images.unsplash.com/photo-1533029030467-904d7bbd602b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9uZyUyMGtvbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"}
            alt="/"
            width={215}
            height={217}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex items-center w-full h-full">
          <Image
            src={"https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWlhbWl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"}
            alt="/"
            width={215}
            height={217}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  )
}
