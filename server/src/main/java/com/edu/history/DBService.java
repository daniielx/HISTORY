package com.edu.history;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DBService {

    private QuestionRepository questionRepository;
    @Autowired
    public void setQuestionRepository(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Question AdminInfoSave(String key, String newValue, List<String> markUp) {
        Question question = new Question(key ,newValue, markUp);
        return questionRepository.save(question);
    }

    public JSONArray getTestById(String id) {
        JSONArray jsonArray = new JSONArray();
        Question question = questionRepository.findQuestionById(id);
        JSONObject jsonObject = toJSONObject(question);
        jsonArray.put(jsonObject);
        return jsonArray;
    }

    public JSONObject toJSONObject(Question question) {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("id", question.getId());
        jsonObject.put("key", question.getKey());
        return jsonObject;
    }
}
