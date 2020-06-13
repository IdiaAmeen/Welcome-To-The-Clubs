class AddColumnToClubs < ActiveRecord::Migration[6.0]
  def change
    add_column :clubs, :image, :string
    add_column :clubs, :description, :string
  end
end
