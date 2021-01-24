package com.hust.sophia.web.rest;

import com.hust.sophia.config.Constants;
import com.hust.sophia.domain.DmSanPham;
import com.hust.sophia.repository.DmSanPhamRepository;
import com.hust.sophia.service.UserService;
import com.hust.sophia.service.dto.UserDTO;
import com.hust.sophia.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.PaginationUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

/**
 * REST controller for managing {@link com.hust.sophia.domain.DmSanPham}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class DmSanPhamResource {

    private static class AccountResourceException extends RuntimeException {
        private AccountResourceException(String message) {
            super(message);
        }
    }

    private final Logger log = LoggerFactory.getLogger(DmSanPhamResource.class);

    private static final String ENTITY_NAME = "dmSanPham";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final DmSanPhamRepository dmSanPhamRepository;

    private final UserService userService;

    public DmSanPhamResource(DmSanPhamRepository dmSanPhamRepository, UserService userService) {
        this.dmSanPhamRepository = dmSanPhamRepository;
        this.userService = userService;
    }

    @PostMapping("/dm-san-phams")
    public ResponseEntity<DmSanPham> createDmSanPham(@RequestBody DmSanPham dmSanPham) throws URISyntaxException {
        log.debug("REST request to save DmSanPham : {}", dmSanPham);
        if (dmSanPham.getId() != null) {
            throw new BadRequestAlertException("A new dmSanPham cannot already have an ID", ENTITY_NAME, "idexists");
        }
        DmSanPham result = dmSanPhamRepository.save(dmSanPham);
        return ResponseEntity.created(new URI("/api/dm-san-phams/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    @PutMapping("/dm-san-phams")
    public ResponseEntity<DmSanPham> updateDmSanPham(@RequestBody DmSanPham dmSanPham) throws URISyntaxException {
        log.debug("REST request to update DmSanPham : {}", dmSanPham);
        if (dmSanPham.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        DmSanPham result = dmSanPhamRepository.save(dmSanPham);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, dmSanPham.getId().toString()))
            .body(result);
    }

    @GetMapping("/dm-san-phams/queryPageig")
    public ResponseEntity<List<DmSanPham>> getAllDmSanPhams(Pageable pageable) {
        log.debug("REST request to get all DmSanPhams");
//        Page<DmSanPham> result = dmSanPhamRepository.findAll(pageable);
//        List<DmSanPham> contens = dmSanPhamRepository.findAll();
        Page<DmSanPham> result = dmSanPhamRepository.findAllByTrangThaiNot(pageable, "0");
        List<DmSanPham> contens = dmSanPhamRepository.findAllByTrangThaiNot("0");
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), result);
        return ResponseEntity.ok().headers(headers).body(contens);
    }

    @GetMapping("/dm-san-phams/{id}")
    public ResponseEntity<DmSanPham> getDmSanPham(@PathVariable Long id) {
        log.debug("REST request to get DmSanPham : {}", id);
        Optional<DmSanPham> dmSanPham = dmSanPhamRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(dmSanPham);
    }

    @DeleteMapping("/dm-san-phams/{id}")
    public ResponseEntity<Void> deleteDmSanPham(@PathVariable Long id) {
        log.debug("REST request to delete DmSanPham : {}", id);
        dmSanPhamRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }

    @GetMapping("/dm-san-phams/getAccount")
    public UserDTO getAccount() {
        log.debug("REST request to get getAccount");
        UserDTO user = userService.getUserWithAuthorities().map(UserDTO::new).orElseThrow(() -> new DmSanPhamResource.AccountResourceException("User could not be found"));
        return user;
    }

    /*iphone*/
    @GetMapping("/dm-san-phams/dienthoais")
    public ResponseEntity<List<DmSanPham>> getAllDmSanPhamDienThoai(Pageable pageable) {
        log.debug("REST request to get all getAllDmSanPhamDienThoai");
        Page<DmSanPham> result = dmSanPhamRepository.findAllByLoaiSanPhamAndTrangThaiNot(pageable, Constants.IPHONE, "0");
        List<DmSanPham> contens = dmSanPhamRepository.findAllByLoaiSanPhamAndTrangThaiNot(Constants.IPHONE, "0");
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), result);
        return ResponseEntity.ok().headers(headers).body(contens);
    }

    /*samsung*/
    @GetMapping("/dm-san-phams/samsung")
    public ResponseEntity<List<DmSanPham>> getAllDmSanPhamSamsung(Pageable pageable) {
        log.debug("REST request to get all DmSanPhams");
        Page<DmSanPham> result = dmSanPhamRepository.findAllByLoaiSanPhamAndTrangThaiNot(pageable, Constants.SAMSUNG, "0");
        List<DmSanPham> contens = dmSanPhamRepository.findAllByLoaiSanPhamAndTrangThaiNot(Constants.SAMSUNG, "0");
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), result);
        return ResponseEntity.ok().headers(headers).body(contens);
    }

    /*xiaomi*/
    @GetMapping("/dm-san-phams/xiaomi")
    public ResponseEntity<List<DmSanPham>> getAllDmSanPhamXiaomi(Pageable pageable) {
        log.debug("REST request to get all DmSanPhams");
        Page<DmSanPham> result = dmSanPhamRepository.findAllByLoaiSanPhamAndTrangThaiNot(pageable, Constants.XIAOMI, "0");
        List<DmSanPham> contens = dmSanPhamRepository.findAllByLoaiSanPhamAndTrangThaiNot(Constants.XIAOMI, "0");
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), result);
        return ResponseEntity.ok().headers(headers).body(contens);
    }

    /*oppo*/
    @GetMapping("/dm-san-phams/oppo")
    public ResponseEntity<List<DmSanPham>> getAllDmSanPhamOppo(Pageable pageable) {
        log.debug("REST request to get all DmSanPhams");
        Page<DmSanPham> result = dmSanPhamRepository.findAllByLoaiSanPhamAndTrangThaiNot(pageable, Constants.OPPO, "0");
        List<DmSanPham> contens = dmSanPhamRepository.findAllByLoaiSanPhamAndTrangThaiNot(Constants.OPPO, "0");
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), result);
        return ResponseEntity.ok().headers(headers).body(contens);
    }

    /*vsmart*/
    @GetMapping("/dm-san-phams/vsmart")
    public ResponseEntity<List<DmSanPham>> getAllDmSanPhamVsmart(Pageable pageable) {
        log.debug("REST request to get all DmSanPhams");
        Page<DmSanPham> result = dmSanPhamRepository.findAllByLoaiSanPhamAndTrangThaiNot(pageable, Constants.VSMART, "0");
        List<DmSanPham> contens = dmSanPhamRepository.findAllByLoaiSanPhamAndTrangThaiNot(Constants.VSMART, "0");
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), result);
        return ResponseEntity.ok().headers(headers).body(contens);
    }

    /*spKhac*/
    @GetMapping("/dm-san-phams/spKhac")
    public ResponseEntity<List<DmSanPham>> getAllDmSanPhamSpKhac(Pageable pageable) {
        log.debug("REST request to get all DmSanPhams");
        Page<DmSanPham> result = dmSanPhamRepository.findAllByLoaiSanPhamAndTrangThaiNot(pageable, Constants.KHAC, "0");
        List<DmSanPham> contens = dmSanPhamRepository.findAllByLoaiSanPhamAndTrangThaiNot(Constants.KHAC, "0");
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), result);
        return ResponseEntity.ok().headers(headers).body(contens);
    }

    @GetMapping("/dm-san-phams/keys")
    public ResponseEntity<List<DmSanPham>> findByKeys(Pageable pageable, String key) {
        log.debug("REST request to get all Search");
        if (StringUtils.isNotBlank(key)) {
            Page<DmSanPham> result = dmSanPhamRepository.findAllByTenLike(pageable, key);
            List<DmSanPham> contens = dmSanPhamRepository.findAllByTen(key);
            if (Objects.nonNull(contens) && contens.size() == 0) {
                result = dmSanPhamRepository.findAll(pageable);
                contens = dmSanPhamRepository.findAll();
            }
            HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), result);
            return ResponseEntity.ok().headers(headers).body(contens);
        } else {
            Page<DmSanPham> result = dmSanPhamRepository.findAll(pageable);
            List<DmSanPham> contens = dmSanPhamRepository.findAll();
            HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), result);
            return ResponseEntity.ok().headers(headers).body(contens);
        }
    }
}
