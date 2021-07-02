package helloworld;



import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.ScanRequest;
import com.amazonaws.services.dynamodbv2.model.ScanResult;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import helloworld.Doc;


public class LambdaFunctionHandlerDetails implements RequestHandler<Object, List<Doc>> {

    private String DYNAMODB_TABLE_NAME = "newTable";
    private Regions REGION = Regions.AP_SOUTH_1;
    private AmazonDynamoDB dynamoDbClient = AmazonDynamoDBClientBuilder.standard()
            .withRegion(REGION)
            .build();
    @Override
    public List<Doc> handleRequest(Object input, Context context) {
        context.getLogger().log("Input: " + input);


        ScanRequest scanRequest = new ScanRequest()
                .withTableName(DYNAMODB_TABLE_NAME)
                .withLimit(100);

        ScanResult scanResult = dynamoDbClient.scan(scanRequest);

        context.getLogger().log("ScanResult: " + scanResult.toString());
        List<Doc> docs = scanResult.getItems()
                .stream()
                .map(map -> new Doc(

map.get("id").getS(),
                                map.get("FirstName").getS(),
map.get("LastName").getS(), map.get("Policy").getS(),
                        map.get("s3Uri").getM().get("adhar").getS(),
                                map.get("s3Uri").getM().get("adharLink").getS(),

                                map.get("s3Uri").getM().get("ApplicationForm").getS(),
                                map.get("s3Uri").getM().get("ApplicationLink")
                                        .getS(),
                                map.get("s3Uri").getM().get("pancard").getS(),
                        map.get("s3Uri").getM().get("pancardLink").getS())
//                        .setBucket(getValueByKey(map, "bucket"))
//                        .setName(getValueByKey(map, "name"))
//                        .setS3Uri(getValueByKey(map, "s3Url"))
//                        .setContentType(getValueByKey(map, "contentType"))
//                        .setSizeBytes(Long.valueOf(getValueByKey(map, "size")))
//                        .setLastModified(getValueByKey(map, "lastModified"))
                ).collect(Collectors.toList());

        context.getLogger().log("Returning : " + docs);
        return docs;
    }


    private String getValueByKey(Map<String, AttributeValue> map, String key){

        AttributeValue attrValue = map.get(key);
        return attrValue.getS();
    }
}