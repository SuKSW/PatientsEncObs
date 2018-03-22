package impl;

import exceptions.JsonFileReadingException;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.FileReader;
import java.io.IOException;

public class JsonFileReader {
    public JSONObject readJsonObjectFromFile(String fileName) throws JsonFileReadingException {
        JSONParser parser = new JSONParser();
        try {
            return (JSONObject) parser.parse(new FileReader(fileName));
        } catch (IOException | ParseException e) {
            throw new JsonFileReadingException(e);
        }
    }
}
