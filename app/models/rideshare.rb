class Rideshare < ApplicationRecord
  belongs_to :user, :class_name => 'User', :foreign_key => 'user_id'
  belongs_to :from, :class_name => 'Place', :foreign_key => 'from_id', optional: true
  belongs_to :to, :class_name => 'Place', :foreign_key => 'to_id', optional: true

  has_many :messages
  has_many :passengers
end
