# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :photos
  has_many :sounds
  has_many  :movies

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,:confirmable
  include DeviseTokenAuth::Concerns::User
end
