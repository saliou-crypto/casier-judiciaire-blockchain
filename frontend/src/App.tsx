import { useState, useEffect } from 'react'
import axios from 'axios'

interface ApiResponse {
  message: string
  status: string
  project: string
  backend: string
  frontend: string
}

function App() {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Appeler l'API Django
    axios.get('http://127.0.0.1:8000/api/hello/')
      .then(response => {
        setData(response.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          🎉 {data?.project || 'Casier Judiciaire - Sénégal'}
        </h1>

        {loading && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Chargement...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded mb-4">
            <p className="text-red-700 font-semibold">❌ Erreur</p>
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        {data && !loading && (
          <div className="space-y-4">
            <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded">
              <p className="text-green-700 font-semibold text-lg">
                {data.message}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Backend</p>
                <p className="font-semibold text-gray-800">{data.backend}</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Frontend</p>
                <p className="font-semibold text-gray-800">{data.frontend}</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg md:col-span-2">
                <p className="text-sm text-gray-600">Statut</p>
                <p className="font-semibold text-green-600 uppercase">{data.status}</p>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mt-6">
              <p className="text-sm text-gray-600 mb-2">✅ Connexion établie :</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Django API fonctionne</li>
                <li>✓ React récupère les données</li>
                <li>✓ CORS configuré correctement</li>
                <li>✓ Full-stack opérationnel !</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App