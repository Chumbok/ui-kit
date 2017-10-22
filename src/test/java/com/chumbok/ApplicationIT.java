package com.chumbok;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT, classes = Application.class)
public class ApplicationIT {

    @Autowired
    private ApplicationContext applicationContext;

    @Test
    public void applicationBeanShouldBeAvailable() throws Exception {
        // Since we're a @SpringBootTest all beans should be available.
        assertNotNull(this.applicationContext.getBean(Application.class));
    }
}