class CharactersController < ApplicationController
  skip_before_action :authorize, only: [:index, :show]

  before_action :set_character, only: %i[ show update destroy ]

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
end
