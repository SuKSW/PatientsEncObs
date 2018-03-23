package com.suksw.fhir.librehealth.PatientDataViewer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@ComponentScan("impl")
@SpringBootApplication
public class PatientDataViewerApplication {

	public static void main(String[] args) {
		SpringApplication.run(PatientDataViewerApplication.class, args);
	}


}
