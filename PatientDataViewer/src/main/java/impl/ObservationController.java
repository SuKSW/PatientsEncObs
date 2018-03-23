package impl;

import exceptions.JsonFileReadingException;
import extra.Config;
import org.json.simple.JSONObject;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/observations")
public class ObservationController {

    @RequestMapping(method = RequestMethod.GET)
    JSONObject getAllObservations() throws JsonFileReadingException {
        JsonFileReader jsonFileReader = new JsonFileReader();
        JSONObject jsonObject = jsonFileReader.readJsonObjectFromFile(
                System.getProperty("user.dir") + Config.observationJsonFile);
        return jsonObject;
    }
}
