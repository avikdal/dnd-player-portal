class Campaign < ApplicationRecord
    belongs_to :dungeon_master, class_name: 'User'
    has_many :characters
    has_many :users, through: :characters
end


