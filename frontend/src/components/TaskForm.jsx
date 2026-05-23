import { useState } from 'react'

const filingTypes = [
  'LLC Formation',
  'Annual Report',
  'Registered Agent Update',
  'Foreign Qualification',
  'Amendment',
  'Dissolution',
]

const initialValues = {
  companyName: '',
  state: '',
  filingType: filingTypes[0],
  dueDate: '',
  notes: '',
}

function TaskForm({ onSubmit, submitLabel = 'Add filing' }) {
  const [form, setForm] = useState(initialValues)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    onSubmit({
      company_name: form.companyName,
      state: form.state.toUpperCase(),
      filing_type: form.filingType,
      due_date: form.dueDate,
      notes: form.notes,
      status: 'Not Started',
    })

    setForm(initialValues)
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label>
          Company
          <input
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            placeholder="Example Co."
            required
          />
        </label>
        <label>
          State
          <input
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="CA"
            maxLength={2}
            required
          />
        </label>
      </div>

      <div className="field-row">
        <label>
          Filing type
          <select name="filingType" value={form.filingType} onChange={handleChange}>
            {filingTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label>
          Due date
          <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} required />
        </label>
      </div>

      <label>
        Notes
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows="3"
          placeholder="Internal notes, agent, or next action"
        />
      </label>

      <button type="submit" className="primary-button">
        {submitLabel}
      </button>
    </form>
  )
}

export default TaskForm
