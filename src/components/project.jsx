import imagetwo from "../assets/imgtwo.png";
import imagefive from "../assets/imagefive.png";
import imagesix from "../assets/imgsix.png";

const projects = [
  {
    name: "Flowers App",
    description: "A modern web app built with React and Tailwind CSS.",
    github: "https://github.com/somiaapdalla/flowerss",
    live: "https://vercel.com/somiaapdallas-projects/maah-maah",
    image: imagetwo,
  },
  {
    name: "Clothes Store",
    description: "Full stack application with Node.js and MongoDB.",
    github: "https://github.com/somiaapdalla/frontend-clothes",
    live: "https://frontend-clothes1.vercel.app/",
    image: imagefive,
  },
  {
    name: "Maah-maah",
    description: "Front-end project",
    github: "https://github.com/somiaapdalla/Maah-maah",
    live: "https://vercel.com/somiaapdallas-projects/maah-maah",
    image: imagesix,
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-slate-100 py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center text-slate-900 mb-14">
        My Projects
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden
                       hover:shadow-xl transition duration-300
                       hover:-translate-y-2 flex flex-col"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-52 object-cover
                           hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                {project.name}
              </h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="mt-auto flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border border-slate-800
                             text-slate-800 hover:bg-slate-800 hover:text-white
                             px-4 py-2 rounded-lg transition"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 hover:bg-blue-700
                             text-white px-4 py-2 rounded-lg transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
