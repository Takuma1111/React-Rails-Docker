class PhotosController < ApplicationController
    def index
        @photo = Photo.all
        render json: {
          photos: @photo
        }, status: :ok
      end
    
      def create
        @photo = Photo.create(photo: params[:photo])
        render json: @photo
      end
      
      def show
        @photo = Photo.find(params[:id])
        puts "受け取ったID"
        puts params[:id]
        puts @photo
        render json: @photo
      end

      def update
        @photo = Photo.find(params[:id])
        @photo.update_attributes(photo: params[:photo])
        render json: @photo
      end
    
      def destroy
        @photo = Photo.find(params[:id])
        if @photo.destroy
          head :no_content, status: :ok
        else
          render json: @photo.errors, status: :unprocessable_entity
        end
      end
end
