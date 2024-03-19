package com.example.demo.RequestHandlers;

import com.example.demo.Models.RouterRequestBody;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.UUID;

public class RouterRequest {
    public RouterRequestBody handle(RouterRequestBody request) {
        // In this Java sample, we are mapping the request sent by the router to a model called "RouterRequestBody"
        // Please review that class in the "Models" folder to review what you're able to retrieve at this stage
        // If you update the "control" property from "Continue" to something like { "break": 400 }, it will terminate the request and return the specified HTTP error
        // See: https://www.apollographql.com/docs/router/customizations/coprocessor/
        System.out.println(request.getControl());

        return request;
    }
}
