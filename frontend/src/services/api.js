const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

export async function fetchFilings() {
  const response = await fetch(`${API_BASE_URL}/filings`)

  if (!response.ok) {
    throw new Error('Failed to load filings')
  }

  return response.json()
}

export async function createFiling(payload) {
  const response = await fetch(`${API_BASE_URL}/filings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ filing: payload }),
  })

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}))
    throw new Error(errorBody.errors?.join(', ') || 'Failed to create filing')
  }

  return response.json()
}

export async function updateFiling(id, payload) {
  const response = await fetch(`${API_BASE_URL}/filings/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ filing: payload }),
  })

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}))
    throw new Error(errorBody.errors?.join(', ') || 'Failed to update filing')
  }

  return response.json()
}
