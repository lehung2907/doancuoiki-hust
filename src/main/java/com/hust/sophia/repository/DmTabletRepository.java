package com.hust.sophia.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the DmTablet entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DmTabletRepository extends JpaRepository<DmTablet, Long> {
}
