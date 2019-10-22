class Rideshare < ApplicationRecord
  belongs_to :user, :class_name => 'User', :foreign_key => 'user_id'
  belongs_to :place2, :class_name => 'Place', :foreign_key => 'from_id'
  belongs_to :place, :class_name => 'Place', :foreign_key => 'to_id'

  has_many :messages
  has_many :passengers
end
