class SessionsController < ApplicationController

  def sign_in
  end

  def create_account
  end

  def create_session
    username = params[:username]
    password = params[:password]
    puts "SIGNING IN"
    puts username
    puts password
  end

  def create_user
    puts "CREATE USER"
  end

end
