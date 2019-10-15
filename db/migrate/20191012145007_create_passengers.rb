class CreatePassengers < ActiveRecord::Migration[6.0]
  def change
    create_table :passengers do |t|
      t.integer :user_id
      t.integer :rideshare_id

      t.timestamps
    end
  end
end
