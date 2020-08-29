package com.edu.history;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    private HistoryAction historyAction;

    @Autowired
    public void setHistoryAction(HistoryAction historyAction) {
        this.historyAction = historyAction;
    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.POST, value = "/submit")
    public String route(@RequestBody String jsonString) {
        System.out.println(jsonString);
        historyAction.parseInput(jsonString);
        return jsonString;
    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.GET, value = "/test/{id}")
    public String routeGET(@PathVariable String id) {
        System.out.println(id);
        return historyAction.getTest(id);
    }


}
