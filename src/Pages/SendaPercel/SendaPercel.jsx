import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const SendaPercel = () => {
  const servicesCenter = useLoaderData();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const type = watch("type");
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const regionsDuplicate = servicesCenter.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const districtsByRegion = (region) => {
    if (!region) return [];
    return servicesCenter
      .filter((c) => c.region === region)
      .map((c) => c.district);
  };

  const onSubmit = (data) => {
    const isDocument = data.type === "document";
    const weight = parseFloat(data.weight) || 0;
    const isWithinCity = data.senderDistrict === data.receiverDistrict;

    let price = 0;

    if (isDocument) {
      price = isWithinCity ? 60 : 80;
    } else {
      // Non-Document pricing
      if (weight <= 3) {
        price = isWithinCity ? 110 : 150;
      } else {
        const extraWeight = weight - 3;
        const extraCost = extraWeight * 40;
        price = isWithinCity ? 110 + extraCost : 150 + extraCost + 40;
      }
    }

    Swal.fire({
      title: "Confirm Parcel Booking",
      html: `<p>Total Price: ৳${price}</p>`,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Yes, Send",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      position: "center",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log({ ...data, price });
        Swal.fire("Sent!", "Your parcel has been booked.", "success");
      } else {
        Swal.fire("Cancelled", "Your parcel was not sent.", "error");
      }
    });
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
        {/* Parcel Type */}
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

        {/* Parcel Name & Weight */}
        <div className="sm:grid grid-cols-2 w-full mt-4 gap-4">
          <fieldset className="fieldset w-full">
            <label className="label font-bold">Parcel Name</label>
            <input
              type="text"
              className="input w-full outline-none border-gray-200"
              placeholder="Parcel Name"
              {...register("parcelName", { required: true })}
            />
            {errors.parcelName && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </fieldset>

          <fieldset className="fieldset w-full">
            <label className="label font-bold">Parcel Weight (KG)</label>
            <input
              type="number"
              placeholder="Weight (kg)"
              disabled={type !== "non-document"}
              {...register("weight", { required: type === "non-document" })}
              className="input w-full outline-none border-gray-200"
            />
            {errors.weight && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </fieldset>
        </div>

        <hr className="mt-6 text-gray-300" />

        {/* Sender & Receiver */}
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
                  placeholder="Sender Name"
                  className="input w-full outline-none border-gray-200"
                  {...register("senderName", { required: true })}
                />
              </fieldset>

              <fieldset className="fieldset w-full">
                <label className="label font-bold">Sender Email</label>
                <input
                  type="email"
                  placeholder="Sender Email"
                  className="input w-full outline-none border-gray-200"
                  {...register("senderEmail", { required: true })}
                />
              </fieldset>
            </div>

            <div className="sm:grid grid-cols-2 w-full mt-2 gap-4">
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Sender Region</legend>
                <select
                  {...register("senderRegion")}
                  defaultValue=""
                  className="select w-full outline-none border-gray-200"
                >
                  <option value="" disabled>
                    Pick a region
                  </option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Sender District</legend>
                <select
                  {...register("senderDistrict")}
                  defaultValue=""
                  className="select w-full outline-none border-gray-200"
                >
                  <option value="" disabled>
                    Pick a district
                  </option>
                  {districtsByRegion(senderRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </fieldset>
            </div>

            <fieldset className="fieldset w-full mt-4">
              <label className="label font-bold">Sender Contact No</label>
              <input
                type="text"
                placeholder="Sender Contact Number"
                className="input w-full outline-none border-gray-200"
                {...register("contact-number", { required: true })}
              />
              {errors["contact-number"] && (
                <span className="text-red-500 text-sm">Required</span>
              )}
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
                  placeholder="Receiver Name"
                  className="input w-full outline-none border-gray-200"
                  {...register("receiverName", { required: true })}
                />
              </fieldset>

              <fieldset className="fieldset w-full">
                <label className="label font-bold">Receiver Email</label>
                <input
                  type="email"
                  placeholder="Receiver Email"
                  className="input w-full outline-none border-gray-200"
                  {...register("receiverEmail", { required: true })}
                />
              </fieldset>
            </div>

            <div className="sm:grid grid-cols-2 w-full mt-2 gap-4">
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Receiver Region</legend>
                <select
                  {...register("receiverRegion")}
                  defaultValue=""
                  className="select w-full outline-none border-gray-200"
                >
                  <option value="" disabled>
                    Pick a region
                  </option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Receiver District</legend>
                <select
                  {...register("receiverDistrict")}
                  defaultValue=""
                  className="select w-full outline-none border-gray-200"
                >
                  <option value="" disabled>
                    Pick a district
                  </option>
                  {districtsByRegion(receiverRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </fieldset>
            </div>

            <fieldset className="fieldset w-full mt-4">
              <label className="label font-bold">Receiver Contact No</label>
              <input
                type="text"
                placeholder="Receiver Contact Number"
                className="input w-full outline-none border-gray-200"
                {...register("receiver-number", { required: true })}
              />
              {errors["receiver-number"] && (
                <span className="text-red-500 text-sm">Required</span>
              )}
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
