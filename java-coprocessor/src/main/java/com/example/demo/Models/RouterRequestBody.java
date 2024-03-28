package com.example.demo.Models;

import java.util.LinkedHashMap;

public class RouterRequestBody {
    private Integer version;
    private String stage;
    private Object control;
    private String id;
    private LinkedHashMap<String, Object> headers;
    private LinkedHashMap<String, Object> body;
    private Context context;
    private String SDL;
    private String path;
    private String method;


    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }

    public String getStage() {
        return stage;
    }

    public void setStage(String stage) {
        this.stage = stage;
    }

    public Object getControl() {
        return control;
    }

    public void setControl(Object control) {
        this.control = control;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public LinkedHashMap<String, Object> getHeaders() {
        return headers;
    }

    public void setHeaders(LinkedHashMap<String, Object> headers) {
        this.headers = headers;
    }

    public LinkedHashMap<String, Object> getBody() {
        return body;
    }

    public void setBody(LinkedHashMap<String, Object> body) {
        this.body = body;
    }

    public String getSDL() {
        return SDL;
    }

    public void setSDL(String SDL) {
        this.SDL = SDL;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public Context getContext() {
        return context;
    }

    public void setContext(Context context) {
        this.context = context;
    }
}

