class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio
  
  has_many :posts
  has_many :characters
  has_many :campaigns, through: :characters

end
