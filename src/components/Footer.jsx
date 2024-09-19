const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; 2024 Konectar. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-sky-400">
            Privacy Policy
          </a>{" "}
          |
          <a href="#" className="text-sky-400">
            {" "}
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer