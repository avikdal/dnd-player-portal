
class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

    #login
    def create
      user = User.find_by(username: params[:username])
      # binding.pry
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :ok
      else
        render json: { error: 'Invalid username or password' }, status: :unauthorized
      end
    end
  
    def destroy
      session[:user_id] = nil
      head :no_content
    end
  end
  
