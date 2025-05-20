import Spline from "@splinetool/react-spline";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";

const Characters = () => {
  // TRACK SELECTED AVATAR
  const [selectedAvatar, setSelectedAvatar] = useState("VIKI");

  // TRACK SELECTED AVATAR DATA
  const Avatar = {
    VIKI: {
      name: "VIKI",
      power: 75,
      stable: 95,
      penetrate: 30,
      portable: 80,
      stars: 3,
    },
    EVA: {
      name: "EVA",
      power: 85,
      stable: 90,
      penetrate: 40,
      portable: 70,
      stars: 4,
    },
  };

  // GET CURRENT AVATAR DATA
  const currentAvatar = Avatar[selectedAvatar];

  return (
    <div className="relative w-full h-screen overflow-hidden mb-[10%]">
      {/* TITLE */}
      <div className="relative z-10 pt-6 text-center">
        <h1
          className="text-5xl font-bold tracking-widest md:mb-0 mb-8"
          style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.7)" }}
        >
          FIGHTERS
        </h1>
      </div>
      {/* MAIN CONTENT */}
      <div className="relative z-10 flex md:flex-row flex-col items-center w-full h-full p-4">
        {/* LEFT SIDE _ AVATAR INFO SECTION */}
        <div className="w-full md:w-2/4 flex flex-col md:ml-10">
          {/* SELECTED AVATAR INFO CARD */}
          <div className="bg-gray-900/80 rounded-lg backdrop-blur-sm p-4 mb-4 border border-gray-800 shadow-[0_0_15px_rgba(167, 139, 250, 0.2)]">
            <h1 className="text-2xl font-semibold mb-2">
              {currentAvatar.name}
            </h1>
            {/* AVATAR STATISTICS */}
            <div className="mb-16 space-y-3">
              {/* POWER STAT */}
              <div className="flex items-center">
                <span className="w-24 text-gray-400">Power</span>
                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{ width: `${currentAvatar.power}%` }}
                  ></div>
                </div>
                <span className="ml-2">{currentAvatar.power}</span>
              </div>
              {/* STABLE STAT */}
              <div className="flex items-center">
                <span className="w-24 text-gray-400">Stable</span>
                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{ width: `${currentAvatar.stable}%` }}
                  ></div>
                </div>
                <span className="ml-2">{currentAvatar.stable}</span>
              </div>
              {/* PENETRATE STAT */}
              <div className="flex items-center">
                <span className="w-24 text-gray-400">Panetrate</span>
                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{ width: `${currentAvatar.penetrate}%` }}
                  ></div>
                </div>
                <span className="ml-2">{currentAvatar.penetrate}</span>
              </div>
              {/* PORTABLE STAT */}
              <div className="flex items-center">
                <span className="w-24 text-gray-400">Portable</span>
                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{ width: `${currentAvatar.portable}%` }}
                  ></div>
                </div>
                <span className="ml-2">{currentAvatar.portable}</span>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-3">
              <button className="px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300">
                Proficient
              </button>
              <button className="px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300">
                Redemption
              </button>
            </div>
          </div>

          {/* AVATAR SELECTION CARDS */}
          <div className="grid grid-cols-2 gap-4">
            {/* VIKI CARD */}
            <div
              className="relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300"
              onClick={() => setSelectedAvatar("VIKI")}
            >
              <div className="text-lg mb-2">VIKI</div>
              {/* AVATAR VISUAL PLACEHOLDER */}
              <div className="w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2">
                <img src="../../public/images/VIKI.png" alt="Viki Avatar" />
              </div>
              {/* STAR RATING */}
              <div className="flex items-center">
                {[...Array(3)].map((_, index) => (
                  <Star key={index} className="w-4 h-4 fill-violet-500" />
                ))}
              </div>
              {/* HIGHLIGHT FOR SELECTED AVATAR */}
              {selectedAvatar === "VIKI" && (
                <div className="absolute inset-0 border-2 border-violet-500 rounded-lg pointer-events-none"></div>
              )}
            </div>
            {/* EVA CARD */}
            <div
              className="relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300"
              onClick={() => setSelectedAvatar("EVA")}
            >
              <div className="text-lg mb-2">EVA</div>
              {/* AVATAR VISUAL PLACEHOLDER */}
              <div className="w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2">
                <img src="../../public/images/EVA.png" alt="EVA Avatar" />
              </div>
              {/* STAR RATING */}
              <div className="flex items-center">
                {[...Array(4)].map((_, index) => (
                  <Star key={index} className="w-4 h-4 fill-violet-500" />
                ))}
              </div>
              {/* HIGHLIGHT FOR SELECTED AVATAR */}
              {selectedAvatar === "EVA" && (
                <div className="absolute inset-0 border-2 border-violet-500 rounded-lg pointer-events-none"></div>
              )}
            </div>
          </div>
        </div>
        {/* RIGHT SIDE CONTAINER */}
        <div className="relative md:w-2/4 w-full md:h-full h-80 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            {selectedAvatar === "VIKI" ? (
              <motion.div
                key="VIKI"
                className="absolute inset-0"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.5 }}
              >
                <Spline scene="https://prod.spline.design/FBB1GC1dZ-xTA6cQ/scene.splinecode" />
              </motion.div>
            ) : (
              <motion.div
                key="EVA"
                className="absolute inset-0"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.5 }}
              >
                <Spline scene="https://prod.spline.design/4cHg6FawFWC5CKdO/scene.splinecode" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Characters;
