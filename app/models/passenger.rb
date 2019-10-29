class Passenger < ApplicationRecord
  belongs_to :user, class_name => 'User', :foreign_key => 'user_id'
  belongs_to :rideshare, class_name => 'Rideshare', :foreign_key => 'rideshare_id'
end
