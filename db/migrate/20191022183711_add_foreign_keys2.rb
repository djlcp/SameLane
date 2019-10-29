class AddForeignKeys2 < ActiveRecord::Migration[6.0]
  def change
    add_foreign_key :rideshares, :places, column: :to_id
    add_foreign_key :rideshares, :places, column: :from_id
  end
end
