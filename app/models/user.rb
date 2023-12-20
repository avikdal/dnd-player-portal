class User < ApplicationRecord
    has_secure_password
    
    has_many :characters, dependent: :destroy
    has_many :campaigns, through: :characters
    has_many :dungeon_master_campaigns, class_name: 'Campaign', foreign_key: 'dungeon_master_id', dependent: :destroy
    has_many :posts, dependent: :destroy

    validates :username, uniqueness: true, presence: true
end
