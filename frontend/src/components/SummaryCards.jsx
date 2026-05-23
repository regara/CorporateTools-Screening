const statusLabels = {
  total: 'Total filings',
  dueSoon: 'Due soon',
  filed: 'Filed',
  rejected: 'Rejected',
}

function SummaryCards({ filings }) {
  const dueSoonCount = filings.filter((filing) => {
    const dueDate = new Date(filing.due_date)
    const today = new Date()
    const diff = dueDate - today
    return diff >= 0 && diff <= 7 * 24 * 60 * 60 * 1000
  }).length

  return (
    <section className="summary-grid">
      <article className="summary-card">
        <p className="summary-label">{statusLabels.total}</p>
        <h2>{filings.length}</h2>
      </article>
      <article className="summary-card">
        <p className="summary-label">{statusLabels.dueSoon}</p>
        <h2>{dueSoonCount}</h2>
      </article>
      <article className="summary-card">
        <p className="summary-label">{statusLabels.filed}</p>
        <h2>{filings.filter((filing) => filing.status === 'Filed').length}</h2>
      </article>
      <article className="summary-card">
        <p className="summary-label">{statusLabels.rejected}</p>
        <h2>{filings.filter((filing) => filing.status === 'Rejected').length}</h2>
      </article>
    </section>
  )
}

export default SummaryCards
