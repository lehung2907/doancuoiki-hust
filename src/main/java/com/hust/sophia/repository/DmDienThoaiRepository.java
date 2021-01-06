package com.hust.sophia.repository;

import com.hust.sophia.domain.DmDienThoai;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the DmDienThoai entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DmDienThoaiRepository extends JpaRepository<DmDienThoai, Long> {
}
