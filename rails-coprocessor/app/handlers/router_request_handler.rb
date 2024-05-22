class RouterRequestHandler
    def self.handle(request, logger)
        # This is the object sent by the Router that you can act upon to update headers, context, auth claims, etc
        # If you update the "control" property from "Continue" to something like { "break": 400 }, it will terminate the request and return the specified HTTP error
        # See: https://www.apollographql.com/docs/router/customizations/coprocessor/
        logger.debug request.raw_post
    end
end
        