package com.hust.sophia.repository;

import com.hust.sophia.domain.DmGioHang;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data  repository for the DmGioHang entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DmGioHangRepository extends JpaRepository<DmGioHang, Long> {

    @Query(value = " SELECT * FROM dm_gio_hang WHERE login = ?1 order by hoa_don_id ", nativeQuery = true)
    List<DmGioHang> findAllByLoginAndTrangThai(String login);

    @Query(value = " SELECT * FROM dm_gio_hang order by hoa_don_id ", nativeQuery = true)
    List<DmGioHang> findAllByTrangThai();
}
