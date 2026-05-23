class FilingsController < ApplicationController
  def index
    filings = FilingTask.order(due_date: :asc, created_at: :desc)
    render json: filings
  end

  def create
    filing = FilingTask.new(filing_params)

    if filing.save
      render json: filing, status: :created
    else
      render json: { errors: filing.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    filing = FilingTask.find(params[:id])

    if filing.update(filing_params)
      render json: filing
    else
      render json: { errors: filing.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def filing_params
    params.expect(filing: [:company_name, :state, :filing_type, :status, :due_date, :notes])
  end
end
