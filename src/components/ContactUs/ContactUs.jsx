import "./ContactUs.css";
import React from "react";

const ContactUs = () => {
  return (
    <div className="CU-container">
      <div className="instructions">
        <h3>
          If you are here then you are probably fukd up. But it's fixable.
        </h3>
        <ol>
          <li>Mobile stuck on boot animation?</li>
          <li>TWRP flashing error.</li>
          <li>TWRP stuck on boot animation.</li>
          <li>Recovery can't detect internal storage.</li>
          <li>Phone bricked.</li>
          <li>Don't know what happened? Contact us using below links..</li>
        </ol>
      </div>
      <div className="reach-platform">
        <ul>
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
    </div>
  );
};

export default ContactUs;
