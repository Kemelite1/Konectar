const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-lg fixed top-0">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl text-gray-500 font-bold">Konectar</div>
        <div className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="#features" className="text-gray-600 hover:text-gray-900">
            Features
          </a>
          <a href="#reviews" className="text-gray-600 hover:text-gray-900">
            Reviews
          </a>
          <button className="px-4 py-2 bg-green-500 text-white roundedl">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar