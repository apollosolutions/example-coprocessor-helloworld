require_relative "./../handlers/router_request_handler"

class RouterController < ApplicationController
    def stage
        case params['stage']
        when 'RouterRequest'
            RouterRequestHandler.handle(request, logger)
        else
            logger.error 'No valid stage provided'
        end

        render :json => request.raw_post
    end
    def index
        @message = "Please visit the Apollo docs to learn more about coprocessing: https://www.apollographql.com/docs/router/customizations/coprocessor/"
    end
end