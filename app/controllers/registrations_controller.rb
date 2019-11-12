class RegistrationsController < Devise::RegistrationsController

  protected
  
# GO/ Sends the user to a profile page
    def after_update_path_for(resource)
      user_path(resource)
    end
    
    def after_sign_in_path_for(resource)
      user_path(resource)
    end
    
end