package com.suksw.fhir.librehealth.PatientDataViewer;

import impl.Encounter;
import impl.EncounterRepository;
import impl.Patient;
import impl.PatientRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.Arrays;

@SpringBootApplication
@ComponentScan({"impl"})
@EntityScan("impl")
@EnableJpaRepositories("impl")
public class PatientDataViewerApplication {

	public static void main(String[] args) {
		SpringApplication.run(PatientDataViewerApplication.class, args);
	}


	@Bean
	CommandLineRunner init(PatientRepository patientRepository,
						   EncounterRepository encounterRepository) {
		return (evt) -> Arrays.asList(
            "jhoeller,dsyer,pwebb,ogierke,rwinch,mfisher,mpollack,jlong".split(","))
            .forEach(
                a -> {
                    Patient patient = patientRepository.save(new Patient(a,"password"));
                    encounterRepository.save(new Encounter(patient,
                            "http://bookmark.com/1/" + a, "A description"));
                    encounterRepository.save(new Encounter(patient,
                            "http://bookmark.com/2/" + a, "A description"));
                });
	}

}
