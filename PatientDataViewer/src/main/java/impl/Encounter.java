package impl;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Encounter {

    @Id
    @GeneratedValue
    private Long id;

    @JsonIgnore
    @ManyToOne
    private Patient patient;

    private String uri;

    private String description;

    private Encounter() { } // JPA only

    public Encounter(final Patient patient, final String uri, final String description) {
        this.uri = uri;
        this.description = description;
        this.patient = patient;
    }

    public Long getId() {
        return id;
    }

    public Patient getPatient() {
        return patient;
    }

    public String getUri() {
        return uri;
    }

    public String getDescription() {
        return description;
    }
}