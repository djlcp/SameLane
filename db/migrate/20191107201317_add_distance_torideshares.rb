class AddDistanceTorideshares < ActiveRecord::Migration[6.0]
  def change
    add_column :rideshares, :distance, :decimal
    add_column :rideshares, :travel_time, :integer
  end
end
