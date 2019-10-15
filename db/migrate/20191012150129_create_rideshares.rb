class CreateRideshares < ActiveRecord::Migration[6.0]
  def change
    create_table :rideshares do |t|
      t.integer :user_id
      t.integer :from_id
      t.integer :to_id
      t.integer :days
      t.datetime :start_date
      t.datetime :end_date
      t.datetime :dep_at
      t.datetime :arr_at
      t.integer :seat

      t.timestamps
    end
  end
end
