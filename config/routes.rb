Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root to: redirect('sessions/sign_in')

  get "sessions/sign_in"
  get "sessions/create_account"
  post "sessions/create_session"
  post "sessions/create_user"

  get "homepage/home"
  get "home" => "homepage#home", :as => "home"

end
