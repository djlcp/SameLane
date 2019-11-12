class StaticPagesController < ApplicationController
  def home
    @rideshares = Rideshare.order("RANDOM()").limit(10)

    if params[:search]
      @rideshares = Rideshare.search(
        from: params[:search][:from],
        to: params[:search][:to],
        date: params[:search][:date],
        time: params[:search][:time]
      )
    end
  end
end
