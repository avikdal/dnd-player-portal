class CampaignSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :dungeon_master_id

  has_many :characters
  has_many :users, through: :characters

end
