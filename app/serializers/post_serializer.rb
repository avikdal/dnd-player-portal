class PostSerializer < ActiveModel::Serializer
  attributes :id, :content

  belongs_to :user
end
