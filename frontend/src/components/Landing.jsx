import { useNavigate } from 'react-router-dom'
function Landing() {
     const navigate = useNavigate()
  return (
    <main className="min-h-screen bg-[#FAFAF7] flex flex-col items-center justify-center px-6">

      {/* Branding */}
      <div>
        <p>Matchly</p>
      </div>

      {/* Main Content */}
      <div>
        <h1>
          Match smarter.
          <br />
          Apply better.
        </h1>

        <p>
          AI-powered resume analysis that helps you
          improve your resume before applying.
        </p>
      </div>

      {/* CTA */}
      <button onClick={() => navigate('/home')}>
        Get Started
      </button>

    </main>
  )
}

export default Landing