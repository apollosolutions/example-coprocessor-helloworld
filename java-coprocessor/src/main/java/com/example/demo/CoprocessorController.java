package com.example.demo;

import com.example.demo.Models.RouterRequestBody;
import org.springframework.web.bind.annotation.*;

import com.example.demo.RequestHandlers.RouterRequest;

@RestController
public class CoprocessorController {
    private final RouterRequest routerRequestHandler;

    public CoprocessorController() {
        this.routerRequestHandler = new RouterRequest();
    }

    @PostMapping("/")
    public RouterRequestBody StageSelect(@RequestBody RouterRequestBody request) {
        String stage = request.getStage();

        switch (stage) {
            case "RouterRequest":
                request = routerRequestHandler.handle(request);
                break;
        }

        return request;
    }
}
