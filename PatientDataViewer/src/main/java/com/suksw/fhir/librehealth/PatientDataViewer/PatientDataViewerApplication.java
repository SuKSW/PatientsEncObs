package com.suksw.fhir.librehealth.PatientDataViewer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan("impl")
@SpringBootApplication
public class PatientDataViewerApplication {

	public static void main(String[] args) {
		SpringApplication.run(PatientDataViewerApplication.class, args);
	}


}
