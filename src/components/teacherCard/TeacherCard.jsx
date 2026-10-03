export default function TeacherCard({
  name,
  subject,
  experience,
  image,
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">

      {/* Teacher Image */}
      <div className="relative">

        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover"
        />

        <div className="absolute bottom-3 left-3 bg-purple-700 text-white px-3 py-1 rounded-lg text-sm">
          Teacher
        </div>

      </div>

      {/* Teacher Information */}
      <div className="p-6">

        <h3 className="text-xl font-bold">
          {name}
        </h3>

        <p className="text-purple-600 font-semibold mt-2">
          {subject}
        </p>

        <p className="text-gray-500 mt-2">
          {experience}
        </p>

        <button className="mt-5 text-purple-700 font-semibold hover:underline">
          View Profile →
        </button>

      </div>

    </div>
  );
}