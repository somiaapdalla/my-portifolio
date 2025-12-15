import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-6 text-center pt-20">
      <p className="text-sm mb-2">
        &copy; {new Date().getFullYear()} Sumaya Abdullahi Mohamed. All rights reserved.
      </p>

      <div className="flex justify-center gap-6 mb-2 text-2xl">
        {/* GitHub */}
        <a href="https://github.com/somiaapdalla" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/sumeya abdullahi mohamed" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
          <FaLinkedin />
        </a>

        {/* Instagram */}
        <a href="https://instagram.com/y" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
          <FaInstagram />
        </a>

        {/* Gmail */}
        <a href="mailto:somiadesu2003@gmail.com" className="hover:text-red-500 transition">
          <FaEnvelope />
        </a>
      </div>

      <p className="text-sm">
        Built with ❤️ using React & Tailwind CSS
      </p>
    </footer>
  );
}

export default Footer
