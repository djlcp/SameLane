class PlacesController < ApplicationController
  before_action :set_place, only: [:show, :edit, :update, :destroy]
  # before_action :authenticate_user!, except: [:index]
  def index
    @places = Place.all
  end

  def show
  end

  def new
    @place = Place.new
    # @place.rideshares.build
  end

  def create
    @place = Place.new(place_params)
    if @place.save
      redirect_to @place
    else
      render :new
    end
    # redirect_to @place
  end

  def edit
  end

  def update
    @place.update(place_params)
    if @place.update(place_params)
      redirect_to @place
    else
      render :edit
    end
  end

 
  def destroy
    @place.destroy
    redirect_to places_path
  end

  private

    def place_params
      params.require(:place).permit(:id, :name, :parish, :lat, :lng,
      rideshares_attributes: [:id, :user_id, :from_id, :to_id, :days, :start_date,
      :end_date, :dep_at, :arr_at, :seat])
    end

    def set_place
      @place = Place.find(params[:id])
    end
end
