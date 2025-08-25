import { Link } from "react-router-dom"
import ApiRef from "../components/ApiRef"

const Docs = () => {
  return (
    <div className="max-w-3xl mt-20 text-gray-300">
      
      <h2 className="text-3xl font-bold text-emerald-400 mb-4">Documentation</h2>
      <p className="mb-6">
        This section provides detailed documentation about the{" "}
        <span className="text-emerald-400">Open Sync</span> backend repository,
        its APIs, and usage within Open Nova services.
      </p>

      

      <ApiRef />
      {/* Go Home button */}
      <Link
        to="/"
        className="inline-block mt-20 px-4 py-2 mb-6 bg-emerald-600 hover:bg-emerald-700 font-semibold rounded-lg transition"
      >
        Go Home
      </Link>
    </div>
  )
}

export default Docs
