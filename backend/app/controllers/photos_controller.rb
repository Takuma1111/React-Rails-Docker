class PhotosController < ApplicationController
    def index
        @photo = Photo.all
        render json: {
          photos: @photo
        }, status: :ok
      end
    
      def create
        puts "渡されたパラメータ"
        puts post_params[:url]
        puts "ここまで"
        uploaded_file = post_params[:url]
      
        output_path = Rails.root.join('public', uploaded_file.original_filename)
        File.open(output_path, 'w+b') do |fp|
          fp.write  uploaded_file.read
        end

        photo1111 = Photo.new(post_params)

        photo1111[:url] = output_path

        puts "代入したパラメータ"
          puts photo1111[:url]
        puts "ここまで"

        puts "全体のパラメータ"
        puts photo1111[:url]
        puts photo1111[:name]
        puts photo1111[:text]
      puts "ここまで"
        if photo1111.save
          render json: photo1111  
        else
          render json: photo1111.errors
        end
        # @photo = Photo.create(photo: params[:photo])
        
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
      private

      def post_params
        params.permit(:id,:user_id,:name,:text,:url,:created_at,:updated_at)
      end
