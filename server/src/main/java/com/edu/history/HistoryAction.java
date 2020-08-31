package com.edu.history;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;

@Service
public class HistoryAction {

    private DictionaryService dictionaryService;
    @Autowired
    public void setDictionaryService(DictionaryService dictionaryService) {
        this.dictionaryService = dictionaryService;
    }

    private DBService dbService;
    @Autowired
    public void setDbService(DBService dbService) {
        this.dbService = dbService;
    }

    private QuestionRepository questionRepository;
    @Autowired
    public void setQuestionRepository(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public void parseInput(String jsonString) {
        JSONObject jsonObject = new JSONObject(jsonString);
        String key = jsonObject.getString("key");
        String value = jsonObject.getString("value");
        List<String> markUp = new ArrayList<>();
        String valueArr[] = value.split(" ");
        String newValue = value.replaceAll(Matcher.quoteReplacement("$"),"").strip();
        Arrays.stream(valueArr).forEach(word -> {
            if(word.startsWith("$")) {
                markUp.add(word.replaceAll(Matcher.quoteReplacement("$"),"").strip());
            }
        });
        Question q = dbService.AdminInfoSave(key,newValue,markUp);
        System.out.println(q);
//        System.out.println(questionRepository.findById());
        dictionaryService.storeMarkup(markUp);

    }

    public String getTest(String id) {
        return dbService.getTestById(id).toString();
    }

    public void storeTest() {

    }


}
