package com.hust.sophia.web.rest;

import com.hust.sophia.domain.DmSanPham;
import com.hust.sophia.repository.DmSanPhamRepository;
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
 * REST controller for managing {@link com.hust.sophia.domain.DmSanPham}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class DmSanPhamResource {

    private final Logger log = LoggerFactory.getLogger(DmSanPhamResource.class);

    private static final String ENTITY_NAME = "dmSanPham";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final DmSanPhamRepository dmSanPhamRepository;

    public DmSanPhamResource(DmSanPhamRepository dmSanPhamRepository) {
        this.dmSanPhamRepository = dmSanPhamRepository;
    }

    /**
     * {@code POST  /dm-san-phams} : Create a new dmSanPham.
     *
     * @param dmSanPham the dmSanPham to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new dmSanPham, or with status {@code 400 (Bad Request)} if the dmSanPham has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
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

    /**
     * {@code PUT  /dm-san-phams} : Updates an existing dmSanPham.
     *
     * @param dmSanPham the dmSanPham to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated dmSanPham,
     * or with status {@code 400 (Bad Request)} if the dmSanPham is not valid,
     * or with status {@code 500 (Internal Server Error)} if the dmSanPham couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
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

    /**
     * {@code GET  /dm-san-phams} : get all the dmSanPhams.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of dmSanPhams in body.
     */
    @GetMapping("/dm-san-phams")
    public List<DmSanPham> getAllDmSanPhams() {
        log.debug("REST request to get all DmSanPhams");
        return dmSanPhamRepository.findAll();
    }

    /**
     * {@code GET  /dm-san-phams/:id} : get the "id" dmSanPham.
     *
     * @param id the id of the dmSanPham to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the dmSanPham, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/dm-san-phams/{id}")
    public ResponseEntity<DmSanPham> getDmSanPham(@PathVariable Long id) {
        log.debug("REST request to get DmSanPham : {}", id);
        Optional<DmSanPham> dmSanPham = dmSanPhamRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(dmSanPham);
    }

    /**
     * {@code DELETE  /dm-san-phams/:id} : delete the "id" dmSanPham.
     *
     * @param id the id of the dmSanPham to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/dm-san-phams/{id}")
    public ResponseEntity<Void> deleteDmSanPham(@PathVariable Long id) {
        log.debug("REST request to delete DmSanPham : {}", id);
        dmSanPhamRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
