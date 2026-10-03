export default function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition">

      {/* Icon */}
      <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center text-3xl">
        {icon}
      </div>

      {/* Information */}
      <div className="mt-6">

        <h3 className="text-xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="text-gray-600 mt-3 leading-7">
          {description}
        </p>

      </div>

    </div>
  );
}