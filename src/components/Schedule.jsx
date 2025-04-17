import React from "react";
import Chips from "../assets/img/choco_chips_ice_cream.png";
import Oreo from "../assets/img/oreo_ice_cream.png";

const Schedule = () => {
  const schedule = [
    { day: "Monday", hours: "8am to 10pm" },
    { day: "Tuesday", hours: "8am to 10pm" },
    { day: "Wednesday", hours: "8am to 10pm" },
    { day: "Thursday", hours: "8am to 10pm" },
    { day: "Friday", hours: "8am to 10pm" },
    { day: "Saturday", hours: "8am to 10pm" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <>
      <div className="p-1 m-9">
        <div className="justify-center items-center text-center p-8 m-8">
          <h1 className="font-bold font-GochiHand text-5xl">Schedule</h1>
        </div>
        <div className="flex justify-between items-center max-w-7xl mx-auto p-8">
          <div className="relative w-auto">
            <div className="absolute top-0 -left-4 w-90 h-90 bg-white rounded-2xl shadow-lg transform -rotate-19">
              <img
                src={Chips}
                alt="Ice cream"
                className="w-full h-full object-cover rounded-2xl border-2"
              />
            </div>
            <div className="top-0 left-4 w-90 h-90 bg-white rounded-2xl shadow-lg">
              <img
                src={Oreo}
                alt="Ice cream"
                className="w-full h-full object-cover rounded-2xl border-2"
              />
            </div>
          </div>
          <div className="flex-1 ml-16">
            <h2 className="font-GochiHand text-4xl mb-8">
              We are available on
            </h2>
            <div className="space-y-4">
              {schedule.map((item) => (
                <div key={item.day} className="flex items-center">
                  <span className="font-InstrumentSans text-xl font-medium w-32">
                    {item.day}
                  </span>
                  <div className="flex-1 mx-4 border-b-2 border-dashed border-black"></div>
                  <span className="font-InstrumentSans text-xl">
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
