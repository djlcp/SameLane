class Place < ApplicationRecord
  has_many :rideshares2, :foreign_key => 'from_id'
  has_many :rideshares, :foreign_key => 'to_id'
  accepts_nested_attributes_for :rideshares, :rideshares2
end
