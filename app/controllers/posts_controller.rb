class PostsController < ApplicationController
  skip_before_action :authorize, only: [:index, :show]
  before_action :set_post, only: %i[ show update destroy ]


  # GET /posts
  def index
    @posts = Post.all

    render json: @posts
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    @post = @current_user.posts.create!(post_params)
    render json: @post
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private
 
    def set_post
      # @post = Post.find(params[:id])
      @post = @current_user.posts.find(params[:id])

    end


    def post_params
      params.permit(:content, :user_id)
    end
end
