# frozen_string_literal: true

class Rideshare < ApplicationRecord
  belongs_to :user, class_name: 'User', foreign_key: 'user_id'
  belongs_to :from, class_name: 'Place', foreign_key: 'from_id', optional: true
  belongs_to :to, class_name: 'Place', foreign_key: 'to_id', optional: true

  has_many :messages
  has_many :passengers

  accepts_nested_attributes_for :from
  accepts_nested_attributes_for :to

  def self.search(from: nil, to: nil, date: nil, time: nil)
    Rideshare.where(start_date: date)
  end
end
