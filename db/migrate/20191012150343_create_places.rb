class CreatePlaces < ActiveRecord::Migration[6.0]
  def change
    create_table :places do |t|
      t.string :address
      t.string :parish
      t.float :lat
      t.float :lng

      t.timestamps
    end
  end
end
