package com.hust.sophia.web.rest;

import com.hust.sophia.domain.DmDienThoai;
import com.hust.sophia.repository.DmDienThoaiRepository;
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
 * REST controller for managing {@link com.hust.sophia.domain.DmDienThoai}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class DmDienThoaiResource {

    private final Logger log = LoggerFactory.getLogger(DmDienThoaiResource.class);

    private static final String ENTITY_NAME = "dmDienThoai";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final DmDienThoaiRepository dmDienThoaiRepository;

    public DmDienThoaiResource(DmDienThoaiRepository dmDienThoaiRepository) {
        this.dmDienThoaiRepository = dmDienThoaiRepository;
    }

    /**
     * {@code POST  /dm-dien-thoais} : Create a new dmDienThoai.
     *
     * @param dmDienThoai the dmDienThoai to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new dmDienThoai, or with status {@code 400 (Bad Request)} if the dmDienThoai has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/dm-dien-thoais")
    public ResponseEntity<DmDienThoai> createDmDienThoai(@RequestBody DmDienThoai dmDienThoai) throws URISyntaxException {
        log.debug("REST request to save DmDienThoai : {}", dmDienThoai);
        if (dmDienThoai.getId() != null) {
            throw new BadRequestAlertException("A new dmDienThoai cannot already have an ID", ENTITY_NAME, "idexists");
        }
        DmDienThoai result = dmDienThoaiRepository.save(dmDienThoai);
        return ResponseEntity.created(new URI("/api/dm-dien-thoais/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /dm-dien-thoais} : Updates an existing dmDienThoai.
     *
     * @param dmDienThoai the dmDienThoai to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated dmDienThoai,
     * or with status {@code 400 (Bad Request)} if the dmDienThoai is not valid,
     * or with status {@code 500 (Internal Server Error)} if the dmDienThoai couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/dm-dien-thoais")
    public ResponseEntity<DmDienThoai> updateDmDienThoai(@RequestBody DmDienThoai dmDienThoai) throws URISyntaxException {
        log.debug("REST request to update DmDienThoai : {}", dmDienThoai);
        if (dmDienThoai.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        DmDienThoai result = dmDienThoaiRepository.save(dmDienThoai);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, dmDienThoai.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /dm-dien-thoais} : get all the dmDienThoais.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of dmDienThoais in body.
     */
    @GetMapping("/dm-dien-thoais")
    public List<DmDienThoai> getAllDmDienThoais() {
        log.debug("REST request to get all DmDienThoais");
        return dmDienThoaiRepository.findAll();
    }

    /**
     * {@code GET  /dm-dien-thoais/:id} : get the "id" dmDienThoai.
     *
     * @param id the id of the dmDienThoai to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the dmDienThoai, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/dm-dien-thoais/{id}")
    public ResponseEntity<DmDienThoai> getDmDienThoai(@PathVariable Long id) {
        log.debug("REST request to get DmDienThoai : {}", id);
        Optional<DmDienThoai> dmDienThoai = dmDienThoaiRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(dmDienThoai);
    }

    /**
     * {@code DELETE  /dm-dien-thoais/:id} : delete the "id" dmDienThoai.
     *
     * @param id the id of the dmDienThoai to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/dm-dien-thoais/{id}")
    public ResponseEntity<Void> deleteDmDienThoai(@PathVariable Long id) {
        log.debug("REST request to delete DmDienThoai : {}", id);
        dmDienThoaiRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
