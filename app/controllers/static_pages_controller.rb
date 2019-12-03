class StaticPagesController < ApplicationController
  def home
    
    @rideshares = Rideshare.order("RAND()").limit(10)

  end
end
