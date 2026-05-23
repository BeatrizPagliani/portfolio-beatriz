export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-[#2d2d2d] bg-[#111111]/80 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="pixel-font text-[#b7efc5] text-xs md:text-sm">
          BEATRIZ.EXE
        </h1>

        <ul className="mono-font flex gap-4 md:gap-8 text-xs md:text-sm text-[#d9d9d9]">

          <li>
            <a
              href="#home"
              className="hover:text-[#b7efc5] transition"
            >
              HOME
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-[#ffc8dd] transition"
            >
              ABOUT
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-[#cddafd] transition"
            >
              PROJECTS
            </a>
          </li>

        </ul>

      </div>

    </nav>
  );
}