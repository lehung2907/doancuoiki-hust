package com.hust.sophia.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the DmLapTop entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DmLapTopRepository extends JpaRepository<DmLapTop, Long> {
}
