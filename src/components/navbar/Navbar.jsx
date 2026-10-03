export default function Navbar({ schoolName, links }) {
  return (
    <nav className="bg-purple-700 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-bold">
            {schoolName}
          </h1>

          <p className="text-xs text-purple-200">
            Education for a better future
          </p>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="hover:text-purple-200 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button className="hidden sm:block bg-white text-purple-700 px-5 py-2 rounded-lg font-semibold">
          Apply Now
        </button>

      </div>
    </nav>
  );
}