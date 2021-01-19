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

    List<DmGioHang> findAllByLogin(String login);

}
