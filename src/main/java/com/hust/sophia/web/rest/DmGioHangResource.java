package com.hust.sophia.web.rest;

import com.hust.sophia.domain.DmGioHang;
import com.hust.sophia.repository.DmGioHangRepository;
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
 * REST controller for managing {@link com.hust.sophia.domain.DmGioHang}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class DmGioHangResource {

    private final Logger log = LoggerFactory.getLogger(DmGioHangResource.class);

    private static final String ENTITY_NAME = "dmGioHang";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final DmGioHangRepository dmGioHangRepository;

    public DmGioHangResource(DmGioHangRepository dmGioHangRepository) {
        this.dmGioHangRepository = dmGioHangRepository;
    }

    /**
     * {@code POST  /dm-gio-hangs} : Create a new dmGioHang.
     *
     * @param dmGioHang the dmGioHang to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new dmGioHang, or with status {@code 400 (Bad Request)} if the dmGioHang has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
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

    /**
     * {@code PUT  /dm-gio-hangs} : Updates an existing dmGioHang.
     *
     * @param dmGioHang the dmGioHang to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated dmGioHang,
     * or with status {@code 400 (Bad Request)} if the dmGioHang is not valid,
     * or with status {@code 500 (Internal Server Error)} if the dmGioHang couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
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

    /**
     * {@code GET  /dm-gio-hangs} : get all the dmGioHangs.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of dmGioHangs in body.
     */
    @GetMapping("/dm-gio-hangs")
    public List<DmGioHang> getAllDmGioHangs() {
        log.debug("REST request to get all DmGioHangs");
        return dmGioHangRepository.findAll();
    }

    /**
     * {@code GET  /dm-gio-hangs/:id} : get the "id" dmGioHang.
     *
     * @param id the id of the dmGioHang to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the dmGioHang, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/dm-gio-hangs/{id}")
    public ResponseEntity<DmGioHang> getDmGioHang(@PathVariable Long id) {
        log.debug("REST request to get DmGioHang : {}", id);
        Optional<DmGioHang> dmGioHang = dmGioHangRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(dmGioHang);
    }

    /**
     * {@code DELETE  /dm-gio-hangs/:id} : delete the "id" dmGioHang.
     *
     * @param id the id of the dmGioHang to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/dm-gio-hangs/{id}")
    public ResponseEntity<Void> deleteDmGioHang(@PathVariable Long id) {
        log.debug("REST request to delete DmGioHang : {}", id);
        dmGioHangRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
