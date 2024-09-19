const Reviews = () => {
    const reviews = [
      {
        id: 1,
        name: "Ese Jibromah",
        comment:
          "Konectar has completely transformed how we source our produce. It’s seamless and efficient!",
        location: "Lagos, Nigeria",
      },
      {
        name: "Linda Gift",
        comment:
          "As a farmer, I love how easy it is to connect with retailers directly. It has increased my sales tremendously.",
        location: "Ibadan, Nigeria",
      },
      {
        name: "Abdul Raheem",
        comment:
          "The blockchain-based transactions give us confidence in the quality of the produce we receive.",
        location: "Abuja, Nigeria",
      },
    ];
  
  return (
    <section className="py-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold">What our customers say</h2>
            <p className="text-gray-600 mt-4">See what our customers are saying about Konectar</p>

            <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3">
                {reviews.map((reviews, index) => (
                    <div key={index} className="bg-gray-100 shadow-md p-6 rounded-lg">
                        <p className="text-gray-800 italic">{reviews.comment}</p>
                        <p className="text-gray-700 font-semibold mt-4">{reviews.name}</p>
                        <p className="text-gray-500">{reviews.location}</p>
                        </div>
                    ))
                }
            </div>


        </div>

    </section>
  )
}

export default Reviews