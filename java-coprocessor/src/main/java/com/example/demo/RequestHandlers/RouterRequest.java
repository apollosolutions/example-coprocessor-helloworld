package com.example.demo.RequestHandlers;

import com.example.demo.Models.RouterRequestBody;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.UUID;

public class RouterRequest {
    public RouterRequestBody handle(RouterRequestBody request) {
        // This is the object sent by the Router that you can act upon to update headers, context, auth claims, etc
        // If you update the "control" property from "Continue" to something like { "break": 400 }, it will terminate the request and return the specified HTTP error
        // See: https://www.apollographql.com/docs/router/customizations/coprocessor/
        // The object sent by the Router has been mapped to a `RouterRequestBody` object by the `@RequestBody` annotation in the `CoprocessorController` class
        System.out.println(request.getHeaders());
        System.out.println(request.getMethod());
        System.out.println(request.getContext().getEntries());
        System.out.println(request.getSDL());
        System.out.println(request.getVersion());
        System.out.println(request.getBody());
        System.out.println(request.getStage());
        System.out.println(request.getPath());
        System.out.println(request.getControl());
        System.out.println(request.getId());

        return request;
    }
}
