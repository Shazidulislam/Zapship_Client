import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SendaPercel = () => {
  const [type, setType] = useState("");
  console.log(type)
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setType(""); // reset radio selection
  };

  return (
    <div className="p-10 mt-4 mb-10 rounded-lg bg-white shadow">
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#03373D]">
        Add Parcel
      </h1>
      <hr className="mt-6 text-gray-300" />
      <h2 className="text-[#03373D] mt-5 text-2xl xl:text-3xl font-semibold">
        Enter your parcel details
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Radio Section */}
        <div className="flex gap-4 mt-6">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              value="document"
              onChange={(e) => setType(e.target.value)}
              {...register("type", { required: true })}
              className="radio-green"
            />
            Document
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              value="non-document"
              onChange={(e) => setType(e.target.value)}
              {...register("type", { required: true })}
              className="radio-green"
            />
            Non-Document
          </label>
          {errors.type && (
            <span className="text-red-500 text-sm">Required</span>
          )}
        </div>

        {/* Parcel Name & Weight */}
        <div className="sm:grid grid-cols-2 w-full mt-4 gap-4">
          <fieldset className="fieldset w-full">
            <label className="label font-bold">Parcel Name</label>
            <input
              type="text"
              className="input w-full outline-none border-gray-200"
              placeholder="Parcel Name"
              {...register("percel-name", { required: true })}
            />
            {errors["percel-name"] && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </fieldset>

          <fieldset className="fieldset w-full">
            <label className="label font-bold">Parcel Weight (KG)</label>
            <input
              type="text"
              className="input w-full outline-none border-gray-200"
              disabled={type === "document"} // disable when Document
              placeholder="Parcel Weight (KG)"
              {...register("percel-weight", {
                required: type !== "document", // required only if not document
              })}
            />
            {errors["percel-weight"] && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </fieldset>
        </div>

        <hr className="mt-6 text-gray-300" />

        {/* Sender & Receiver Details */}
        <div className="sm:grid lg:grid-cols-2 pt-4 gap-6">
          {/* Sender */}
          <div>
            <h1 className="text-xl text-[#03373D] font-semibold sm:text-2xl">
              Sender Details
            </h1>
            <div className="sm:grid grid-cols-2 w-full mt-4 gap-4">
              <fieldset className="fieldset w-full">
                <label className="label font-bold">Sender Name</label>
                <input
                  type="text"
                  className="input w-full outline-none border-gray-200"
                  placeholder="Sender Name"
                  {...register("sender-name", { required: true })}
                />
                {errors["sender-name"] && (
                  <span className="text-red-500 text-sm">Required</span>
                )}
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
                {errors["sender-wireHouse"] && (
                  <span className="text-red-500 text-sm">Required</span>
                )}
              </fieldset>
            </div>

            <div className="sm:grid grid-cols-2 w-full mt-4 gap-4">
              <fieldset className="fieldset w-full">
                <label className="label font-bold">Address</label>
                <input
                  type="text"
                  className="input w-full outline-none border-gray-200"
                  placeholder="Address"
                  {...register("address", { required: true })}
                />
                {errors.address && (
                  <span className="text-red-500 text-sm">Required</span>
                )}
              </fieldset>
              <fieldset className="fieldset w-full">
                <label className="label font-bold">Sender Contact No</label>
                <input
                  type="text"
                  className="input w-full outline-none border-gray-200"
                  placeholder="Sender Contact Number"
                  {...register("contact-number", { required: true })}
                />
                {errors["contact-number"] && (
                  <span className="text-red-500 text-sm">Required</span>
                )}
              </fieldset>
            </div>

            <fieldset className="fieldset w-full mt-4">
              <label className="label font-bold">Your Region</label>
              <input
                type="text"
                className="input w-full outline-none border-gray-200"
                placeholder="Your Region"
                {...register("sender-region", { required: true })}
              />
              {errors["sender-region"] && (
                <span className="text-red-500 text-sm">Required</span>
              )}
            </fieldset>

            <fieldset className="fieldset w-full mt-4">
              <label className="label font-bold">Pickup Instruction</label>
              <textarea
                className="textarea w-full outline-none border-gray-200"
                placeholder="Pickup Instruction"
                {...register("sender-instruction")}
              ></textarea>
            </fieldset>
          </div>

          {/* Receiver */}
          <div>
            <h1 className="text-xl text-[#03373D] font-semibold sm:text-2xl">
              Receiver Details
            </h1>

            <div className="sm:grid grid-cols-2 w-full mt-4 gap-4">
              <fieldset className="fieldset w-full">
                <label className="label font-bold">Receiver Name</label>
                <input
                  type="text"
                  className="input w-full outline-none border-gray-200"
                  placeholder="Receiver Name"
                  {...register("receiver-name", { required: true })}
                />
                {errors["receiver-name"] && (
                  <span className="text-red-500 text-sm">Required</span>
                )}
              </fieldset>
              <fieldset className="fieldset w-full">
                <label className="label font-bold">
                  Receiver Delivery Wire house
                </label>
                <input
                  type="text"
                  className="input w-full outline-none border-gray-200"
                  placeholder="Select Wire house"
                  {...register("receiver-wireHouse", { required: true })}
                />
                {errors["receiver-wireHouse"] && (
                  <span className="text-red-500 text-sm">Required</span>
                )}
              </fieldset>
            </div>

            <div className="sm:grid grid-cols-2 w-full mt-4 gap-4">
              <fieldset className="fieldset w-full">
                <label className="label font-bold">Receiver Address</label>
                <input
                  type="text"
                  className="input w-full outline-none border-gray-200"
                  placeholder="Address"
                  {...register("receiver-address", { required: true })}
                />
                {errors["receiver-address"] && (
                  <span className="text-red-500 text-sm">Required</span>
                )}
              </fieldset>
              <fieldset className="fieldset w-full">
                <label className="label font-bold">Receiver Contact No</label>
                <input
                  type="text"
                  className="input w-full outline-none border-gray-200"
                  placeholder="Receiver Contact Number"
                  {...register("receiver-number", { required: true })}
                />
                {errors["receiver-number"] && (
                  <span className="text-red-500 text-sm">Required</span>
                )}
              </fieldset>
            </div>

            <fieldset className="fieldset w-full mt-4">
              <label className="label font-bold">Receiver Region</label>
              <input
                type="text"
                className="input w-full outline-none border-gray-200"
                placeholder="Your Region"
                {...register("receiver-region", { required: true })}
              />
              {errors["receiver-region"] && (
                <span className="text-red-500 text-sm">Required</span>
              )}
            </fieldset>

            <fieldset className="fieldset w-full mt-4">
              <label className="label font-bold">Delivery Instruction</label>
              <textarea
                className="textarea w-full outline-none border-gray-200"
                placeholder="Delivery Instruction"
                {...register("receiver-instruction")}
              ></textarea>
            </fieldset>
          </div>
        </div>

        <p className="py-4 text-[12px] font-semibold">
          * PickUp Time 4pm-7pm Approx.
        </p>

        <button
          type="submit"
          className="px-10 cursor-pointer py-3 text-sm font-semibold rounded bg-[#CAEB66]"
        >
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default SendaPercel;
