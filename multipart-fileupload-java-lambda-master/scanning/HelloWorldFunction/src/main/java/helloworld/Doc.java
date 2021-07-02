package helloworld;
import com.amazonaws.services.dynamodbv2.xspec.M;
import lombok.ToString;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@ToString
public class Doc {


public String LastName;
    Map<String, Object> s3Uri = new HashMap<String, Object>();
    public String FirstName;
    public String policy;
    public String id;
public String adhar;
    public  String adharLink;
public String ApplicationForm;
  public   String ApplicationFormLink;
public String pancard;
    public String pancardLink;







    public Doc(String id, String FirstName, String LastName, String policy,
               String adhar, String adharLink, String ApplicationForm,
               String ApplicationFormLink,
               String pancard, String pancardLink) {
        this.LastName = LastName;
        this.FirstName = FirstName;
        this.policy = policy;
        this.id = id;
        this.s3Uri=s3Uri;
        this.adhar=adhar;
        this.adharLink=adharLink;


        this.ApplicationForm=ApplicationForm;
        this.ApplicationFormLink=ApplicationFormLink;
        this.pancard=pancard;
        this.pancardLink=pancardLink;
    }




    public String getLastName() {
        return LastName;
    }

    public void setLastName(String lastName) {
        LastName = lastName;
    }

    public String getFirstName() {
        return FirstName;
    }

    public void setFirstName(String firstName) {
        FirstName = firstName;
    }

    public String getPolicy() {
        return policy;
    }

    public void setPolicy(String policy) {
        this.policy = policy;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    public Map<String, Object> getS3Uri() {
        return s3Uri;
    }

    }

