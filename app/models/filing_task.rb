class FilingTask < ApplicationRecord
  STATUSES = ["Not Started", "In Progress", "Filed", "Rejected"].freeze
  FILING_TYPES = [
    "LLC Formation",
    "Annual Report",
    "Registered Agent Update",
    "Foreign Qualification",
    "Amendment",
    "Dissolution"
  ].freeze

  validates :company_name, :state, :filing_type, :status, :due_date, presence: true
  validates :status, inclusion: { in: STATUSES }
  validates :filing_type, inclusion: { in: FILING_TYPES }
end
