function Navbar() {
  const links = ["Home", "Features", "About", "Contact"];
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-sm">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold text-gray-700 cursor-pointer transition-all hover:text-purple-600">
          Matchly
        </h1>
      </div>

      {/* Navigation */}
      <div>
        <ul className="flex gap-8">
           {links.map((link) => (
    <li
      key={link}
      className="cursor-pointer hover:text-purple-600 transition-all"
    >
      {link}
    </li>
     ))}
        </ul>
      </div>

      {/* CTA */}
      <div>
        <button className="bg-green-500 text-white text-lg px-10 py-5 rounded-xl shadow-md cursor-pointer transition-all hover:bg-green-600 hover:scale-105">
        Analyze Resume
        </button>
      </div>
    </nav>
  );
}

export default Navbar;