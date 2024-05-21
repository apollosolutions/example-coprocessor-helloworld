class RouterController < ApplicationController
    def stage
        @message = "hi mom"
    end
    def index
        @message = "Welcome to your coprocessor, to learn more about coprocessors visit our docs: https://www.apollographql.com/docs/router/customizations/coprocessor/"
    end
end