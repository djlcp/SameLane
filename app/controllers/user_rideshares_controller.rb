class UserRidesharesController < ApplicationController

	def current
		@rideshares = Rideshare.current(current_user).filter { |rs| rs.end_date > Time.now }
	end

	def history
      @rideshares = Rideshare.current(current_user).filter { |rs| rs.end_date.at_end_of_day < Time.now }
    end
end
