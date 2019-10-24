class Place < ApplicationRecord
  has_many :rideshares2, class_name => 'Rideshare', :foreign_key => 'from_id'
  has_many :rideshares, class_name => 'Rideshare', :foreign_key => 'to_id'
end
