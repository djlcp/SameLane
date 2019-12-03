class ChangeDaysToStringInRideshare < ActiveRecord::Migration[6.0]
  def change
    change_column :rideshares, :days, :string
  end
end
