package com.edu.history;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuestionRepository extends MongoRepository<Question, String> {
    public Question findQuestionById(String id);
}
