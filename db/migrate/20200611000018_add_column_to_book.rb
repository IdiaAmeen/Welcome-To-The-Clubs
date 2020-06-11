class AddColumnToBook < ActiveRecord::Migration[6.0]
  def change
    add_column :books, :author, :string
    add_column :books, :description, :string
    rename_column :books, :name , :title
  end
end
