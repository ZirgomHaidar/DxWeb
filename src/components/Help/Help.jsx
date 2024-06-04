import React from "react";
import "./Help.css";
import Collapsible from "react-collapsible";
import { motion } from "framer-motion";

const Help = () => {
  return (
    <motion.div
      className="help-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="top-help">
        <p>
          DroidX-UI does not guarantee that your device will run flawlessly
          without any bugs (as this seems impossible). But we strive to create
          works that can be used in almost any specification. The maintainer
          will always provide the best updates in their spare time.
        </p>
      </div>
      <div className="bottom-help">
        <div className="top-bottom-left">
          <div className="caution">
            <h1>Caution</h1>
            <ul>
              <li>
                Before we begin, it's important to understand that installing a
                custom ROM can be risky. It can void your warranty, lead to data
                loss, or even brick your phone (render it unusable). This guide
                is intended for users comfortable with following technical
                instructions and potential risks.
              </li>
              <li>If you're unsure, it's best to leave your phone stock.</li>
            </ul>
          </div>
          <div className="install-guide">
            <h1>Installation Guide</h1>
            <h4>
              Every devices has its own way of installing the custom rom.
              Because every devices have different hardwares,we recommend
              joining a telegram group that matches the device used.
            </h4>
            <ul>
              <li>Your device needs to have unlocked bootloader.</li>
              <li>
                Remember unlocking may lead to permanent data loss. So make sure
                you have backed up your data.
              </li>
              <li>
                After unlocking bootloader you must flash/install the custom
                recovery into your device (each device have its own custom
                recovery) for example, TWRP, OrangeFox Recovery, AOSP recovery,
                etc. via terminal on your computer/laptop.
              </li>
              <li>
                Flash/Install the latest DroidX-UI file using custom recovery.
                Enjoy.
              </li>
            </ul>
          </div>
        </div>
        <div className="top-bottom-right">
          <h1>FAQ's</h1>
          <Collapsible
            open
            transitionTime="200"
            trigger="What is the base of DroidX-UI?"
            triggerTagName="div"
          >
            <p>
              So DroidX-UI is based on AOSP, it will not be based on PE or
              LineageOS or any other ROM base. DroidX-UI is AOSP based Project.
            </p>
          </Collapsible>
          <Collapsible
            transitionTime="200"
            trigger="Will there be vanilla builds or Gapps build?"
            triggerTagName="div"
          >
            <p>
              Yes, Vanilla and GApps both builds will be there, and both options
              will be available from first release.
            </p>
          </Collapsible>
          <Collapsible
            transitionTime="200"
            trigger="How to report a bug or a issue?"
            triggerTagName="div"
          >
            <p>
              You can report the bug to our Community Group or to the group of
              devices that support ROMs from DroidX-UI. Don't forget to provide
              information on the device used along with photo / screen record /
              video / logcat attachments when reporting.
            </p>
          </Collapsible>
        </div>
      </div>
    </motion.div>
  );
};

export default Help;
