# frozen_string_literal: true

class Rideshare < ApplicationRecord
	belongs_to :user, class_name: 'User', foreign_key: 'user_id'
	belongs_to :from, class_name: 'Place', foreign_key: 'from_id', optional: true
	belongs_to :to, class_name: 'Place', foreign_key: 'to_id', optional: true

	has_many :messages
	has_many :passengers

	accepts_nested_attributes_for :from
	accepts_nested_attributes_for :to

	scope :current, -> (user) { (joined(user)|created(user)) }
	scope :joined,  -> (user) { joins(:passengers).where(passengers: {user: user}) }
	scope :created, -> (user) { where(user: user) }
  
    before_save do
        self.days.gsub!(/[\[\]\"]/,"") if attribute_present?("days")
    end
    
	def self.search(from: nil, to: nil, date: nil, time: nil)
		from_ids = Place.where('name LIKE ?', '%' + from + '%').ids
		puts from_ids
		to_ids = Place.where('name LIKE ?', '%' + to + '%').ids
		puts to_ids

		Rideshare.where('from_id IN (?) AND to_id IN (?)', from_ids, to_ids)
	end
end
