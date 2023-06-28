import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MovingIcon from "@mui/icons-material/Moving";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import LightModeIcon from "@mui/icons-material/LightMode";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import WeatherImage from "./images/Weather-rafiki.png";
import SunImage from "./images/Sun rise-cuate.png";

import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import WbCloudyOutlinedIcon from "@mui/icons-material/WbCloudyOutlined";

import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";

import React from "react";
import WaveSVG from "./waveSvg";

const getRandomTemperature = () => {
  return Math.floor(Math.random() * 4) + 27; // Random number between 27 and 30
};

const getRandomPercentage = () => {
  return Math.floor(Math.random() * 53) + 23; // Random number between 23 and 75
};

const generateTemperature = () => {
  const temperatures = [];
  for (let i = 0; i < 8; i++) {
    temperatures.push(getRandomTemperature());
  }
  return temperatures;
};

const generateIcons = () => {
  const icons = [WbSunnyOutlinedIcon, WbCloudyOutlinedIcon]; // Add more icon options if needed
  const generatedIcons = [];
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * icons.length);
    generatedIcons.push(icons[randomIndex]);
  }
  return generatedIcons;
};

const temperatureValues = generateTemperature();
const icons = generateIcons();
const percentageValues = Array.from({ length: 8 }, () => getRandomPercentage());

function App() {
  return (
    <div class="flex ">
      <div class="relative  lg:w-3/12 w-full h-scren py-9 px-10 h-screen text-white ">
        {/* <!-- Content for the left div --> */}
        <div className="flex justify-between align-middle items-center text-white ">
          <div className="">
            <AddBoxIcon className="" fontSize="large" />
          </div>
          <div className="flex  right-4 space-x-1 items-center">
            <p className="text-sm">°c</p>
            <input
              class="mr-2 mt-[0.3rem] h-3.5 w-10 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <p className="text-xs">°F</p>
          </div>
        </div>
        <div className="flex items-center  justify-between font-light text-md text-white mt-10">
          <p className="flex items-center align-center space-x-2">
            <div>
              <MovingIcon />
            </div>
            <div>New York, USA</div>
          </p>
          <p className="flex items-center text-sm space-x-2">
            <div>
              <WbTwilightIcon fontSize="small" />
            </div>
            <div>07:19</div>
          </p>
        </div>
        <div className="flex items-center  justify-between  font-extralight  text-gray-100 mt-2">
          <p className="flex items-center text-sm align-center space-x-2">
            <div>Today 28 Sept</div>
          </p>
          <p className="flex items-center text-sm space-x-2">
            <div>
              <WbTwilightIcon fontSize="small" />
            </div>
            <div>19:32</div>
          </p>
        </div>
        <div className="flex items-center  justify-between  font-bold   text-gray-100 mt-20">
          <div>
            <ArrowBackIosNewOutlinedIcon
              className="text-blue-300 "
              fontSize="small"
            />
          </div>
          <div className="text-8xl">27°</div>
          <div>
            <ArrowForwardIosOutlinedIcon
              className="text-blue-300 "
              fontSize="small"
            />
          </div>
        </div>
        <div className="flex items-center mx-20 space-x-2">
          <div>
            <LightModeIcon />
          </div>
          <div>Sunny</div>
        </div>
        <div className="fixed lg:w-1/5 w-full lg:bottom-28 bottom-0 left-0 right-36">
          <img src={SunImage} sstyle={{"max-width": "26.33%"}} alt="" />
        </div>
        <div className="absfix hidden lg:block">
          <img src={WeatherImage} width="26.33%" alt="" />
        </div>
      </div>
      <div class="bg-blue-100 hidden lg:block md:block px-14 py-9 round w-10/12 shadow-lg ">
        <div className="flex justify-between">
          <div>
            <h1 className="font-extrabold text-lg"> Welcome back Isabella!</h1>
            <p className=" font-bold text-gray-700">
              Check out today's weather information
            </p>
          </div>
          <div>
            <div class="flex items-center space-x-3 justify-center">
              <MoreHorizIcon />
              <div class="w-10 h-10 rounded-xl overflow-hidden">
                <img
                  src="https://i.postimg.cc/pV979m21/image.png"
                  alt="Profile "
                  class="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 z-10">
          <div className="bg-white relative p-4 rounded-3xl">
            <div className="flex justify-between items-center">
              <div className="text-sm font-semibold text-gray-600">
                Upcoming Hours
              </div>
              <div className="flex space-x-7">
                <div className="relative">
                  <select
                    className="border text-xs text-gray-400 font-semibold bg-gray-200 rounded-md py-1 px-4 pr-8 appearance-none 
                  leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-300"
                    defaultValue="rain"
                  >
                    <option value="rain">Rain precipitation</option>
                    <option value="snow">Snow precipitation</option>
                    <option value="cloudy">Cloudy</option>
                    <option value="sunny">Sunny</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="h-5 w-4 stroke-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="none"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 8l4 4 4-4"
                      />
                    </svg>
                  </div>
                </div>
                <div className="relative">
                  <div
                    className="border text-xs text-black font-semibold bg-gray-200 rounded-md py-1 px-4 pr-8 appearance-none 
                  leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-300"
                    defaultValue="rain"
                  >
                    Next days
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="h-5 w-4 stroke-current transform rotate-90"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="none"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 10l4-4 4 4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4 p-6">
              <div className="flex-col text-center space-y-2 items-center">
                <div className=" items-center text-xs font-medium">Now</div>
                <div className="">
                  <WbSunnyOutlinedIcon fontSize="small" />
                </div>
                <div className="items-center text-md font-bold ml-1">27°</div>
                <div className="h-20 border-l border-l-black mx-4"></div>
                <div className=" text-xs font-semibold ml-1 text-gray-500">
                  23%
                </div>
              </div>

              {temperatureValues.map((temperature, index) => (
                <div
                  className="flex-col text-center space-y-2 items-center"
                  key={index}
                >
                  <div className="items-center text-xs font-medium">{`${
                    11 + index
                  }:00`}</div>
                  <div>
                    {icons[index] === WbSunnyOutlinedIcon ? (
                      <WbSunnyOutlinedIcon fontSize="small" />
                    ) : (
                      <WbCloudyOutlinedIcon fontSize="small" />
                    )}
                  </div>
                  <div className="items-center text-md font-bold">{`${temperature}°`}</div>

                  <div className="h-20 border-l border-l-black mx-3"></div>
                  <div className="text-xs font-semibold ml-1 text-gray-500">{`${percentageValues[index]}%`}</div>
                </div>
              ))}
            </div>
            {(percentageValues.unshift(23), console.log(percentageValues))}
            <div className="absolute w-full top-16 left-0 p-14">
              <WaveSVG percentages={percentageValues} />
            </div>
          </div>
        </div>
        <div className="my-10 p-4">
          <p className="font-bold text-lg">More details of today's weather</p>

          <div className="grid grid-cols-3 ">
            <div className=" bg-white p-3 my-6 mr-20  rounded-3xl">
              <div className="flex items-center px-3 justify-between">
                <div>
                  <p className="font-semibold text-sm">Humidity</p>
                </div>
                <div className="p-1 text-white rounded-lg bg-blue-400">
                  <WaterDropOutlinedIcon fontSize="small" />
                </div>
              </div>
              <div className="mt-1 text-center">
                <span className="text-2xl mr-1 font-extrabold">82%</span>
                <span>bad</span>
              </div>
              <div className="flex justify-between  px-6 py-1 pb-4 mt-2">
                <div className="">
                  <p className="text-sm text-gray-400">good</p>
                  <div class="w-12 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      class="bg-blue-400 h-2.5 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm text-gray-400">normal</p>
                  <div class="w-12 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      class="bg-blue-400 h-2.5 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm text-gray-400">bad</p>
                  <div class="w-12 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      class="bg-blue-400 h-2.5 rounded-l-full"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-3 my-6 mr-20 rounded-3xl">
              <div className="flex items-center px-3 justify-between">
                <div>
                  <p className="font-semibold text-sm">Wind</p>
                </div>
                <div className="p-1 text-white rounded-lg bg-blue-400">
                  <AirOutlinedIcon fontSize="small" />
                </div>
              </div>
              <div
                class="semi-donut-model-2 mx-auto"
                style={{ "--percentage": "40", "--fill": "#039BE5 " }}
              >
                8 Km/h
              </div>
            </div>

            <div className="bg-white p-3 my-6 mr-20 rounded-3xl">
              <div className="flex items-center px-3 justify-between">
                <div>
                  <p className="font-semibold text-sm">Precipitation</p>
                </div>
                <div className="p-1 text-white rounded-lg bg-blue-400">
                  <ThunderstormOutlinedIcon fontSize="small" />
                </div>
              </div>
              <div className="mt-1 text-center">
                <span className="text-2xl mr-1 font-extrabold">1.4 cm</span>
              </div>
              <div className="flex justify-between px-3 py-1 pb-4 mt-2">
                <div className="">
                  <p className="text-xs text-gray-400">0</p>
                  <div className="w-3 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-400 h-2.5 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className="">
                  <p className="text-xs text-gray-400">10</p>
                  <div className="w-3 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-400 h-2.5 rounded-l-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <div className="">
                  <p className="text-xs text-gray-400">20</p>
                  <div className="w-3 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-400 h-2.5 rounded-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <div className="">
                  <p className="text-xs text-gray-400">30</p>
                  <div className="w-3 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-400 h-2.5 rounded-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <div className="">
                  <p className="text-xs text-gray-400">40</p>
                  <div className="w-3 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-400 h-2.5 rounded-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <div className="">
                  <p className="text-xs text-gray-400">50</p>
                  <div className="w-3 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-400 h-2.5 rounded-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <div className="">
                  <p className="text-xs text-gray-400">60</p>
                  <div className="w-3 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-400 h-2.5 rounded-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <div className="">
                  <p className="text-xs text-gray-400">70</p>
                  <div className="w-3 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-400 h-2.5 rounded-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <div className="">
                  <p className="text-xs text-gray-400">80</p>
                  <div className="w-3 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-400 h-2.5 rounded-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <div className="">
                  <p className="text-xs text-gray-400">90</p>
                  <div className="w-3 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-400 h-2.5 rounded-l-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="bg-white p-3 my-6 mr-20 rounded-3xl">
              <div className="flex items-center px-3 justify-between">
                <div>
                  <p className="font-semibold text-sm">UV index</p>
                </div>
                <div className="p-1 text-white rounded-lg bg-blue-400">
                  <WbSunnyOutlinedIcon fontSize="small" />
                </div>
              </div>
              <div className="mt-1 text-center">
                <span className="text-2xl mr-1 font-extrabold">4</span>
                <span>medium</span>
              </div>
              <div className="flex justify-between px-3 py-1 pb-4 mt-2">
                <div className="">
                  <p className="text-sm text-gray-400">0-2</p>
                  <div className="w-8 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-400 h-2.5 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm text-gray-400">3-5</p>
                  <div className="w-8 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-400 h-2.5 rounded-full"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm text-gray-400">6-7</p>
                  <div className="w-8 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-400 h-2.5 rounded-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm text-gray-400">8-10</p>
                  <div className="w-8 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-400 h-2.5 rounded-l-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm text-gray-400">11+</p>
                  <div className="w-8 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-400 h-2.5 rounded-l-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-3 my-6 mr-20 rounded-3xl">
              <div className="flex items-center px-3 justify-between">
                <div>
                  <p className="font-semibold text-sm">Feels like</p>
                </div>
                <div className="p-1 text-white rounded-lg bg-blue-400">
                  <DeviceThermostatOutlinedIcon fontSize="small" />
                </div>
              </div>
              <div className="mt-1 text-center">
                <span className="text-2xl mr-1 font-extrabold">30&deg;</span>
              </div>
              <div className="flex justify-between px-2 mt-3">
                <div className="text-xs text-gray-400">0&deg;</div>
                <div className="text-xs text-gray-400">25&deg;</div>
                <div className="text-xs text-gray-400">50&deg;</div>
              </div>
              <div className="flex justify-between px-2 mt-1">
                <div className="">
                  <div className="w-56 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-400 h-2.5 rounded-l-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-3 my-6 mr-20 rounded-3xl">
              <div className="flex items-center px-3 justify-between">
                <div>
                  <p className="font-semibold text-sm">Chances of Rain</p>
                </div>
                <div className="p-1 text-white rounded-lg bg-blue-400">
                  <WbCloudyOutlinedIcon fontSize="small" />
                </div>
              </div>
              <div className="mt-1 text-center">
                <span className="text-2xl mr-1 font-extrabold">42%</span>
              </div>
              <div className="flex justify-between px-2 mt-3">
                <div className="text-xs text-gray-400">0%</div>
                <div className="text-xs text-gray-400">25%</div>
                <div className="text-xs text-gray-400">50%</div>
                <div className="text-xs text-gray-400">75%</div>
                <div className="text-xs text-gray-400">100%</div>
              </div>
              <div className="flex justify-between px-2 mt-1">
                <div className="">
                  <div className="w-56 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-400 h-2.5 rounded-l-full"
                      style={{ width: "42%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
