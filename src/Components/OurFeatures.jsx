import React from "react";

const OurFeatures = () => {
  return (
    <>
      <h1 className="text-3xl md:text-5xl lg:text-7xl text-center font-bold my-5 permanent-marker-regular text-green-500">
        Plant Care Features
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center my-10 md:my-20">
        {/* Card no 1 */}
        <div className="card w-96 bg-blue-50 shadow-xl hover:border-2 border-2 hover:border-green-500">
          <figure className="px-10 pt-10 h-40">
            <img
              src="https://i.ibb.co/qFJCYhSw/identification.png"
              alt="Plant 1"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-2xl text-green-500 font-bold uppercase">
              Plant Identification
            </h2>
            <hr className="w-50 border-gray-400 mx-auto" />
            <p className="text-center text-black">
              Looking for the free plant identifier app? With Plantora you have
              the best plant identification app in your pocket. Simply take a
              picture of the plant using the app and you’ll get all the
              information regarding the plant such as its scientific and common
              name, origin, care needs, and more.
            </p>
          </div>
        </div>
        {/* Card no 2 */}
        <div className="card w-96 bg-amber-50 shadow-xl hover:border-2 border-2 hover:border-red-500">
          <figure className="px-10 pt-10 h-40">
            <img
              src="https://i.ibb.co/ynZCQ7mB/symptom-checker.png"
              alt="Plant 2"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-2xl text-green-500 font-bold uppercase">
              Symptom Checker
            </h2>
            <hr className="w-50 border-gray-400 mx-auto" />
            <p className="text-center text-black">
              Is your plant suffering from a disease? Check the reason on the
              symptom checker feature of Plantora. With this unique feature, you
              can easily identify possible causes for the decline of your
              plant’s health and get reliable solutions.
            </p>
          </div>
        </div>
        {/* Card no 3 */}
        <div className="card w-96 bg-red-100 shadow-xl hover:border-2 border-2 hover:border-orange-500">
          <figure className="px-10 pt-10 h-40">
            <img src="https://i.ibb.co/Gw4XTgD/plant.png" alt="Plant 3" />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-2xl text-green-500 font-bold uppercase">
              Plant Care Guides
            </h2>
            <hr className="w-50 border-gray-400 mx-auto" />
            <p className="text-center text-black">
              Get the best and most reliable plant care tips with our
              well-researched guides on various plants and basic plant
              requirements such as sunlight, soil quality, watering, and more.
            </p>
          </div>
        </div>
        {/* Card no 4 */}
        <div className="card w-96 bg-blue-50 shadow-xl hover:border-2 border-2 hover:border-purple-900">
          <figure className="px-10 pt-10 h-40">
            <img src="https://i.ibb.co/q3HLmp6J/calculators.png" alt="Plant 4" />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-2xl text-green-500 font-bold uppercase">
              Calculators
            </h2>
            <hr className="w-50 border-gray-400 mx-auto" />
            <p className="text-center text-black">
              Calculate the exact needs of your plants with various calculators provided within the Plantora App. You can calculate the pot size, water, sunlight, fertilizer, and more plant needs easily. And, determine the exact requirements of different plants.
            </p>
          </div>
        </div>
        {/* Card no 5 */}
        <div className="card w-96 bg-yellow-100 shadow-xl hover:border-2 border-2 hover:border-orange-500">
          <figure className="px-10 pt-10 h-40">
            <img src="https://i.ibb.co/B5sqxXv5/reminder.png" alt="Plant 5" />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-2xl text-green-500 font-bold uppercase">
              Plant Reminders
            </h2>
            <hr className="w-50 border-gray-400 mx-auto" />
            <p className="text-center text-black">
              With our best plant care app, you can add your plants to the “My Plants” section in the app and get reminded of tasks such as watering, fertilizing, repotting, and more. You can also set up personalized reminders for your plants according to their needs.
            </p>
          </div>
        </div>
        {/* Card no 6 */}
        <div className="card w-96 bg-purple-100 shadow-xl hover:border-2 border-2 hover:border-purple-500">
          <figure className="px-10 pt-10 h-40">
            <img src="https://i.ibb.co/39LvfWs9/advisor.png" alt="Plant 6" />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-2xl text-green-500 font-bold uppercase">
              Expert Advice
            </h2>
            <hr className="w-50 border-gray-400 mx-auto" />
            <p className="text-center text-black">
             Even if all the features of Plantora fail to provide you with the answer to your query, then you can also get in touch with a plant expert through our App. Our app is designed to assist you in any way possible to help your plants stay healthy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFeatures;
