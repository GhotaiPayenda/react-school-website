export default function TestimonialCard({
  name,
  role,
  comment,
  image,
}) {
  return (
    <div className="bg-white p-7 rounded-2xl shadow-md">

      {/* Student */}
      <div className="flex items-center gap-4">

        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>
          <h3 className="font-bold">
            {name}
          </h3>

          <p className="text-sm text-purple-600">
            {role}
          </p>
        </div>

      </div>

      {/* Rating */}
      <div className="text-yellow-500 mt-5">
        ★★★★★
      </div>

      {/* Comment */}
      <p className="text-gray-600 mt-4 leading-7">
        "{comment}"
      </p>

    </div>
  );
}