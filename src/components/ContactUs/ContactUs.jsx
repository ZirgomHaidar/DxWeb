import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <motion.div
      className="CU-container fixed flex flex-col justify-between right-7 bottom-28 rounded-3xl bg-[#92cde0] w-[400px] h-[500px] pt-10 px-6 pb-3 z-10 text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="instructions">
        <h3 className="text-2xl" style={{ fontFamily: "Product Sans Bold" }}>
          If you are here then you are probably fukd up. But it's fixable.
        </h3>
        <ol className="p-5 list-decimal">
          <li className="text-xl">Mobile stuck on boot animation?</li>
          <li className="text-xl">TWRP flashing error.</li>
          <li className="text-xl">TWRP stuck on boot animation.</li>
          <li className="text-xl">Recovery can't detect internal storage.</li>
          <li className="text-xl">Phone bricked.</li>
          <li className="text-xl">
            Don't know what happened? Contact us using below links..
          </li>
        </ol>
      </div>
      <div className="reach-platform rounded-full bg-[#75b3c8] p-3 ">
        <ul className="flex text-xl justify-center items-center gap-10">
          <li>
            <a
              href="https://t.me/DroidXUI_chats"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/DroidX_UI"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter(X)
            </a>
          </li>

          <li>
            <a
              href="https://github.com/DroidX-UI"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ContactUs;
