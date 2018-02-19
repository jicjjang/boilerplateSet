package com.bugs.mbugs.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class index {
    @RequestMapping("/")
    public String testIndex() {
        return "index";
    }
}
