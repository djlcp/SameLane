Rails.application.routes.draw do
 
 
  root 'static_pages#home'
  devise_for :users, controllers: { registrations: :registrations }
 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users
  resources :places 
  resources :rideshares

  get 'users/:id/rideshares', to: 'users#rideshares', as: 'user_rideshares'
  
end
