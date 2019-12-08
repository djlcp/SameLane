class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?

  include Pundit
  protect_from_forgery

  def after_sign_in_path_for(resource)
    stored_location_for(resource) || user_rideshares_current_path
  end

    protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:first_name, :last_name, :phone_number, :email, :password, :password_confirmation)}

      devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:first_name, :last_name, :phone_number, :email, :password, :password_confirmation, :current_password, :avatar)}
    end
end
