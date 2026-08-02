import { useRef, useState } from "react";

function DashboardHero() {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");

  return (
    <section className="px-10 py-16 min-h-[calc(100vh-80px)] flex items-center">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div>

          <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
            Dashboard
          </p>

          <h1 className="mt-4 text-5xl font-bold text-slate-900 leading-tight">
            Resume Review
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-lg leading-relaxed">
            Get an ATS score, identify missing skills, and improve your
            resume before applying.
          </p>

          <div className="mt-8 text-sm text-gray-500">
            Supported format
            <p className="mt-2 font-medium text-slate-700">
              PDF • Maximum size 5 MB
            </p>
          </div>

        </div>


        {/* RIGHT SIDE */}
        <div>

          {/* Upload Box */}
          <div
            onClick={() => fileInputRef.current.click()}
            className="bg-white border border-gray-200 rounded-3xl p-12 text-center shadow-sm hover:shadow-md transition-all cursor-pointer"
          >

            <div className="w-16 h-16 mx-auto rounded-2xl bg-gray-100 flex items-center justify-center text-3xl">
              📄
            </div>


            <h2 className="mt-6 text-2xl font-semibold text-slate-900">
              Upload Resume
            </h2>


            <p className="mt-3 text-gray-500">
              Select a PDF resume to begin analysis.
            </p>


            <button
              type="button"
              className="mt-8 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-medium transition-all"
            >
              Choose Resume
            </button>

          </div>


          {/* Hidden Input */}
          <input
            type="file"
            ref={fileInputRef}
            accept=".pdf"
            className="hidden"
            onChange={(e) => {

              const file = e.target.files[0];

              if (!file) return;


              if (file.type !== "application/pdf") {
                setError("Please upload a PDF file.");
                fileInputRef.current.value = "";
                return;
              }


              if (file.size > 5 * 1024 * 1024) {
                setError("File size should be less than 5 MB.");
                fileInputRef.current.value = "";
                return;
              }


              setError("");
              setSelectedFile(file);

            }}
          />


          {/* Error Message */}
          {error && (
            <p className="mt-4 text-red-500 text-sm">
              {error}
            </p>
          )}



          {/* Selected File */}
          {selectedFile && (

            <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

              <div className="flex justify-between items-center">

                <div>

                  <h3 className="font-semibold text-slate-900">
                    {selectedFile.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                  </p>

                </div>


                <div className="text-green-600 font-medium text-sm">
                  Ready
                </div>


              </div>



              <div className="mt-6 flex gap-4">


                <button
                  className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl transition-all"
                >
                  Analyze Resume
                </button>


                <button
                  onClick={() => {
                    setSelectedFile(null);
                    fileInputRef.current.value = "";
                  }}
                  className="px-6 py-3 rounded-xl text-gray-600 hover:text-red-600 transition-all"
                >
                  Choose another
                </button>


              </div>


            </div>

          )}


        </div>


      </div>
    </section>
  );
}


export default DashboardHero;