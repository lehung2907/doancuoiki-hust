package com.hust.sophia.repository;

import com.hust.sophia.domain.DmSanPham;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data  repository for the DmSanPham entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DmSanPhamRepository extends JpaRepository<DmSanPham, Long> {
    List<DmSanPham> findAllByLoaiSanPham(String loaiSanPham);
}
