import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaBootstrap,
  FaMicrosoft,
  FaGoogle,
} from "react-icons/fa";
import { SiJquery, SiMysql, SiTelegram } from "react-icons/si";

const tools = [
  { name: "HTML", icon: <FaHtml5 />, level: 85 },
  { name: "CSS", icon: <FaCss3Alt />, level: 85 },
  { name: "JavaScript", icon: <FaJsSquare />, level: 85 },
  { name: "Node.js", icon: <FaNodeJs />, level: 85 },
  { name: "SQL", icon: <SiMysql />, level: 80 },
  { name: "Bootstrap", icon: <FaBootstrap />, level: 85 },
  { name: "Google Suite", icon: <FaGoogle />, level: 90 },
  {
    name: "Microsoft Office Suite (Word, Excel, PowerPoint, Outlook)",
    icon: <FaMicrosoft />,
    level: 95,
  },
  { name: "jQuery", icon: <SiJquery />, level: 80 },

  { name: "Telegram", icon: <SiTelegram />, level: 100 },
];

const ToolsSection = () => {
  return (
    <section className="py-12 bg-gray-100" id="tools">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Tools & Technologies
        </h2>
        <p className="text-gray-600 mb-8">
          These are the tools and technologies I’ve worked with, discussed
          during the interview, and frequently used in real-world projects to
          deliver effective results.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-md shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-2 text-gray-700 text-lg font-medium">
                <span className="text-xl text-blue-500">{tool.icon}</span>
                {tool.name}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-[#253237] h-3 rounded-full transition-all duration-500"
                  style={{ width: `${tool.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
