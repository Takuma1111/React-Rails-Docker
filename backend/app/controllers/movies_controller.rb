class MoviesController < ApplicationController
    def index
        @movie = Movie.all
        render json: {
          movies: @movie
        }, status: :ok
      end
    
      def create
        @movie = Movie.create(movie: params[:movie])
        render json: @movie
      end
    
      def show
        @movie = Movie.find(params[:id])
        puts "受け取ったID"
        puts params[:id]
        puts @movie
        render json: @movie
      end

      def update
        @movie = Movie.find(params[:id])
        @movie.update_attributes(movie: params[:movie])
        render json: @movie
      end
    
      def destroy
        @movie = Movie.find(params[:id])
        if @movie.destroy
          head :no_content, status: :ok
        else
          render json: @movie.errors, status: :unprocessable_entity
        end
      end
end
