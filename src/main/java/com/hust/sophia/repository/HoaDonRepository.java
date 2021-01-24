package com.hust.sophia.repository;

import com.hust.sophia.domain.HoaDon;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the HoaDon entity.
 */
@SuppressWarnings("unused")
@Repository
public interface HoaDonRepository extends JpaRepository<HoaDon, Long> {
}
