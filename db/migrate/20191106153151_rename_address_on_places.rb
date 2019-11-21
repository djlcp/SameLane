class RenameAddressOnPlaces < ActiveRecord::Migration[6.0]
  def change
    rename_column :places, :address, :name
  end
end
