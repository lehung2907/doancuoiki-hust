package com.hust.sophia.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the DmAmThanh entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DmAmThanhRepository extends JpaRepository<DmAmThanh, Long> {
}
