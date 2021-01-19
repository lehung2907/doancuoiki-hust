package com.hust.sophia.web.rest;

import com.hust.sophia.domain.DmGioHang;
import com.hust.sophia.domain.DmSanPham;
import com.hust.sophia.repository.DmGioHangRepository;
import com.hust.sophia.repository.DmSanPhamRepository;
import com.hust.sophia.service.UserService;
import com.hust.sophia.service.dto.UserDTO;
import com.hust.sophia.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import io.swagger.models.auth.In;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link com.hust.sophia.domain.DmGioHang}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class DmGioHangResource {

    private static class AccountResourceException extends RuntimeException {
        private AccountResourceException(String message) {
            super(message);
        }
    }

    private final Logger log = LoggerFactory.getLogger(DmGioHangResource.class);

    private static final String ENTITY_NAME = "dmGioHang";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final UserService userService;

    private final DmGioHangRepository dmGioHangRepository;

    private final DmSanPhamRepository dmSanPhamRepository;

    public DmGioHangResource(DmGioHangRepository dmGioHangRepository, UserService userService, DmSanPhamRepository dmSanPhamRepository) {
        this.dmGioHangRepository = dmGioHangRepository;
        this.userService = userService;
        this.dmSanPhamRepository = dmSanPhamRepository;
    }

    @PostMapping("/dm-gio-hangs")
    public ResponseEntity<DmGioHang> createDmGioHang(@RequestBody DmGioHang dmGioHang) throws URISyntaxException {
        log.debug("REST request to save DmGioHang : {}", dmGioHang);
        if (dmGioHang.getId() != null) {
            throw new BadRequestAlertException("A new dmGioHang cannot already have an ID", ENTITY_NAME, "idexists");
        }
        DmGioHang result = dmGioHangRepository.save(dmGioHang);
        return ResponseEntity.created(new URI("/api/dm-gio-hangs/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    @GetMapping("/dm-gio-hangs/addSanPham")
    public ResponseEntity<DmGioHang> createDmGioHangByUser(Long id) throws URISyntaxException {
        log.debug("REST request to save createDmGioHangByUser : {}", id);
        DmGioHang dto = new DmGioHang();
        DmSanPham dmSanPham = dmSanPhamRepository.findById(id).get();
        UserDTO user = userService.getUserWithAuthorities().map(UserDTO::new).orElseThrow(() -> new DmGioHangResource.AccountResourceException("User could not be found"));
        dto.setLogin(user.getLogin());
        dto.setDmSanPhamId(dmSanPham.getId());
        dto.setAnhSp(dmSanPham.getAnh());
        dto.setAnhSpContentType(dmSanPham.getAnhContentType());
        dto.setSoLuong(1);
        dto.setGia(Integer.valueOf(dmSanPham.getGia()));
        DmGioHang result = dmGioHangRepository.save(dto);
        return ResponseEntity.created(new URI("/api/dm-gio-hangs/addSanPham/" + id))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .body(result);
    }

    @GetMapping("/dm-gio-hangs/sl")
    public ResponseEntity<DmGioHang> editSoLuongByTien(Long id, Integer sl) throws URISyntaxException {
        log.debug("REST request to save editSoLuongByTien : {}", id);
        DmGioHang dmGioHang = dmGioHangRepository.findById(id).get();
        dmGioHang.setSoLuong(sl);
        dmGioHang.setThanhTien(dmGioHang.getGia() * sl);
//        UserDTO user = userService.getUserWithAuthorities().map(UserDTO::new).orElseThrow(() -> new DmGioHangResource.AccountResourceException("User could not be found"));
        DmGioHang result = dmGioHangRepository.save(dmGioHang);
        return ResponseEntity.created(new URI("/api/dm-gio-hangs/addSanPham/" + id))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .body(result);
    }

    @PutMapping("/dm-gio-hangs")
    public ResponseEntity<DmGioHang> updateDmGioHang(@RequestBody DmGioHang dmGioHang) throws URISyntaxException {
        log.debug("REST request to update DmGioHang : {}", dmGioHang);
        if (dmGioHang.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        DmGioHang result = dmGioHangRepository.save(dmGioHang);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, dmGioHang.getId().toString()))
            .body(result);
    }

    @GetMapping("/dm-gio-hangs")
    public List<DmGioHang> getAllDmGioHangs() {
        log.debug("REST request to get all DmGioHangs");
        List<DmGioHang> results = new ArrayList<>();
        UserDTO user = userService.getUserWithAuthorities().map(UserDTO::new).orElseThrow(() -> new DmGioHangResource.AccountResourceException("User could not be found"));
        if(user.getLogin().equalsIgnoreCase("admin")){
            results = dmGioHangRepository.findAll();
        } else {
            results = dmGioHangRepository.findAllByLogin(user.getLogin());
        }
        return results;
    }

    @GetMapping("/dm-gio-hangs/{id}")
    public ResponseEntity<DmGioHang> getDmGioHang(@PathVariable Long id) {
        log.debug("REST request to get DmGioHang : {}", id);
        Optional<DmGioHang> dmGioHang = dmGioHangRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(dmGioHang);
    }

    @DeleteMapping("/dm-gio-hangs/{id}")
    public ResponseEntity<Void> deleteDmGioHang(@PathVariable Long id) {
        log.debug("REST request to delete DmGioHang : {}", id);
        dmGioHangRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
