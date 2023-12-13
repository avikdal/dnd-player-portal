class User < ApplicationRecord
    has_secure_password
    has_many :characters
    has_many :campaigns, through: :characters
    has_many :dungeon_master_campaigns, class_name: 'Campaign', foreign_key: 'dungeon_master_id'
    has_many :posts
end
