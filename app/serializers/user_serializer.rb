class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio
  
  has_many :posts
  has_many :characters
  has_many :campaigns, through: :characters
  has_many :dungeon_master_campaigns

end
