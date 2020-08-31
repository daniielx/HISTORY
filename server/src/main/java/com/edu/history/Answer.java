package com.edu.history;

import org.springframework.data.annotation.Id;

public class Answer {

    @Id
    private String id;

    private String question_id;

    private String value;

    public Answer(String id, String question_id, String value) {
        this.id = id;
        this.question_id = question_id;
        this.value = value;
    }
}
