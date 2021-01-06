package com.hust.sophia.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the DmDongHo entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DmDongHoRepository extends JpaRepository<DmDongHo, Long> {
}
