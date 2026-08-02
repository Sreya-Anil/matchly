import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#FAFAF7] flex items-center justify-center px-10">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <p className="text-slate-900 font-semibold tracking-[0.25em] uppercase mb-4">
           Matchly
          </p>

          <h1 className="text-6xl font-bold text-gray-900 leading-tight">
            Make your <br />
            resume work harder.
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            Improve your resume with practical feedback before you apply.
            Matchly helps you identify missing skills, strengthen your profile,
            and present your experience better.
          </p>

          <button
            onClick={() => navigate("/home")}
            className="mt-8 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-md">
            Get Started →
          </button>
        </div>

        {/* Right */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

  <h2 className="text-xl font-semibold text-slate-800">
    Resume Preview
  </h2>

  <div className="mt-6">

    <h3 className="text-lg font-bold">
      Jennifer
    </h3>

    <p className="text-gray-500 text-sm">
      Software Engineer
    </p>

    <hr className="my-5" />

    <h4 className="font-semibold">
      Skills
    </h4>

    <div className="flex flex-wrap gap-2 mt-3">

      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
        React
      </span>

      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
        Node.js
      </span>

      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
        Java
      </span>

      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
        SQL
      </span>

    </div>

    <div className="mt-8">

      <div className="flex justify-between mb-2">
        <span>ATS Score</span>
        <span className="font-semibold">92%</span>
      </div>

      <div className="h-2 rounded-full bg-gray-200">

        <div className="h-2 w-[92%] bg-emerald-500 rounded-full"></div>

      </div>

    </div>

  </div>

</div>

      </div>
    </main>
  );
}

export default Landing;