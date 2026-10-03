export default function SectionTitle({
  subtitle,
  title,
  description,
}) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">

      <p className="text-purple-600 font-bold uppercase tracking-wide">
        {subtitle}
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
        {title}
      </h2>

      <p className="text-gray-600 mt-4">
        {description}
      </p>

    </div>
  );
}