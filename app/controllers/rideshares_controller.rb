class RidesharesController < ApplicationController
  before_action :set_rideshare, only: [:show, :edit, :update, :destroy]

  def index
    @rideshares = Rideshare.all
    respond_to do |format|
      format.html { render :index }
      format.json do
        rideshares = Rideshare.all
        render json: rideshares
      end
    end
  end

  def show
  end

  def new
    @rideshare = Rideshare.new
  end

  def create
    @rideshare = current_user.rideshares.build(rideshare_params)
    @rideshare.save
    redirect_to rideshares_path
  end

  def edit
  end

  def update
    @rideshare.update(rideshare_params)
    redirect_to @rideshare
  end

  def destroy
    @rideshare.destroy
    redirect_to rideshares_path
  end

  def search
    puts params[:search]
  end

  private

    def rideshare_params
      params.require(:rideshare).permit(:id, :user_id, :from_id, :to_id, :days, :start_date,
      :end_date, :dep_at, :arr_at, :seat)
    end


    def set_rideshare
      @rideshare = Rideshare.find(params[:id])
    end

end
