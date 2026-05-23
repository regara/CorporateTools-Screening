# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

FilingTask.destroy_all
FilingTask.create!([
	{
		company_name: "Acme Widgets LLC",
		state: "CA",
		filing_type: "LLC Formation",
		status: "Filed",
		due_date: Date.today - 10,
		notes: "Filed by Jane."
	},
	{
		company_name: "Blue Sky Holdings",
		state: "WA",
		filing_type: "Annual Report",
		status: "Not Started",
		due_date: Date.today + 20,
		notes: "Due soon."
	},
	{
		company_name: "Sunrise Bakery",
		state: "TX",
		filing_type: "Registered Agent Update",
		status: "In Progress",
		due_date: Date.today + 5,
		notes: "Waiting on agent signature."
	},
	{
		company_name: "Green Leaf Farms",
		state: "OR",
		filing_type: "Foreign Qualification",
		status: "Rejected",
		due_date: Date.today - 2,
		notes: "Missing certificate."
	},
	{
		company_name: "Peak Tech Inc.",
		state: "CO",
		filing_type: "Amendment",
		status: "Not Started",
		due_date: Date.today + 12,
		notes: "Add new director."
	},
	{
		company_name: "Riverstone LLC",
		state: "NY",
		filing_type: "Dissolution",
		status: "In Progress",
		due_date: Date.today + 3,
		notes: "Final paperwork sent."
	},
	{
		company_name: "Urban Roots",
		state: "IL",
		filing_type: "Annual Report",
		status: "Filed",
		due_date: Date.today - 1,
		notes: "Filed online."
	},
	{
		company_name: "North Star Logistics",
		state: "MN",
		filing_type: "LLC Formation",
		status: "Not Started",
		due_date: Date.today + 30,
		notes: "Client reviewing docs."
	},
	{
		company_name: "Cedar Ridge Partners",
		state: "UT",
		filing_type: "Registered Agent Update",
		status: "Rejected",
		due_date: Date.today - 5,
		notes: "Incorrect address."
	},
	{
		company_name: "Bright Path Consulting",
		state: "FL",
		filing_type: "Foreign Qualification",
		status: "In Progress",
		due_date: Date.today + 7,
		notes: "Waiting on state approval."
	},
	{
		company_name: "Summit Outdoor Gear",
		state: "NV",
		filing_type: "Amendment",
		status: "Filed",
		due_date: Date.today - 3,
		notes: "Name change complete."
	},
	{
		company_name: "Harborview Realty",
		state: "MA",
		filing_type: "Dissolution",
		status: "Not Started",
		due_date: Date.today + 15,
		notes: "Pending board approval."
	}
])
