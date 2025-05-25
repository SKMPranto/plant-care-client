import React from "react";
import Title from "../Components/Title";

const AddPlants = () => {
  const handleSubmit = (e)=>{
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;

  }
  Title("Add Plants")
  return (
    <div className="p-10 lg:w-[70%] mx-auto">
      <h1 className="text-3xl md:text-5xl lg:text-7xl text-center permanent-marker-regular">
        Add Plants
      </h1>
      <p className="text-center py-5 md:text-xl lg:text-2xl">
        You can add plants here and monitor them
      </p>
      <form onSubmit={handleSubmit}>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* User Name Input Field */}
          <fieldset>
            <legend className="fieldset-legend">Username</legend>
            <label className="input validator w-full">
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
                required
                placeholder="Username"
                pattern="[A-Za-z][A-Za-z0-9\- ]*"
                minLength="3"
                maxLength="30"
                title="Only letters, numbers or dash"
              />
            </label>
            <p className="validator-hint hidden">
              Must be 3 to 30 characters
              <br />
              containing only letters, numbers or dash
            </p>
          </fieldset>
          {/* Email Input Field */}
          <fieldset>
            <legend className="fieldset-legend">Email</legend>
            <label className="input validator w-full">
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
                placeholder="mail@site.com"
                required
              />
            </label>
            <p className="validator-hint hidden">Enter valid email address</p>
          </fieldset>
          {/* Plant name Input field */}
          <fieldset>
            <legend className="fieldset-legend">Enter Plant Name</legend>
            <label className="input validator w-full">
              <input
                type="text"
                name="plantName"
                placeholder="Plant Name"
                required
              />
            </label>
            <p className="validator-hint hidden">Please Enter Plant Name</p>
          </fieldset>
          {/* Category input field */}
          <fieldset>
            <legend className="fieldset-legend">Category</legend>
            <label className="input validator w-full">
              <input
                type="text"
                name="category"
                placeholder="Please select Category"
                list="Category"
                required
              />
              <datalist id="Category">
                <option value="Chrome"></option>
                <option value="Firefox"></option>
                <option value="Safari"></option>
                <option value="Opera"></option>
                <option value="Edge"></option>
              </datalist>
            </label>
            <p className="validator-hint hidden">Please Select a Category</p>
          </fieldset>
          {/* Care level input field */}
          <fieldset>
            <legend className="fieldset-legend">Care Level</legend>
            <label className="input validator w-full">
              <input
                type="text"
                name="careLevel"
                placeholder="Please select Care Level"
                list="care-level"
                required
              />
              <datalist id="care-level">
                <option value="easy"></option>
                <option value="moderate"></option>
                <option value="difficult"></option>
              </datalist>
            </label>
            <p className="validator-hint hidden">Please Select Care Level</p>
          </fieldset>
          {/* Watering Frequency input field */}
          <fieldset>
            <legend className="fieldset-legend">Watering Frequency</legend>
            <label
              htmlFor="wateringFrequencyInput"
              className="input validator w-full"
            >
              <input
                type="text"
                id="wateringFrequencyInput"
                name="wateringFrequency"
                placeholder="Please select Watering Frequency"
                list="wateringFrequencyOptions"
                required
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
            <p className="validator-hint hidden">
              Please select a watering frequency
            </p>
          </fieldset>
          {/* Last watered date input filed */}
          <fieldset>
            <legend className="fieldset-legend">Last Watered Date</legend>
            <label className="input validator w-full">
              <input
                type="date"
                name="lastWateredDate"
                required
              />
            </label>
            <p className="validator-hint hidden">
              Please Select Last Watered Date
            </p>
          </fieldset>
          {/* Next Watering Date input filed */}
          <fieldset>
            <legend className="fieldset-legend">Next Watering Date</legend>
            <label className="input validator w-full">
              <input
                type="date"
                name="nextWateringDate"
                required
              />
            </label>
            <p className="validator-hint hidden">
              Please Select Next Watering Date
            </p>
          </fieldset>
          {/* Health Status input filed */}
          <fieldset>
            <legend className="fieldset-legend">Health Status</legend>
            <label className="input validator w-full">
              <input
                type="text"
                name="healthStatus"
                placeholder="Please select Health Status"
                list="healthStatus"
                required
              />
              <datalist id="healthStatus">
                <option value="healthy">Healthy</option>
                <option value="newGrowth">Healthy with New Growth</option>
                <option value="wilting">Wilting</option>
                <option value="yellowLeaves">Yellowing Leaves</option>
                <option value="dryLeaves">Dry or Crispy Leaves</option>
                <option value="pestInfected">Pest Infected</option>
                <option value="fungalInfection">Fungal Infection</option>
                <option value="rootRot">Root Rot Suspected</option>
                <option value="needsRepotting">Needs Repotting</option>
                <option value="recovering">Recovering</option>
                <option value="dead">Dead</option>
              </datalist>
            </label>
            <p className="validator-hint hidden">Please Select Health Status</p>
          </fieldset>
          {/* Image Url input filed */}
          <fieldset>
            <legend className="fieldset-legend">Image URL</legend>
            <label className="input validator w-full">
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
                required
                placeholder="https://"
                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                title="Must be valid URL"
              />
            </label>
            <p className="validator-hint">Must be valid URL</p>
          </fieldset>
        </div>

        {/* Description box input filed */}
        <fieldset>
          <legend className="fieldset-legend">Description</legend>
          <label className="validator w-full">
            <textarea
              name="description"
              placeholder="Description about your plant"
              className="textarea textarea-info w-full"
              required
            ></textarea>
          </label>
          <p className="validator-hint hidden">
            Please give a description about your plant
          </p>
        </fieldset>

        {/* submit button */}
        <button
          type="submit"
          className="btn btn-block my-3 bg-green-200 border-green-500 text-black text-lg font-bold hover:bg-green-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPlants;
