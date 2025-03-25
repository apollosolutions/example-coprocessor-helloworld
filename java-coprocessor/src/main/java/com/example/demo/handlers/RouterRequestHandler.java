package com.example.demo.handlers;

import com.example.demo.models.Body;
import com.example.demo.models.RouterPayload;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.stereotype.Component;

@Component
public class RouterRequestHandler {

    ObjectMapper objectMapper;

    RouterRequestHandler(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public RouterPayload handle(RouterPayload request) {
        ObjectMapper mapper = new ObjectMapper();

        try {
            Body mappedBody = mapper.readValue(request.getBody(), Body.class);

            String variables = mapper.writeValueAsString(mappedBody.getVariables());
            request.getContext().addEntry("variableValues", variables);
        } catch (JsonProcessingException e) {
            // TODO: Implement me
            e.printStackTrace();
        }

        return request;
    }
}
