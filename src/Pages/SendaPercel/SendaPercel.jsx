import React from "react";
import { useForm } from "react-hook-form";

const SendaPercel = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const onSubmit =(data)=>{
   console.log(data)
  }
  return (
    <div className="p-10 mt-4 mb-10 rounded-lg bg-white shadow">
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#03373D]">
        Add Parcel
      </h1>
      <hr className="mt-6 text-gray-300" />
      <h2 className="text-[#03373D] mt-5 text-2xl xl:text-3xl font-semibold">
        Enter your parcel details
      </h2>
      {/* form is start here */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* this is radio section */}
        <div className="flex gap-4 mt-6">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              value="document"
              {...register("type", { required: true })}
              className="radio-green"
            />
            Document
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              value="non-document"
              {...register("type", { required: true })}
              className="radio-green"
            />
            Non-Document
          </label>
          {errors.type && (
            <span className="text-red-500 text-sm">Required</span>
          )}
        </div>
        {/* parcel name & parcel weight */}
        <div className="sm:grid grid-cols-2 w-full mt-4 gap-4">
          <fieldset className="fieldset w-full">
            <label className="label font-bold">Parcel Name</label>
            <input
              type="text"
              className="input w-full outline-none border-gray-200"
              placeholder="Parcel Name"
              {...register("percel-name", { required: true })}
            />
          </fieldset>
          <fieldset className="fieldset w-full">
            <label className="label font-bold">Parcel Weight (KG)</label>
            <input
              type="text"
              className="input w-full outline-none border-gray-200"
              placeholder="Parcel Weight (KG)"
              {...register("percel-weight", { required: true })}
            />
          </fieldset>
        </div>
        {/* under line */}
        <hr className="mt-6 text-gray-300" />
        {/* deatils about parcel */}
        <div className="sm:grid lg:grid-cols-2 pt-4 gap-6">
          {/* Sender Details */}
          <div>
            <h1 className="text-xl text-[#03373D] font-semibold  sm:text-2xl">Sender Details</h1>
            {/* start */}
            <div className="sm:grid grid-cols-2 w-full mt-4 gap-4">
              <fieldset className="fieldset w-full">
                <label className="label font-bold">Sender Name</label>
                <input
                  type="text"
                  className="input w-full outline-none border-gray-200"
                  placeholder="Sender Name"
                  {...register("sender-name", { required: true })}
                />
              </fieldset>
              <fieldset className="fieldset w-full">
                <label className="label font-bold">
                  Sender Pickup Wire house
                </label>
                <input
                  type="text"
                  className="input w-full outline-none border-gray-200"
                  placeholder="Select Wire house"
                  {...register("sender-wireHouse", { required: true })}
                />
              </fieldset>
            </div>
            {/* end */}
            {/* start */}
            <div className="sm:grid grid-cols-2 w-full mt-4 gap-4">
              <fieldset className="fieldset w-full">
                <label className="label font-bold">Address</label>
                <input
                  type="text"
                  className="input w-full outline-none border-gray-200"
                  placeholder="Address"
                  {...register("address", { required: true })}
                />
              </fieldset>
              <fieldset className="fieldset w-full">
                <label className="label font-bold">Sender Contact No</label>
                <input
                  type="text"
                  className="input w-full outline-none border-gray-200"
                  placeholder="Sender Contact Number"
                  {...register("contact-number", { required: true })}
                />
              </fieldset>
            </div>
            {/* end */}
            <div>
              <fieldset className="fieldset w-full">
                <label className="label font-bold">Your Region</label>
                <input
                  type="text"
                  className="input w-full outline-none border-gray-200"
                  placeholder="Your Region"
                  {...register("sender-region", { required: true })}
                />
              </fieldset>
              <fieldset className="fieldset w-full">
                <label className="label font-bold">Pickup Instruction</label>
               <textarea className="textarea w-full outline-none border-gray-200" {...register("sender-instruction")} placeholder="Pickup Instruction"></textarea>
              </fieldset>
            </div>
          </div>
          {/* Receiver Details */}
          <div>
            <h1 className="text-xl text-[#03373D] font-semibold  sm:text-2xl">Receiver Details</h1>
            {/* start */}
            <div className="sm:grid grid-cols-2 w-full mt-4 gap-4">
              <fieldset className="fieldset w-full">
                <label className="label font-bold">Receiver Name</label>
                <input
                  type="text"
                  className="input w-full outline-none border-gray-200"
                  placeholder="Sender Name"
                  {...register("sender-name", { required: true })}
                />
              </fieldset>
              <fieldset className="fieldset w-full">
                <label className="label font-bold">
                  Receiver Delivery Wire house
                </label>
                <input
                  type="text"
                  className="input w-full outline-none border-gray-200"
                  placeholder="Select Wire house"
                  {...register("sender-wireHouse", { required: true })}
                />
              </fieldset>
            </div>
            {/* end */}
            {/* start */}
            <div className="sm:grid grid-cols-2 w-full mt-4 gap-4">
              <fieldset className="fieldset w-full">
                <label className="label font-bold">Receiver Address</label>
                <input
                  type="text"
                  className="input w-full outline-none border-gray-200"
                  placeholder="Address"
                  {...register("address", { required: true })}
                />
              </fieldset>
              <fieldset className="fieldset w-full">
                <label className="label font-bold">Receiver Contact No</label>
                <input
                  type="text"
                  className="input w-full outline-none border-gray-200"
                  placeholder="Sender Contact Number"
                  {...register("contact-number", { required: true })}
                />
              </fieldset>
            </div>
            {/* end */}
            <div>
              <fieldset className="fieldset w-full">
                <label className="label font-bold">Receiver  Region</label>
                <input
                  type="text"
                  className="input w-full outline-none border-gray-200"
                  placeholder="Your Region"
                  {...register("sender-region", { required: true })}
                />
              </fieldset>
              <fieldset className="fieldset w-full">
                <label className="label font-bold">Delivery Instruction</label>
               <textarea className="textarea w-full outline-none border-gray-200" {...register("sender-instruction")} placeholder="Pickup Instruction"></textarea>
              </fieldset>
            </div>
          </div>
        </div>
        <p className="py-4  text-[12px] font-semibold]">* PickUp Time 4pm-7pm Approx.</p>
        {/* button */}
        <button className="px-10 py-3 text-sm font-semibold rounded bg-[#CAEB66]" type="submit">Proceed to Confirm Booking</button>
      </form>
    </div>
  );
};

export default SendaPercel;
