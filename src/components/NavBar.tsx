

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <a href="/" className="hover:text-gray-300">MyApp</a>
        </div>
        <div>
          <a href="/home" className="mr-4 hover:text-gray-300">Home</a>
          <a href="/about" className="mr-4 hover:text-gray-300">About</a>
          <a href="/services" className="hover:text-gray-300">Services</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;