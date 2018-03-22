package exceptions;

public class JsonFileReadingException extends Exception {

    public JsonFileReadingException(Throwable throwable) {
        super(throwable);
    }

    public JsonFileReadingException(String message, Throwable e) {
        super(message, e);
    }
}
