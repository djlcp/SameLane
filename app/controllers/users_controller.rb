class UsersController < ApplicationController

  before_action :set_user, only: [:show, :destroy, :rides]
  respond_to :js, :json, :html
  
  def index 
    @users = User.all 
  end

  def show
  end

  def destroy
    @user.destroy
    redirect_to users_path
  end

  def rides
    @rideshares = @user.rideshares
  end

  private

    def set_user
      @user = User.find(params[:id])
    end
end
