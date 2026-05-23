class CreateFilingTasks < ActiveRecord::Migration[8.1]
  def change
    create_table :filing_tasks do |t|
      t.string :company_name, null: false
      t.string :state, null: false
      t.string :filing_type, null: false
      t.string :status, null: false
      t.date :due_date, null: false
      t.text :notes

      t.timestamps
    end
  end
end
