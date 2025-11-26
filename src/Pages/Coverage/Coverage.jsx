// Coverage.jsx
import MapSection from "./MapSection";

export default function Coverage() {
  return (
    <div className="w-full  gap-6  py-10">
      
      <h1 className="text-3xl  text-[#03373D] sm:text-5xl font-bold ">
        We are available in <span className="">64 districts</span>
      </h1>

      <div className="flex justify-start items-center">
        <input
        type="text"
        placeholder="Search a district..."
        className="bg-white shadow my-3 py-2 px-6 outline-none  rounded-bl-full rounded-tl-full w-xl"
      />
      <button className="px-6 rounded-br-full shadow rounded-tr-full py-2 bg-[#CAEB66] font-medium">Search</button>
      </div>

      <MapSection />
    </div>
  );
}
