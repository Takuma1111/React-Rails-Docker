class SoundsController < ApplicationController
    def index
        @sound = Sound.all
        render json: {
          sounds: @sound
        }, status: :ok
      end
    
      def create
        @sound = Sound.create(sound: params[:sound])
        render json: @sound
      end

      def show
        @sound = Sound.find(params[:id])
        puts "受け取ったID"
        puts params[:id]
        puts @sound
        render json: @sound
      end
    
      def update
        @sound = Sound.find(params[:id])
        @sound.update_attributes(sound: params[:sound])
        render json: @sound
      end
    
      def destroy
        @sound = Sound.find(params[:id])
        if @sound.destroy
          head :no_content, status: :ok
        else
          render json: @sound.errors, status: :unprocessable_entity
        end
      end
end
