Rails.application.routes.draw do
 
 
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root 'static_pages#home'
  devise_for :users, controllers: { registrations: :registrations }
 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, except: :show
  resources :places 
  resources :rideshares

  get 'users/:id', to: 'users#show', as: 'user_profile'
  get 'users/:id/rides', to: 'users#rides', as: 'user_rides'
  
end
