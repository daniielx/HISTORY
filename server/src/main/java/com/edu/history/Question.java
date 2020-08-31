package com.edu.history;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONObject;
import org.springframework.data.annotation.Id;

import java.util.List;

public class Question {
    @Id
    private String id;
    private String key;
    private String value;
    private List<String> markup;

    public Question() {
    }

    public Question(String key, String quote, List<String> markup) {
        this.key = key;
        this.value = quote;
        this.markup = markup;
    }

    @Override
    public String toString() {
        return String.format(
                "Question[id=%s, key='%s', value='%s', markup='%s']",
                id, key, value, markup);
    }

    public String getId() {
        return id;
    }

    public String getKey() {
        return key;
    }

    public String getValue() {
        return value;
    }

    public List<String> getMarkup() {
        return markup;
    }
}
