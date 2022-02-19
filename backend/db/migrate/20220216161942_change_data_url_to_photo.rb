class ChangeDataUrlToPhoto < ActiveRecord::Migration[6.0]
  def change
    change_column :photos, :url, :string
  end
end
