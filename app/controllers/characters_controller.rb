class CharactersController < ApplicationController
  skip_before_action :authorize, only: [:index, :show]

  before_action :set_character, only: %i[ show update destroy ]
  before_action :check_ownership, only: %i[update destroy]

  # GET /characters
  def index
    @characters = Character.all

    render json: @characters
  end

  # GET /characters/1
  def show
    render json: @character
  end

  # POST /characters
  def create
    @character = @current_user.characters.create!(character_params)
    render json: @character
  end

  # PATCH/PUT /characters/1
  def update
    if @character.update(character_params)
      render json: @character
    else
      render json: @character.errors, status: :unprocessable_entity
    end
  end

  # DELETE /characters/1
  def destroy
    @character.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_character
      @character = Character.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def character_params
      params.permit(:character_class, :race, :alignment, :name, :image, :campaign_id)
    end

    def check_ownership
      unless @character.user == @current_user
        render json: { error: 'You do not have permission to perform this action' }, status: :forbidden
      end
    end
end
