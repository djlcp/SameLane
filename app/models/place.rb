class Place < ApplicationRecord
  has_many :rideshares2, :foreign_key => 'from_id'
  has_many :rideshares, :foreign_key => 'to_id'
end
