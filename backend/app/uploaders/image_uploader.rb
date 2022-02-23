class ImageUploader < CarrierWave::Uploader::Base
  if Rails.env.development?
    storage :file
  elsif Rails.env.test?
    storage :file
  else
    storage :fog
  end
  
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  def extension_whitelist
    %w(jpg jpeg gif png)
  end


  def filename
    original_filename if original_filename
  end
#   if Rails.env.development?
#     storage :aws
#   elsif Rails.env.test?
#     storage :aws
#   else
#     storage :fog
#   end

#   def store_dir
#     "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
#   end

#   def extension_whitelist
#     %w(png jpg)
#   end

#   def filename
#     "#{secure_token}.#{file.extension}" if original_filename.present?
#     # original_filename if original_filename
#   end
#   protected
# # 一意となるトークンを作成
# def secure_token
#    var = :"@#{mounted_as}_secure_token"
#    model.instance_variable_get(var) or model.instance_variable_set(var, SecureRandom.uuid)
# end
end

