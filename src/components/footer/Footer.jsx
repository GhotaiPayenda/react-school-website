export default function Footer({
  schoolName,
  email,
  phone,
  address,
}) {
  return (
    <footer
      id="contact"
      className="bg-purple-950 text-white"
    >

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* School */}
        <div>

          <h2 className="text-2xl font-bold">
            {schoolName}
          </h2>

          <p className="text-purple-200 mt-4 leading-7">
            Helping students develop knowledge, skills,
            confidence, and a strong foundation for the future.
          </p>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-xl font-bold">
            Contact Us
          </h3>

          <div className="mt-5 space-y-3 text-purple-200">

            <p>📧 {email}</p>

            <p>📞 {phone}</p>

            <p>📍 {address}</p>

          </div>

        </div>

        {/* Social */}
        <div>

          <h3 className="text-xl font-bold">
            Follow Us
          </h3>

          <div className="flex gap-3 mt-5">

            <button className="w-10 h-10 rounded-full bg-purple-800 hover:bg-purple-700">
              f
            </button>

            <button className="w-10 h-10 rounded-full bg-purple-800 hover:bg-purple-700">
              in
            </button>

            <button className="w-10 h-10 rounded-full bg-purple-800 hover:bg-purple-700">
              X
            </button>

          </div>

        </div>

      </div>

      <div className="border-t border-purple-800 text-center py-5 text-purple-300">
        © 2026 {schoolName}. All rights reserved.
      </div>

    </footer>
  );
}