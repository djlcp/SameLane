module RidesharesHelper
  def checked(area)
    @rideshare.days.nil? ? false : @rideshare.days.match(area)
  end
end
