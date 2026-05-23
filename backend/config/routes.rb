Rails.application.routes.draw do
  resources :filings, only: [:index, :create, :update]

  get "up" => "rails/health#show", as: :rails_health_check
end
