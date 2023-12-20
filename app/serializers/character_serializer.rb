class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :character_class, :race, :alignment, :name, :image

  belongs_to :user
  belongs_to :campaign

end
