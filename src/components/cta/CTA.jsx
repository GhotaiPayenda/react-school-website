export default function CTA({
  title,
  description,
  buttonText,
}) {
  return (
    <section className="bg-purple-700 text-white py-20">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          {title}
        </h2>

        <p className="text-purple-100 mt-5 text-lg">
          {description}
        </p>

        <button className="mt-8 bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-purple-100 transition">
          {buttonText}
        </button>

      </div>

    </section>
  );
}