import { useEffect, useState } from 'react'
import './App.css'
import SummaryCards from './components/SummaryCards'
import TaskForm from './components/TaskForm'
import TaskTable from './components/TaskTable'
import { createFiling, fetchFilings, updateFiling } from './services/api'

const statusOptions = ['All', 'Not Started', 'In Progress', 'Filed', 'Rejected']

function App() {
  const [filings, setFilings] = useState([])
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const loadFilings = async () => {
    setIsLoading(true)
    setError('')

    try {
      const data = await fetchFilings()
      setFilings(data)
    } catch (loadError) {
      setError(loadError.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadFilings()
  }, [])

  const handleCreate = async (payload) => {
    try {
      await createFiling(payload)
      await loadFilings()
    } catch (createError) {
      setError(createError.message)
    }
  }

  const handleUpdateStatus = async (id, status) => {
    try {
      await updateFiling(id, { status })
      await loadFilings()
    } catch (updateError) {
      setError(updateError.message)
    }
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Operations sample</p>
          <h1>Business Filing Tracker</h1>
          <p className="subcopy">
            A small operations dashboard for tracking filings, priorities, and status changes.
          </p>
        </div>
      </header>

      <SummaryCards filings={filings} />

      <section className="panel-grid">
        <section className="panel">
          <div className="section-header">
            <div>
              <p className="eyebrow">Add a filing</p>
              <h2>New filing entry</h2>
            </div>
          </div>
          <TaskForm onSubmit={handleCreate} />
        </section>

        <section className="panel">
          <div className="section-header">
            <div>
              <p className="eyebrow">Track the queue</p>
              <h2>Filings overview</h2>
            </div>
            <div className="filter-row">
              {statusOptions.map((status) => (
                <button
                  key={status}
                  type="button"
                  className={selectedStatus === status ? 'filter-chip active' : 'filter-chip'}
                  onClick={() => setSelectedStatus(status)}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {error ? <p className="error-message">{error}</p> : null}

          {isLoading ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <p className="loading-text">Loading your filings...</p>
              <p className="loading-subtext">This may take a moment while the backend spins up</p>
            </div>
          ) : (
            <TaskTable
              filings={filings}
              selectedStatus={selectedStatus}
              onUpdateStatus={handleUpdateStatus}
            />
          )}
        </section>
      </section>
    </div>
  )
}

export default App
