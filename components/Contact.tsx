export default function Contact () {
  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen/2">
      <h1 className="text-2xl font-bold text-center p-4">Let&apo;s Work Together</h1>
      <form className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input className="border shadow-lg p-3 rounded-lg" type="text" placeholder="Name" />
          <input className="border shadow-lg p-3 rounded-lg" type="email" placeholder="Email" />
        </div>
        <input className="border shadow-lg p-3 w-full my-2 rounded-lg" type="text" placeholder="Subject" />
        <textarea className="border shadow-lg p-3 w-full rounded-lg" cols={30} rows={10} placeholder="message"></textarea>
        <button className="border shadow-lg p-3 w-full mt-2 rounded-lg bg-blue-500/80 text-white">Submit</button>
      </form>
    </div>
  );
}
