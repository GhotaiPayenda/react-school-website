export default function CourseCard({
  icon,
  title,
  description,
  duration,
  students,
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition">

      {/* Course Icon */}
      <div className="text-5xl">
        {icon}
      </div>

      {/* Course Information */}
      <div className="mt-5">

        <h3 className="text-xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="text-gray-600 mt-3 leading-7">
          {description}
        </p>

      </div>

      {/* Course Details */}
      <div className="border-t mt-6 pt-5 flex justify-between">

        <div>
          <p className="text-sm text-gray-500">
            Duration
          </p>

          <p className="font-semibold text-purple-700">
            {duration}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Students
          </p>

          <p className="font-semibold text-purple-700">
            {students}
          </p>
        </div>

      </div>

      <button className="w-full mt-6 bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition">
        View Course
      </button>

    </div>
  );
}