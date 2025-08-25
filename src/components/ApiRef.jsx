import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const apiEndpoints = [
	{
		method: 'POST',
		path: '/register',
		description: 'Register user.',
		details: 'Adds user to the database.',
	},
	{
		method: 'POST',
		path: '/login',
		description: 'Login user.',
		details: 'Login user to the database.',
	},
]

const ApiRef = () => {
	const [openIndex, setOpenIndex] = useState(null)

	return (
		<div className="flex flex-col items-center justify-center w-full mt-16">
			<div className="w-full max-w-3xl">
				<h2 className="text-2xl font-semibold mb-6 text-emerald-400 text-center">
					Auth API Reference
				</h2>
				<div className="space-y-4">
					{apiEndpoints.map((endpoint, idx) => (
						<motion.div
							key={idx}
							className="border border-zinc-700 rounded-lg overflow-hidden bg-zinc-900"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: idx * 0.1 }}
						>
							<button
								onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
								className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-zinc-800 transition"
							>
								<div className="flex items-center gap-3">
									<span
										className={`px-2 py-1 text-xs font-bold rounded ${endpoint.method === 'GET'
												? 'bg-blue-600'
												: endpoint.method === 'POST'
													? 'bg-green-600'
													: 'bg-zinc-600'
											}`}
									>
										{endpoint.method}
									</span>
									<span className="font-mono text-sm text-zinc-300">
										{endpoint.path}
									</span>
								</div>

								{/* Animate arrow rotation */}
								<motion.span
									className="text-zinc-400"
									animate={{ rotate: openIndex === idx ? 180 : 0 }}
									transition={{ duration: 0.3 }}
								>
									▼
								</motion.span>
							</button>

							{/* Dropdown animation */}
							<AnimatePresence>
								{openIndex === idx && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3 }}
										className="overflow-hidden"
									>
										<div className="px-4 py-3 border-t border-zinc-700 text-sm text-zinc-400">
											<p className="mb-2">{endpoint.description}</p>
											<p className="text-zinc-500">{endpoint.details}</p>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	)
}

export default ApiRef
