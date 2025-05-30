import React from "react";
import Title from "../Components/Title";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const EditMyPlants = () => {
  Title("Edit Your Plants");
  const {
    _id,
    userName,
    email,
    plantName,
    category,
    careLevel,
    wateringFrequency,
    lastWateredDate,
    nextWateringDate,
    healthStatus,
    url,
    description,
  } = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const editedPlantData = Object.fromEntries(formData.entries());

    // You can now use the editedPlantData object to send the updated plant data to your server
    fetch(`http://localhost:3000/plants/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(editedPlantData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Plant Edited Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "info",
            title: "No changes made to the plant",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });


  };
  return (
    <div className="p-10 lg:w-[70%] mx-auto">
      <h1 className="text-3xl md:text-5xl lg:text-7xl text-center permanent-marker-regular text-green-500">
        Edit Yours Plants
      </h1>
      <p className="text-center py-5 md:text-xl lg:text-2xl">
        You can edit your plants here and monitor them
      </p>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* User Name Input Field */}
          <fieldset>
            <legend className="fieldset-legend">Username</legend>
            <label className="input w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                type="text"
                name="userName"
                defaultValue={userName}
                placeholder="Username"
                pattern="[A-Za-z][A-Za-z0-9\- ]*"
                minLength="3"
                maxLength="30"
                title="Only letters, numbers or dash"
              />
            </label>
          </fieldset>
          {/* Email Input Field */}
          <fieldset>
            <legend className="fieldset-legend">Email</legend>
            <label className="input w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                name="email"
                defaultValue={email}
                placeholder="mail@site.com"
              />
            </label>
          </fieldset>
          {/* Plant name Input field */}
          <fieldset>
            <legend className="fieldset-legend">Enter Plant Name</legend>
            <label className="input w-full">
              <input
                type="text"
                name="plantName"
                defaultValue={plantName}
                placeholder="Plant Name"
              />
            </label>
          </fieldset>
          {/* Category input field */}
          <fieldset>
            <legend className="fieldset-legend">Category</legend>
            <label className="input w-full">
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Please select Category"
                list="Category"
              />
              <datalist id="Category">
                {/* Fruit & Shade Trees */}
                <option value="Lemon Tree"></option>
                <option value="Mango Tree"></option>
                <option value="Guava Tree"></option>
                <option value="Olive Tree"></option>
                <option value="Dwarf Apple"></option>

                {/* Flowering Plants */}
                <option value="Rose"></option>
                <option value="Hibiscus"></option>
                <option value="Marigold"></option>
                <option value="Lavender"></option>
                <option value="Sunflower"></option>

                {/* Herbs */}
                <option value="Basil"></option>
                <option value="Mint"></option>
                <option value="Thyme"></option>
                <option value="Coriander"></option>
                <option value="Rosemary"></option>

                {/* Decorative/Other Garden Plants */}
                <option value="Bougainvillea"></option>
                <option value="AloeVera"></option>
                <option value="Jasmine"></option>
                <option value="MoneyPlant"></option>
                <option value="SnakePlant"></option>
              </datalist>
            </label>
          </fieldset>
          {/* Care level input field */}
          <fieldset>
            <legend className="fieldset-legend">Care Level</legend>
            <label className="input w-full">
              <input
                type="text"
                name="careLevel"
                defaultValue={careLevel}
                placeholder="Please select Care Level"
                list="care-level"
              />
              <datalist id="care-level">
                <option value="Easy"></option>
                <option value="Moderate"></option>
                <option value="Difficult"></option>
              </datalist>
            </label>
          </fieldset>
          {/* Watering Frequency input field */}
          <fieldset>
            <legend className="fieldset-legend">Watering Frequency</legend>
            <label htmlFor="wateringFrequencyInput" className="input w-full">
              <input
                type="text"
                id="wateringFrequencyInput"
                name="wateringFrequency"
                defaultValue={wateringFrequency}
                placeholder="Please select Watering Frequency"
                list="wateringFrequencyOptions"
              />
            </label>
            <datalist id="wateringFrequencyOptions">
              <option value="Daily" />
              <option value="Every 2 Days" />
              <option value="Twice a Week" />
              <option value="Weekly" />
              <option value="Biweekly" />
              <option value="Monthly" />
              <option value="As Needed (Check Soil Moisture)" />
            </datalist>
          </fieldset>
          {/* Last watered date input filed */}
          <fieldset>
            <legend className="fieldset-legend">Last Watered Date</legend>
            <label className="input w-full">
              <input
                type="date"
                name="lastWateredDate"
                defaultValue={lastWateredDate}
              />
            </label>
          </fieldset>
          {/* Next Watering Date input filed */}
          <fieldset>
            <legend className="fieldset-legend">Next Watering Date</legend>
            <label className="input w-full">
              <input
                type="date"
                name="nextWateringDate"
                defaultValue={nextWateringDate}
              />
            </label>
          </fieldset>
          {/* Health Status input filed */}
          <fieldset>
            <legend className="fieldset-legend">Health Status</legend>
            <label className="input w-full">
              <input
                type="text"
                name="healthStatus"
                defaultValue={healthStatus}
                placeholder="Please select Health Status"
                list="healthStatus"
              />
              <datalist id="healthStatus">
                <option value="Healthy"></option>
                <option value="Healthy with New Growth"></option>
                <option value="Wilting"></option>
                <option value="Yellow Leaves"></option>
                <option value="Dry or Crispy Leaves"></option>
                <option value="Pest Infected"></option>
                <option value="Fungal Infection"></option>
                <option value="rooRoot Rot SuspectedtRot"></option>
                <option value="Needs Repotting"></option>
                <option value="Recovering"></option>
                <option value="Dead">Dead</option>
              </datalist>
            </label>
          </fieldset>
          {/* Image Url input filed */}
          <fieldset>
            <legend className="fieldset-legend">Image URL</legend>
            <label className="input w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </g>
              </svg>
              <input
                type="url"
                name="url"
                defaultValue={url}
                placeholder="https://"
                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                title="Must be valid URL"
              />
            </label>
          </fieldset>
        </div>

        {/* Description box input filed */}
        <fieldset>
          <legend className="fieldset-legend">Description</legend>
          <label className=" w-full">
            <textarea
              name="description"
              defaultValue={description}
              placeholder="Description about your plant"
              className="textarea textarea-info w-full"
            ></textarea>
          </label>
        </fieldset>

        {/* submit button */}
        <button
          type="submit"
          className="btn btn-block my-3 btn-soft btn-success text-lg font-bold "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditMyPlants;
