package com.chumbok.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class LayoutController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index(){
        return "mainLayout";
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String showLoginPage(){
        return "loginLayout";
    }

}
