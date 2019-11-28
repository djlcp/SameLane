class StaticPagesController < ApplicationController
  def home
    @rideshares = Rideshare.order("RANDOM()").limit(10)

  end
end
