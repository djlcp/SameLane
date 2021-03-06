class RidesharesController < ApplicationController
  
	before_action :set_rideshare, only: [:show, :edit, :update, :destroy]
	before_action :owner_check, only: [:edit, :update, :destroy]
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
			redirect_to @rideshare
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
		redirect_to search_rideshares_path
	end

	def self.search(search)
		search.present? and all(:conditions => [ 'name LIKE ?', "%#{search.strip}%" ])
	end

	def search
		
		if params[:search]
			params.require(:search).permit(:from, :to, :date, :time, :search)
			@rideshares = Rideshare.search(
				from: params[:search][:from],
				to: params[:search][:to],
				date: params[:search][:date],
				time: params[:search][:time]
			)
		else
			@rideshares = Rideshare.search(
				from: '',
				to: ''
			)
		end

	end

	private

	def owner_check
		unless @rideshare.user === current_user
			flash[:alert] = "Unauthorized"
			redirect_back fallback_location: root_path
		end
	end

    def rideshare_params
      # params[:rideshare][:days] ||= []
      params.require(:rideshare).permit(:id, :user_id, :from_id, :to_id, {days: []}, :start_date,
      :end_date, :dep_at, :arr_at, :seat, from_attributes: [:name, :lat, :lng], to_attributes: [:name, :lat, :lng])
    end

	def set_rideshare
		@rideshare = Rideshare.find(params[:id])
	end

end
