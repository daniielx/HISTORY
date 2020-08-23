package com.edu.history;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
    public String checkBoard(@RequestBody String jsonString) {
        System.out.println(jsonString);
        historyAction.parseInput(jsonString);
        return jsonString;
    }

}
