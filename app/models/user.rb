class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable, :trackable
  
  has_many :messages 
  has_many :rideshares
  has_many :passengers
  has_one_attached :avatar

  protected
    def confirmation_required?
      true
    end
    
end
