package impl;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Collection;

public interface EncounterRepository extends JpaRepository<Encounter, Long> {
    Collection<Encounter> findByPatientUsername(String username);
}