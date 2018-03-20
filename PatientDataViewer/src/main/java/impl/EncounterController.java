package impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.Collection;

@RestController
@RequestMapping("/{userId}/encounters")
class EncounterController {

    private final EncounterRepository encounterRepository;

    private final PatientRepository patientRepository;

    @Autowired
    EncounterController(PatientRepository patientRepository, EncounterRepository encounterRepository) {
        this.patientRepository = patientRepository;
        this.encounterRepository = encounterRepository;
    }

    @RequestMapping(method = RequestMethod.GET)
    Collection<Encounter> readBookmarks(@PathVariable String userId) {
        this.validateUser(userId);
        return this.encounterRepository.findByPatientUsername(userId);
    }

    @RequestMapping(method = RequestMethod.POST)
    ResponseEntity<?> add(@PathVariable String userId, @RequestBody Encounter input) {
        this.validateUser(userId);

        return this.patientRepository
                .findByUsername(userId)
                .map(patient -> {
                    Encounter result = encounterRepository.save(new Encounter(patient,
                            input.getUri(), input.getDescription()));

                    URI location = ServletUriComponentsBuilder
                            .fromCurrentRequest().path("/{id}")
                            .buildAndExpand(result.getId()).toUri();

                    return ResponseEntity.created(location).build();
                })
                .orElse(ResponseEntity.noContent().build());

    }

    @RequestMapping(method = RequestMethod.GET, value = "/{encounterId}")
    Encounter readEncounter(@PathVariable String userId, @PathVariable Long encounterId) {
        this.validateUser(userId);
        return this.encounterRepository.getOne(encounterId);
    }

    private void validateUser(String userId) {
        this.patientRepository.findByUsername(userId).orElseThrow(
                () -> new UserNotFoundException(userId));
    }
}