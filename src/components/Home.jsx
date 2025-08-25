import { motion } from "framer-motion"
import { IconBook, IconBrandGithub } from "@tabler/icons-react"

const Home = () => {

  return (
    <div className="text-white flex flex-col items-center justify-between px-6">

      <div className="flex flex-col mt-40 items-center text-center my-10">
        <h1 className="text-5xl font-bold text-emerald-500">Open Sync</h1>
        <p className="text-lg mt-4 text-gray-300 max-w-2xl">
          A core <span className="text-emerald-400">backend repository</span> powering all{' '}
          <span className="text-emerald-400">Open Nova</span> services with shared functions and
          utilities.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
  <motion.a
    href="/docs"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-lg transition"
  >
    <IconBook size={20} />
    Documentation
  </motion.a>

  <motion.a
    href="https://github.com/OpenNova-Tech/Open-Sync-API"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 bg-zinc-600 hover:bg-zinc-700 text-white font-semibold py-2 px-6 rounded-lg transition"
  >
    <IconBrandGithub size={20} />
    Repository
  </motion.a>
</div>

      <div className="my-20 text-center text-sm text-gray-500">
        <p>
          Provides backend functions and APIs used across Open Docs, Open UI, and other Open Nova
          products.
        </p>
      </div>


    </div>
  )
}

export default Home
