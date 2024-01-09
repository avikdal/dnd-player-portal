class Campaign < ApplicationRecord
    belongs_to :dungeon_master, class_name: 'User'
    has_many :characters
    has_many :users, through: :characters

    validates :title, length: { minimum: 10 }, uniqueness: true, presence: true
    validates :description, length: { in: 20..500 }, presence: true

end


