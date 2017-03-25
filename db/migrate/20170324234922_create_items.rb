class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :company
      t.string :category
      t.integer :amount
      t.integer :cardinality
      t.string :unit
      t.date :due_date
      t.timestamps
    end
  end
end
