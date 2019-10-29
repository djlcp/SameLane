class RegistrationsController < Devise::RegistrationsController

  protected
  
# Sends the user to a profile page
    def after_update_path_for(resource)
      user_path(resource)
    end
    
end