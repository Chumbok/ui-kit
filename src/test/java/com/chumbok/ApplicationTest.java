package com.chumbok;

import com.chumbok.controller.LayoutController;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class ApplicationTest {

    @Autowired
    private LayoutController controller;

    @Test
    public void contextLoads() {
    }

    @Test
    public void checkControllerIsLoadedInContext() {
        assertThat(controller).isNotNull();
    }

}