import imageone from "../assets/imgone.jpeg"
function AboutMe() {
  return (
    <section className="bg-slate-100 py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 pb-28 pt-28">
        
        <img
          src={imageone}
                    alt="Sumaya Abdullahi Mohamed"
          className="w-64 h-64 rounded-2xl object-cover shadow-lg"
        />

        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-lg text-slate-700 mb-4">
            Hi, I'm <span className="font-semibold">Sumaya Abdullahi Mohamed</span>, 
            a Web Developer passionate about building modern, responsive, 
            and user-friendly websites. I specialize in <span className="font-medium text-blue-600">HTML, CSS, JavaScript, and React</span>. 
            I love turning ideas into functional web applications and continuously learning new technologies.
          </p>
          <p className="text-lg text-slate-700">
            My goal is to create beautiful and interactive websites that provide 
            great user experiences. I enjoy problem-solving and improving my skills 
            every day to become a professional developer.
          </p>
        </div>

      </div>
    </section>
  );
}

export default AboutMe
