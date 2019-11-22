class PassengersController < ApplicationController
  


  def index
    @passengers = Passenger.all
  end

  def show
  end 
  
  def new
    @passenger = Passenger.new
  end

  def create
    passenger = Passenger.new(
      user: current_user,
      rideshare_id: params[:id]
    )
    passenger.save if passenger.valid?

    redirect_to rideshare_path(params[:id])
  end

  def edit
  end

  def update
  end

  def destroy
  end

end