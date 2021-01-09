package com.hust.sophia.repository;

import com.hust.sophia.domain.DmSanPham;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the DmSanPham entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DmSanPhamRepository extends JpaRepository<DmSanPham, Long> {
}
