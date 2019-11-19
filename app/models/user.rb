class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable
  
  has_many :messages 
  has_many :rideshares
  has_many :passengers

  protected
    def confirmation_required?
      false
    end
    
end
