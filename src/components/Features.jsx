const Features = () => {
  return (
    <section className="bg-gray-200 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Seamless Market Access</h3>
            <p className="text-gray-600 mt-2">
              Easily connect farmers with wholesalers and retailers for direct
              trade.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Blockchain Transactions</h3>
            <p className="text-gray-600 mt-2">
              Secure and transparent transactions using blockchain.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Cold-Chain Logistics</h3>
            <p className="text-gray-600 mt-2">Efficient product delivery and reduced post-harvest loss.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features