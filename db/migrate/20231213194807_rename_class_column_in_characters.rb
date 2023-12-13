class RenameClassColumnInCharacters < ActiveRecord::Migration[7.0]
  def change
    rename_column :characters, :class, :character_class
  end
end
