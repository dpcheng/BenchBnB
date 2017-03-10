class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      log_in(@user)
      render :show
    else
      @errors = @user.errors
      render json: @errors, status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end