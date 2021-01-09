package com.hust.sophia.web.rest;

import com.hust.sophia.SophiaApp;
import com.hust.sophia.domain.DmGioHang;
import com.hust.sophia.repository.DmGioHangRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@link DmGioHangResource} REST controller.
 */
@SpringBootTest(classes = SophiaApp.class)
@AutoConfigureMockMvc
@WithMockUser
public class DmGioHangResourceIT {

    private static final String DEFAULT_USER_ID = "AAAAAAAAAA";
    private static final String UPDATED_USER_ID = "BBBBBBBBBB";

    private static final Integer DEFAULT_DM_SAN_PHAM_ID = 1;
    private static final Integer UPDATED_DM_SAN_PHAM_ID = 2;

    private static final Integer DEFAULT_DM_MAU_ID = 1;
    private static final Integer UPDATED_DM_MAU_ID = 2;

    private static final Integer DEFAULT_SO_LUONG = 1;
    private static final Integer UPDATED_SO_LUONG = 2;

    private static final String DEFAULT_GIA = "AAAAAAAAAA";
    private static final String UPDATED_GIA = "BBBBBBBBBB";

    private static final String DEFAULT_HOA_DON = "AAAAAAAAAA";
    private static final String UPDATED_HOA_DON = "BBBBBBBBBB";

    @Autowired
    private DmGioHangRepository dmGioHangRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restDmGioHangMockMvc;

    private DmGioHang dmGioHang;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static DmGioHang createEntity(EntityManager em) {
        DmGioHang dmGioHang = new DmGioHang()
            .userId(DEFAULT_USER_ID)
            .dmSanPhamId(DEFAULT_DM_SAN_PHAM_ID)
            .dmMauId(DEFAULT_DM_MAU_ID)
            .soLuong(DEFAULT_SO_LUONG)
            .gia(DEFAULT_GIA)
            .hoaDon(DEFAULT_HOA_DON);
        return dmGioHang;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static DmGioHang createUpdatedEntity(EntityManager em) {
        DmGioHang dmGioHang = new DmGioHang()
            .userId(UPDATED_USER_ID)
            .dmSanPhamId(UPDATED_DM_SAN_PHAM_ID)
            .dmMauId(UPDATED_DM_MAU_ID)
            .soLuong(UPDATED_SO_LUONG)
            .gia(UPDATED_GIA)
            .hoaDon(UPDATED_HOA_DON);
        return dmGioHang;
    }

    @BeforeEach
    public void initTest() {
        dmGioHang = createEntity(em);
    }

    @Test
    @Transactional
    public void createDmGioHang() throws Exception {
        int databaseSizeBeforeCreate = dmGioHangRepository.findAll().size();
        // Create the DmGioHang
        restDmGioHangMockMvc.perform(post("/api/dm-gio-hangs")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(dmGioHang)))
            .andExpect(status().isCreated());

        // Validate the DmGioHang in the database
        List<DmGioHang> dmGioHangList = dmGioHangRepository.findAll();
        assertThat(dmGioHangList).hasSize(databaseSizeBeforeCreate + 1);
        DmGioHang testDmGioHang = dmGioHangList.get(dmGioHangList.size() - 1);
        assertThat(testDmGioHang.getUserId()).isEqualTo(DEFAULT_USER_ID);
        assertThat(testDmGioHang.getDmSanPhamId()).isEqualTo(DEFAULT_DM_SAN_PHAM_ID);
        assertThat(testDmGioHang.getDmMauId()).isEqualTo(DEFAULT_DM_MAU_ID);
        assertThat(testDmGioHang.getSoLuong()).isEqualTo(DEFAULT_SO_LUONG);
        assertThat(testDmGioHang.getGia()).isEqualTo(DEFAULT_GIA);
        assertThat(testDmGioHang.getHoaDon()).isEqualTo(DEFAULT_HOA_DON);
    }

    @Test
    @Transactional
    public void createDmGioHangWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = dmGioHangRepository.findAll().size();

        // Create the DmGioHang with an existing ID
        dmGioHang.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restDmGioHangMockMvc.perform(post("/api/dm-gio-hangs")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(dmGioHang)))
            .andExpect(status().isBadRequest());

        // Validate the DmGioHang in the database
        List<DmGioHang> dmGioHangList = dmGioHangRepository.findAll();
        assertThat(dmGioHangList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllDmGioHangs() throws Exception {
        // Initialize the database
        dmGioHangRepository.saveAndFlush(dmGioHang);

        // Get all the dmGioHangList
        restDmGioHangMockMvc.perform(get("/api/dm-gio-hangs?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(dmGioHang.getId().intValue())))
            .andExpect(jsonPath("$.[*].userId").value(hasItem(DEFAULT_USER_ID)))
            .andExpect(jsonPath("$.[*].dmSanPhamId").value(hasItem(DEFAULT_DM_SAN_PHAM_ID)))
            .andExpect(jsonPath("$.[*].dmMauId").value(hasItem(DEFAULT_DM_MAU_ID)))
            .andExpect(jsonPath("$.[*].soLuong").value(hasItem(DEFAULT_SO_LUONG)))
            .andExpect(jsonPath("$.[*].gia").value(hasItem(DEFAULT_GIA)))
            .andExpect(jsonPath("$.[*].hoaDon").value(hasItem(DEFAULT_HOA_DON)));
    }
    
    @Test
    @Transactional
    public void getDmGioHang() throws Exception {
        // Initialize the database
        dmGioHangRepository.saveAndFlush(dmGioHang);

        // Get the dmGioHang
        restDmGioHangMockMvc.perform(get("/api/dm-gio-hangs/{id}", dmGioHang.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(dmGioHang.getId().intValue()))
            .andExpect(jsonPath("$.userId").value(DEFAULT_USER_ID))
            .andExpect(jsonPath("$.dmSanPhamId").value(DEFAULT_DM_SAN_PHAM_ID))
            .andExpect(jsonPath("$.dmMauId").value(DEFAULT_DM_MAU_ID))
            .andExpect(jsonPath("$.soLuong").value(DEFAULT_SO_LUONG))
            .andExpect(jsonPath("$.gia").value(DEFAULT_GIA))
            .andExpect(jsonPath("$.hoaDon").value(DEFAULT_HOA_DON));
    }
    @Test
    @Transactional
    public void getNonExistingDmGioHang() throws Exception {
        // Get the dmGioHang
        restDmGioHangMockMvc.perform(get("/api/dm-gio-hangs/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateDmGioHang() throws Exception {
        // Initialize the database
        dmGioHangRepository.saveAndFlush(dmGioHang);

        int databaseSizeBeforeUpdate = dmGioHangRepository.findAll().size();

        // Update the dmGioHang
        DmGioHang updatedDmGioHang = dmGioHangRepository.findById(dmGioHang.getId()).get();
        // Disconnect from session so that the updates on updatedDmGioHang are not directly saved in db
        em.detach(updatedDmGioHang);
        updatedDmGioHang
            .userId(UPDATED_USER_ID)
            .dmSanPhamId(UPDATED_DM_SAN_PHAM_ID)
            .dmMauId(UPDATED_DM_MAU_ID)
            .soLuong(UPDATED_SO_LUONG)
            .gia(UPDATED_GIA)
            .hoaDon(UPDATED_HOA_DON);

        restDmGioHangMockMvc.perform(put("/api/dm-gio-hangs")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(updatedDmGioHang)))
            .andExpect(status().isOk());

        // Validate the DmGioHang in the database
        List<DmGioHang> dmGioHangList = dmGioHangRepository.findAll();
        assertThat(dmGioHangList).hasSize(databaseSizeBeforeUpdate);
        DmGioHang testDmGioHang = dmGioHangList.get(dmGioHangList.size() - 1);
        assertThat(testDmGioHang.getUserId()).isEqualTo(UPDATED_USER_ID);
        assertThat(testDmGioHang.getDmSanPhamId()).isEqualTo(UPDATED_DM_SAN_PHAM_ID);
        assertThat(testDmGioHang.getDmMauId()).isEqualTo(UPDATED_DM_MAU_ID);
        assertThat(testDmGioHang.getSoLuong()).isEqualTo(UPDATED_SO_LUONG);
        assertThat(testDmGioHang.getGia()).isEqualTo(UPDATED_GIA);
        assertThat(testDmGioHang.getHoaDon()).isEqualTo(UPDATED_HOA_DON);
    }

    @Test
    @Transactional
    public void updateNonExistingDmGioHang() throws Exception {
        int databaseSizeBeforeUpdate = dmGioHangRepository.findAll().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restDmGioHangMockMvc.perform(put("/api/dm-gio-hangs")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(dmGioHang)))
            .andExpect(status().isBadRequest());

        // Validate the DmGioHang in the database
        List<DmGioHang> dmGioHangList = dmGioHangRepository.findAll();
        assertThat(dmGioHangList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteDmGioHang() throws Exception {
        // Initialize the database
        dmGioHangRepository.saveAndFlush(dmGioHang);

        int databaseSizeBeforeDelete = dmGioHangRepository.findAll().size();

        // Delete the dmGioHang
        restDmGioHangMockMvc.perform(delete("/api/dm-gio-hangs/{id}", dmGioHang.getId())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<DmGioHang> dmGioHangList = dmGioHangRepository.findAll();
        assertThat(dmGioHangList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
