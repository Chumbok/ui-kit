package com.chumbok.controller.rest;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(InternetConnectionController.class)
public class InternetConnectionControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void shouldReturnHttpStatus204() throws Exception {
        this.mockMvc.perform(get("/connect")).andExpect(status().isNoContent());
    }

}