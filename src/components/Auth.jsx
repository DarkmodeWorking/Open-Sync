import { useState, useEffect } from 'react'

export default function Auth() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('http://localhost:8000/')
      .then(res => res.json())
      .then(data => setUsers(data.users))
      .catch(err => console.error('API error:', err))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = { name, email, password }

    try {
      const res = await fetch('http://localhost:8000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      })

      const data = await res.json()
      setMessage(data.message || 'User registered')
      setName('')
      setEmail('')
      setPassword('')

      const updated = await fetch('http://localhost:8000/')
      const updatedData = await updated.json()
      setUsers(updatedData.users)
    } catch (err) {
      console.error('Signup error:', err)
      setMessage('Error registering user')
    }
  }

  return (
    <div className="min-h-screen bg-black p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">User Management</h2>

      <div className="max-w-md mx-auto mb-10 bg-slate-900 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">Sign Up</h3>
        <form onSubmit={handleSubmit} className="text-white space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border px-3 py-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-3 py-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Register
          </button>
        </form>
        {message && <p className="mt-4 text-center text-green-600">{message}</p>}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-slate-900 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">#</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-4 text-slate-400">
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={index} className="border-t hover:bg-gray-50 transition">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
