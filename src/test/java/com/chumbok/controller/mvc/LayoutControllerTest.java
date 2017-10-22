package com.chumbok.controller.mvc;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;


@RunWith(SpringRunner.class)
@WebMvcTest(LayoutController.class)
public class LayoutControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void shouldReturnMainLayout() throws Exception {
        this.mockMvc.perform(get("/"))
                .andExpect(view().name("mainLayout"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().string(
                        containsString("<title>UI Kit Example App</title>"))
                );
    }

    @Test
    public void shouldReturnLoginLayout() throws Exception {
        this.mockMvc.perform(get("/login"))
                .andExpect(view().name("loginLayout"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().string(
                        containsString("<title>Login</title>"))
                );
    }
}