require 'test_helper'

class UserRidesharesControllerTest < ActionDispatch::IntegrationTest
  test "should get current" do
    get user_rideshares_current_url
    assert_response :success
  end

  test "should get history" do
    get user_rideshares_history_url
    assert_response :success
  end

end
