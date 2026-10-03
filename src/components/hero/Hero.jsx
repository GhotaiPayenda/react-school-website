export default function Hero({
  badge,
  title,
  description,
  buttonText,
  image,
}) {
  return (
    <section id="home" className="bg-purple-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Hero Content */}
        <div>

          <p className="text-purple-600 font-bold uppercase tracking-wide">
            {badge}
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mt-3">
            {title}
          </h1>

          <p className="text-gray-600 text-lg leading-8 mt-6">
            {description}
          </p>

          <div className="flex gap-4 mt-8">

            <button className="bg-purple-700 text-white px-7 py-3 rounded-lg hover:bg-purple-800 transition">
              {buttonText}
            </button>

            <button className="border border-purple-700 text-purple-700 px-7 py-3 rounded-lg hover:bg-purple-700 hover:text-white transition">
              Learn More
            </button>

          </div>

        </div>

        {/* Hero Image */}
        <div>
          <img
            src={image}
            alt="Students studying"
            className="rounded-3xl shadow-2xl w-full h-112 object-cover"
          />
        </div>

      </div>
    </section>
  );
}