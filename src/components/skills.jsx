import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-6xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-6xl" /> },
    { name: "React", icon: <FaReact className="text-blue-400 text-6xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-6xl" /> },
    // أضيفي أي مهارات أخرى بنفس الطريقة
  ];

  return (
    <section id="skills" className="bg-sky-950 py-20 px-6 md:px-20 pb-28 pt-28 ">
      <h2 className="text-4xl font-bold text-center text-slate-900 mb-12 text-white">My Skills</h2>

      <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-center pb-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform"
          >
            {skill.icon}
            <h3 className="mt-4 text-xl font-semibold text-slate-900">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
