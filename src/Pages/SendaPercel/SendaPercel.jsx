import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendaPercel = () => {
  const servicesCenter = useLoaderData();

  const {
    register,
    formState: { errors },
    handleSubmit,
    // reset,
    watch,
    control,
  } = useForm();

  const type = watch("type"); // 👀 live radio value

  const regionsDuplicate = servicesCenter.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });


  const districtsByRegion = (regions) => {
    const regionDistricts = servicesCenter.filter((c) => c.region === regions);
    const districta = regionDistricts.map((d) => d.district);
    return districta;
  };

  const onSubmit = (data) => {
    console.log(data);


    const isDocument = data.type === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.weight)




    if (data) {
      alert("Parcel send");
    }
    // reset();
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
              {...register("percel-name", { required: true })}
            />
            {errors["percel-name"] && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </fieldset>

          <fieldset className="fieldset w-full">
            <label className="label font-bold">Parcel Weight (KG)</label>
            <input
              type="number"
              placeholder="Weight (kg)"
              disabled={type !== "non-document"} // 🔥 only active for non-document
              {...register("weight")}
              className="input w-full outline-none border-gray-200"
            />
            {errors["weight"] && (
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
                  Sender Email
                </label>
                <input
                  type="email"
                  className="input w-full outline-none border-gray-200"
                  placeholder="Sender Email"
                  {...register("senderEmail", { required: true })}
                />
                {errors["senderEmail"] && (
                  <span className="text-red-500 text-sm">Required</span>
                )}
              </fieldset>
            </div>

            <div className="sm:grid grid-cols-2 w-full mt-2 gap-4">
              <fieldset className="fieldset w-full ">
                <legend className="fieldset-legend">Sender Regions</legend>
                <select
                  {...register("senderRegion")}
                  defaultValue="Pick a region"
                  className="select  w-full outline-none border-gray-200"
                >
                  <option disabled={true}>Pick a region</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
              {/* sender districts */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Districts</legend>
                <select
                  {...register("senderDistrict")}
                  defaultValue="Pick a district"
                  className="select  w-full outline-none border-gray-200"
                >
                  <option disabled={true}>Pick a district</option>
                  {districtsByRegion(senderRegion).map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
            </div>

            <fieldset className="fieldset  w-full">
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
                  Receiver Email
                </label>
                <input
                  type="email"
                  className="input w-full outline-none border-gray-200"
                  placeholder="Receiver Email"
                  {...register("receiverEmail", { required: true })}
                />
                {errors["receiverEmail"] && (
                  <span className="text-red-500 text-sm">Required</span>
                )}
              </fieldset>
            </div>

            <div className="sm:grid grid-cols-2 w-full mt-2 gap-4">
              <fieldset className="fieldset  w-full">
                <legend className="fieldset-legend">Receiver Regions</legend>
                <select
                  {...register("receiverRegion")}
                  defaultValue="Pick a region"
                  className="select  w-full outline-none border-gray-200"
                >
                  <option disabled={true}>Pick a region</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
              {/* receiver district */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver District</legend>
                <select
                  {...register("receiverDistrict")}
                  defaultValue="Pick a district"
                  className="select w-full outline-none border-gray-200"
                >
                  <option disabled={true}>Pick a district</option>
                  {districtsByRegion(receiverRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </fieldset>
            </div>

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
