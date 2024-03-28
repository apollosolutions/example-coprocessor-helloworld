package com.example.demo.Models;

import java.util.LinkedHashMap;

public class Context {
    private LinkedHashMap<String, Object> entries;

    public LinkedHashMap<String, Object> getEntries() {
        return entries;
    }

    public void setEntries(LinkedHashMap<String, Object> entries) {
        this.entries = entries;
    }
}
