class Passenger < ApplicationRecord
  belongs_to :user
  belongs_to :rideshare

  validates :user_id, presence: true
  validate :passenger_join_ride

  private
  def passenger_join_ride
    if rideshare.passengers.map(&:user).include?(self.user)
      errors.add(:user, 'Request already sent')
    end
  end
end
