class RidesharesController < ApplicationController
  before_action :set_rideshare, only: [:show, :edit, :update, :destroy]
  # before_action :authenticate_user!, except: [:index]
  respond_to :js, :json, :html

  def index
    @rideshares = Rideshare.all
  end

  def show
  end

  def new
    @rideshare = Rideshare.new
  end

  def create
    if user_signed_in? 
      @rideshare = current_user.rideshares.build(rideshare_params)
      @rideshare.save
      redirect_to rideshares_path
    else
      redirect_to new_user_session_path
    end
  end


  def edit
  end

  def update
    @rideshare.update(rideshare_params)
    if @rideshare.update(rideshare_params)
      redirect_to @rideshare
    else
      render :edit
    end
  end

  def destroy
    @rideshare.destroy
    redirect_to rideshares_path
  end

 

  private

    def rideshare_params
      params.require(:rideshare).permit(:id, :user_id, :from_id, :to_id, :days, :start_date,
      :end_date, :dep_at, :arr_at, :seat, from_attributes: [:name, :lat, :lng], to_attributes: [:name, :lat, :lng])
    end


    def set_rideshare
      @rideshare = Rideshare.find(params[:id])
    end

end
