class CampaignsController < ApplicationController
  skip_before_action :authorize, only: [:index, :show]
  before_action :set_campaign, only: %i[ show update destroy ]

  # GET /campaigns
  def index
    @campaigns = Campaign.all

    render json: @campaigns
  end

  # GET /campaigns/1
  def show
    render json: @campaign
  end

  # POST /campaigns
  def create
    @campaign = @current_user.dungeon_master_campaigns.create!(campaign_params)
    render json: @campaign
    # if @campaign.save
    #   render json: @campaign, status: :created, location: @campaign
    # else
    #   render json: @campaign.errors, status: :unprocessable_entity
    # end
  end

  # PATCH/PUT /campaigns/1
  def update
    if @campaign.update(campaign_params)
      render json: @campaign
    else
      render json: @campaign.errors, status: :unprocessable_entity
    end
  end

  # DELETE /campaigns/1
  def destroy
    @campaign.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_campaign
      @campaign = Campaign.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def campaign_params
      params.permit(:title, :description)
    end
end
