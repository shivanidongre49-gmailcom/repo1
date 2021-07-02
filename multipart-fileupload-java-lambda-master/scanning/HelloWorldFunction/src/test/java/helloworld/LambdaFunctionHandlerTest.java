package helloworld;

import java.io.IOException;
import java.util.List;

import org.junit.BeforeClass;
import org.junit.Test;

import com.amazonaws.services.lambda.runtime.Context;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * A simple test harness for locally invoking your Lambda function handler.
 */
public class LambdaFunctionHandlerTest {

    private static Object input;

    @BeforeClass
    public static void createInput() throws IOException {
        // TODO: set up your sample input object here.
        input = null;
    }

    private Context createContext() {
        return new TestContext();
    }

    @Test
    public void testLambdaFunctionHandler() throws JsonProcessingException {
        LambdaFunctionHandlerDetails handler = new LambdaFunctionHandlerDetails();
        Context ctx = createContext();

        List<Doc> images = handler.handleRequest(input, ctx);

        ObjectMapper mapper = new ObjectMapper();

        //Object to JSON in String
        String imageJson = mapper.writeValueAsString(images.get(0));
        System.out.println(imageJson);

    }
}