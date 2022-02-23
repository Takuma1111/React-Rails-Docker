require 'carrierwave/storage/abstract'
require 'carrierwave/storage/file'
require 'carrierwave/storage/fog'
 
# unless Rails.env.development? || Rails.env.test?
    CarrierWave.configure do |config|
        if Rails.env.production? # 本番環境の場合はS3へアップロード
            config.storage :fog
            config.fog_provider = 'fog/aws'
            config.fog_directory  = 'rails-data' # バケット名
            config.fog_public = false
            config.fog_credentials = {
              provider: 'AWS',
              aws_access_key_id: 'AKIAZO5KI5H6QQNZ2D6N', # アクセスキー
              aws_secret_access_key: 'c+F38ZldRK9fk1tfz35xk7Jva6lKK5OT7GBfbukR', # シークレットアクセスキー
              region: 'ap-northeast-1', # リージョン
              path_style: true
            }
          else # 本番環境以外の場合はアプリケーション内にアップロード
            config.storage :fog
            config.fog_provider = 'fog/aws'
            config.fog_directory  = 'rails-data' # バケット名
            config.fog_public = false
            config.fog_credentials = {
              provider: 'AWS',
              aws_access_key_id: 'AKIAZO5KI5H6QQNZ2D6N', # アクセスキー
              aws_secret_access_key: 'c+F38ZldRK9fk1tfz35xk7Jva6lKK5OT7GBfbukR', # シークレットアクセスキー
              region: 'ap-northeast-1', # リージョン
              path_style: true
            }
            # config.storage :file
            # config.enable_processing = false if Rails.env.test?
          end
  end

#   CarrierWave::SanitizedFile.sanitize_regexp = /[^[:word:]\.\-\+]/
