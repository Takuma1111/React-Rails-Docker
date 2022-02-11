# サインアップ、サインイン、サインアウトを実行するAPIコントローラー
class Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
    
    private
    def sign_up_params
      # サインアップ時に登録できるカラムを指定
      params.permit(:email, :password, :password_confirmation,:session)
    end
    
    def resource_params
        params.permit(devise_parameter_sanitizer.for(:session))
    end
end