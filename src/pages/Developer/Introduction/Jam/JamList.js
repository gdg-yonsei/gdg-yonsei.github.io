import { VscCode } from "@react-icons/all-files/vsc/VscCode";
import { BsServer } from "@react-icons/all-files/bs/BsServer";
import { VscDeviceMobile } from "@react-icons/all-files/vsc/VscDeviceMobile";
import { GiProcessor } from "@react-icons/all-files/gi/GiProcessor";
import { FaCogs } from "@react-icons/all-files/fa/FaCogs";
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";

export const JamList = [
  {
    icon: <VscCode />,
    description: "Web Development",
    scrollTarget: "#fixed-element-web",
  },
  {
    icon: <BsServer />,
    description: "Server Development",
    scrollTarget: "#fixed-element-server",
  },
  {
    icon: <VscDeviceMobile />,
    description: "Mobile Development",
    scrollTarget: "#fixed-element-mobile",
  },
  {
    icon: <GiProcessor />,
    description: "Artificial Intelligence",
    scrollTarget: "#fixed-element-ML",
  },
  {
    icon: <FaCogs />,
    description: "Gymnasium",
    scrollTarget: "#fixed-element-FS",
  },
  {
    icon: <FaHandshake />,
    description: "Developer Relations",
    scrollTarget: "#fixed-element-DevRel",
  },
];
