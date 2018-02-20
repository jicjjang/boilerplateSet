package com.ssr.vue.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class index {
    @RequestMapping("/")
    public String testRedirectionIndex() {
        return "redirect:/m";
    }

    @RequestMapping(value={"/m", "/m/*"})
    public String testIndex() {
        return "index";
    }
}
