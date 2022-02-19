require 'carrierwave/storage/abstract'
require 'carrierwave/storage/file'
require 'carrierwave/storage/fog'
 
# unless Rails.env.development? || Rails.env.test?
    CarrierWave.configure do |config|
        config.asset_host = "http://localhost:3001"
        config.storage = :file
        config.cache_storage = :file
      config.fog_provider = 'fog/aws' 
    #   config.storage :fog
      config.fog_directory  = 'rails-data'       
                 
      config.fog_credentials = {
        provider: 'AWS',
        aws_access_key_id: ENV['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'],
        region: ENV['AWS_REGION']
      }
    # The maximum period for authenticated_urls is only 7 days.
    # config.aws_authenticated_url_expiration = 60 * 60 * 24 * 7
 
    # Set custom options such agit s cache control to leverage browser caching
    # config.aws_attributes = {
    #   expires: 1.week.from_now.httpdate,
    #   cache_control: 'max-age=604800'
    # }
    #   config.fog_public     = false                                                
    #   config.fog_attributes = { cache_control: "public, max-age=#{365.days.to_i}" }
    #   config.fog_directory  = 'rails-data'
    #   config.cache_storage = :fog
    # end
  end

#   CarrierWave::SanitizedFile.sanitize_regexp = /[^[:word:]\.\-\+]/
