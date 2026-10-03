export default function States({ stats }) {
  return (
    <section className="bg-purple-700 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">

        {stats.map((stat) => (
          <div key={stat.id} className="text-center">

            <h2 className="text-3xl md:text-4xl font-bold">
              {stat.number}
            </h2>

            <p className="text-purple-200 mt-2">
              {stat.label}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}