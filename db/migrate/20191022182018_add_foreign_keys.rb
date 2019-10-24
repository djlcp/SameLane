class AddForeignKeys < ActiveRecord::Migration[6.0]
  def change
    change_column :passengers, :user_id, :bigint
    change_column :rideshares, :user_id, :bigint
    change_column :messages, :user_id, :bigint
    change_column :messages, :rideshare_id, :bigint
    change_column :passengers, :rideshare_id, :bigint
    change_column :rideshares, :to_id, :bigint
    change_column :rideshares, :from_id, :bigint


    add_foreign_key :passengers, :users
    add_foreign_key :rideshares, :users
    add_foreign_key :messages, :users
    add_foreign_key :passengers, :rideshares
    add_foreign_key :messages, :rideshares
  end
end
