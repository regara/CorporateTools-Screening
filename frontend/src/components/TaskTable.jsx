const statusOptions = ['Not Started', 'In Progress', 'Filed', 'Rejected']

function TaskTable({ filings, selectedStatus, onUpdateStatus }) {
  const filteredFilings = selectedStatus === 'All'
    ? filings
    : filings.filter((filing) => filing.status === selectedStatus)

  if (filteredFilings.length === 0) {
    return (
      <div className="empty-state">
        <p>No filings found. Either everything is done or the paperwork goblin is hiding it.</p>
      </div>
    )
  }

  return (
    <div className="table-wrapper">
      <table className="filing-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>State</th>
            <th>Type</th>
            <th>Status</th>
            <th>Due</th>
            <th>Notes</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {filteredFilings.map((filing) => (
            <tr key={filing.id}>
              <td>{filing.company_name}</td>
              <td>{filing.state}</td>
              <td>{filing.filing_type}</td>
              <td>
                <span className={`status-pill status-${filing.status.replace(/\s+/g, '-').toLowerCase()}`}>
                  {filing.status}
                </span>
              </td>
              <td>{new Date(filing.due_date).toLocaleDateString()}</td>
              <td>{filing.notes || '-'}</td>
              <td>
                <select
                  value={filing.status}
                  onChange={(event) => onUpdateStatus(filing.id, event.target.value)}
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TaskTable
