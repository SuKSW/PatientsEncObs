package impl;


import exceptions.JsonFileReadingException;
import extra.Config;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/patients")
public class PatientController {

    @Autowired
    PatientController() {
    }

    @RequestMapping(method = RequestMethod.GET)
    JSONObject getAllPatients() throws JsonFileReadingException {
        JsonFileReader jsonFileReader = new JsonFileReader();
        return jsonFileReader.readJsonObjectFromFile(
                System.getProperty("user.dir") + Config.patientsJsonFile);
    }
}
