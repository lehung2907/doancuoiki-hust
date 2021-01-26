package com.hust.sophia.web.rest;

import com.hust.sophia.domain.DmGioHang;
import com.hust.sophia.domain.HoaDon;
import com.hust.sophia.repository.DmGioHangRepository;
import com.hust.sophia.repository.HoaDonRepository;
import com.hust.sophia.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link com.hust.sophia.domain.HoaDon}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class HoaDonResource {

    private final Logger log = LoggerFactory.getLogger(HoaDonResource.class);

    private static final String ENTITY_NAME = "hoaDon";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final HoaDonRepository hoaDonRepository;

    private final DmGioHangRepository dmGioHangRepository;

    public HoaDonResource(HoaDonRepository hoaDonRepository, DmGioHangRepository dmGioHangRepository) {
        this.hoaDonRepository = hoaDonRepository;
        this.dmGioHangRepository = dmGioHangRepository;
    }

    /**
     * {@code POST  /hoa-dons} : Create a new hoaDon.
     *
     * @param hoaDon the hoaDon to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new hoaDon, or with status {@code 400 (Bad Request)} if the hoaDon has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/hoa-dons")
    public ResponseEntity<HoaDon> createHoaDon(@RequestBody HoaDon hoaDon) throws URISyntaxException {
        log.debug("REST request to save HoaDon : {}", hoaDon);
        if (hoaDon.getId() != null) {
            throw new BadRequestAlertException("A new hoaDon cannot already have an ID", ENTITY_NAME, "idexists");
        }
        HoaDon result = hoaDonRepository.save(hoaDon);
        return ResponseEntity.created(new URI("/api/hoa-dons/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /hoa-dons} : Updates an existing hoaDon.
     *
     * @param hoaDon the hoaDon to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated hoaDon,
     * or with status {@code 400 (Bad Request)} if the hoaDon is not valid,
     * or with status {@code 500 (Internal Server Error)} if the hoaDon couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/hoa-dons")
    public ResponseEntity<HoaDon> updateHoaDon(@RequestBody HoaDon hoaDon) throws URISyntaxException {
        log.debug("REST request to update HoaDon : {}", hoaDon);
        DmGioHang dmGioHang = dmGioHangRepository.getOne(Long.parseLong(hoaDon.getTrangThai2()));
        dmGioHang.setTrangThai(hoaDon.getTrangThai());
        if (hoaDon.getTrangThai().equalsIgnoreCase("Đang giao hàng"))
            dmGioHang.setHoaDonId(2);
        else if (hoaDon.getTrangThai().equalsIgnoreCase("Giao hàng thành công"))
            dmGioHang.setHoaDonId(3);
        else
            dmGioHang.setHoaDonId(4);
        dmGioHangRepository.save(dmGioHang);
        dmGioHang.setHoaDonId(2);
        HoaDon result = hoaDonRepository.save(hoaDon);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, hoaDon.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /hoa-dons} : get all the hoaDons.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of hoaDons in body.
     */
    @GetMapping("/hoa-dons")
    public List<HoaDon> getAllHoaDons() {
        log.debug("REST request to get all HoaDons");
        return hoaDonRepository.findAll();
    }

    /**
     * {@code GET  /hoa-dons/:id} : get the "id" hoaDon.
     *
     * @param id the id of the hoaDon to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the hoaDon, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/hoa-dons/{id}")
    public ResponseEntity<HoaDon> getHoaDon(@PathVariable Long id) {
        log.debug("REST request to get HoaDon : {}", id);
        Optional<HoaDon> hoaDon = hoaDonRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(hoaDon);
    }

    /**
     * {@code DELETE  /hoa-dons/:id} : delete the "id" hoaDon.
     *
     * @param id the id of the hoaDon to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/hoa-dons/{id}")
    public ResponseEntity<Void> deleteHoaDon(@PathVariable Long id) {
        log.debug("REST request to delete HoaDon : {}", id);
        hoaDonRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
