package com.hust.sophia.repository;

import com.hust.sophia.domain.DmSanPham;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data  repository for the DmSanPham entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DmSanPhamRepository extends JpaRepository<DmSanPham, Long> {

    Page<DmSanPham> findAllByLoaiSanPham(Pageable pageable, String loaiSanPham);

    List<DmSanPham> findAllByLoaiSanPham(String loaiSanPham);

    Page<DmSanPham> findAllByTenLike(Pageable pageable, String loaiSanPham);

    @Query(value = " SELECT * FROM dm_san_pham WHERE ten LIKE %?1%", nativeQuery = true)
    List<DmSanPham> findAllByTen(String ten);
}
