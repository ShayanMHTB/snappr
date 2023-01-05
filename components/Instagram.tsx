import InstagramImg from "./InstagramImg";

import IgImg1 from "../assets/images/annie-spratt-ogDort6vKuE-unsplash.jpg";

export default function Instgram () {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Follow me on Instagram</p>
      <p className="pb-4">@Captur</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <InstagramImg socialImg={IgImg1} />
        <InstagramImg socialImg={IgImg1} />
        <InstagramImg socialImg={IgImg1} />
        <InstagramImg socialImg={IgImg1} />
        <InstagramImg socialImg={IgImg1} />
        <InstagramImg socialImg={IgImg1} />
      </div>
    </div>
  )
}
