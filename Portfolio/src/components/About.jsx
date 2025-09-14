import { FaHtml5, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiPython, SiMysql } from "react-icons/si";
import { DiVisualstudio, DiJava } from "react-icons/di";
import { FaCode } from "react-icons/fa"; // fallback for C, C++

const About = () => {
  return (
    <div id="about" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          About Me
        </h1>

        {/* About Me Section */}
        <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
          A <span className="font-bold text-[#fe5617]">Pre-final year student</span> with a strong passion for
          <span className="font-bold text-[#fe5617]"> software development</span>. Skilled in
          programming languages and full-stack technologies, eager to apply technical
          knowledge to real-world projects while continuously learning and growing.
        </p>

        {/* Skills Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-[#fe5617] text-center">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* C */}
            <div className="flex flex-col items-center space-y-2">
              <FaCode size={40} className="text-[#00599C]" />
              <span className="font-bold">C</span>
            </div>
            {/* C++ */}
            <div className="flex flex-col items-center space-y-2">
              <FaCode size={40} className="text-[#004482]" />
              <span className="font-bold">C++</span>
            </div>
            {/* Python */}
            <div className="flex flex-col items-center space-y-2">
              <SiPython size={40} className="text-[#3776AB]" />
              <span className="font-bold">Python</span>
            </div>
            {/* Java */}
            <div className="flex flex-col items-center space-y-2">
              <DiJava size={40} className="text-[#007396]" />
              <span className="font-bold">Java (Core)</span>
            </div>
            {/* SQL */}
            <div className="flex flex-col items-center space-y-2">
              <SiMysql size={40} className="text-[#4479A1]" />
              <span className="font-bold">SQL</span>
            </div>
            {/* MongoDB */}
            <div className="flex flex-col items-center space-y-2">
              <SiMongodb size={40} className="text-[#47a248]" />
              <span className="font-bold">MongoDB</span>
            </div>
            {/* React */}
            <div className="flex flex-col items-center space-y-2">
              <FaReact size={40} className="text-[#61dbfb]" />
              <span className="font-bold">React.js</span>
            </div>
            {/* Node.js */}
            <div className="flex flex-col items-center space-y-2">
              <FaNodeJs size={40} className="text-[#68a063]" />
              <span className="font-bold">Node.js</span>
            </div>
            {/* VS Code */}
            <div className="flex flex-col items-center space-y-2">
              <DiVisualstudio size={40} className="text-[#0078d7]" />
              <span className="font-bold">VS Code</span>
            </div>
            {/* GitHub */}
            <div className="flex flex-col items-center space-y-2">
              <FaGithub size={40} className="text-black" />
              <span className="font-bold">GitHub</span>
            </div>
            {/* HTML5 */}
            <div className="flex flex-col items-center space-y-2">
              <FaHtml5 size={40} className="text-[#e34c26]" />
              <span className="font-bold">HTML5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
