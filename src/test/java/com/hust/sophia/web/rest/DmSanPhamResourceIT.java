package com.hust.sophia.web.rest;

import com.hust.sophia.SophiaApp;
import com.hust.sophia.domain.DmSanPham;
import com.hust.sophia.repository.DmSanPhamRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Base64Utils;
import javax.persistence.EntityManager;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@link DmSanPhamResource} REST controller.
 */
@SpringBootTest(classes = SophiaApp.class)
@AutoConfigureMockMvc
@WithMockUser
public class DmSanPhamResourceIT {

    private static final String DEFAULT_LOAI_SAN_PHAM = "AAAAAAAAAA";
    private static final String UPDATED_LOAI_SAN_PHAM = "BBBBBBBBBB";

    private static final String DEFAULT_THUONG_HIEU = "AAAAAAAAAA";
    private static final String UPDATED_THUONG_HIEU = "BBBBBBBBBB";

    private static final String DEFAULT_TEN = "AAAAAAAAAA";
    private static final String UPDATED_TEN = "BBBBBBBBBB";

    private static final String DEFAULT_GIA = "AAAAAAAAAA";
    private static final String UPDATED_GIA = "BBBBBBBBBB";

    private static final String DEFAULT_MO_TA = "AAAAAAAAAA";
    private static final String UPDATED_MO_TA = "BBBBBBBBBB";

    private static final byte[] DEFAULT_ANH = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_ANH = TestUtil.createByteArray(1, "1");
    private static final String DEFAULT_ANH_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_ANH_CONTENT_TYPE = "image/png";

    private static final Integer DEFAULT_SO_DA_BAN = 1;
    private static final Integer UPDATED_SO_DA_BAN = 2;

    private static final String DEFAULT_TRANG_THAI = "AAAAAAAAAA";
    private static final String UPDATED_TRANG_THAI = "BBBBBBBBBB";

    @Autowired
    private DmSanPhamRepository dmSanPhamRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restDmSanPhamMockMvc;

    private DmSanPham dmSanPham;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static DmSanPham createEntity(EntityManager em) {
        DmSanPham dmSanPham = new DmSanPham()
            .loaiSanPham(DEFAULT_LOAI_SAN_PHAM)
            .thuongHieu(DEFAULT_THUONG_HIEU)
            .ten(DEFAULT_TEN)
            .gia(DEFAULT_GIA)
            .moTa(DEFAULT_MO_TA)
            .anh(DEFAULT_ANH)
            .anhContentType(DEFAULT_ANH_CONTENT_TYPE)
            .soDaBan(DEFAULT_SO_DA_BAN)
            .trangThai(DEFAULT_TRANG_THAI);
        return dmSanPham;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static DmSanPham createUpdatedEntity(EntityManager em) {
        DmSanPham dmSanPham = new DmSanPham()
            .loaiSanPham(UPDATED_LOAI_SAN_PHAM)
            .thuongHieu(UPDATED_THUONG_HIEU)
            .ten(UPDATED_TEN)
            .gia(UPDATED_GIA)
            .moTa(UPDATED_MO_TA)
            .anh(UPDATED_ANH)
            .anhContentType(UPDATED_ANH_CONTENT_TYPE)
            .soDaBan(UPDATED_SO_DA_BAN)
            .trangThai(UPDATED_TRANG_THAI);
        return dmSanPham;
    }

    @BeforeEach
    public void initTest() {
        dmSanPham = createEntity(em);
    }

    @Test
    @Transactional
    public void createDmSanPham() throws Exception {
        int databaseSizeBeforeCreate = dmSanPhamRepository.findAll().size();
        // Create the DmSanPham
        restDmSanPhamMockMvc.perform(post("/api/dm-san-phams")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(dmSanPham)))
            .andExpect(status().isCreated());

        // Validate the DmSanPham in the database
        List<DmSanPham> dmSanPhamList = dmSanPhamRepository.findAll();
        assertThat(dmSanPhamList).hasSize(databaseSizeBeforeCreate + 1);
        DmSanPham testDmSanPham = dmSanPhamList.get(dmSanPhamList.size() - 1);
        assertThat(testDmSanPham.getLoaiSanPham()).isEqualTo(DEFAULT_LOAI_SAN_PHAM);
        assertThat(testDmSanPham.getThuongHieu()).isEqualTo(DEFAULT_THUONG_HIEU);
        assertThat(testDmSanPham.getTen()).isEqualTo(DEFAULT_TEN);
        assertThat(testDmSanPham.getGia()).isEqualTo(DEFAULT_GIA);
        assertThat(testDmSanPham.getMoTa()).isEqualTo(DEFAULT_MO_TA);
        assertThat(testDmSanPham.getAnh()).isEqualTo(DEFAULT_ANH);
        assertThat(testDmSanPham.getAnhContentType()).isEqualTo(DEFAULT_ANH_CONTENT_TYPE);
        assertThat(testDmSanPham.getSoDaBan()).isEqualTo(DEFAULT_SO_DA_BAN);
        assertThat(testDmSanPham.getTrangThai()).isEqualTo(DEFAULT_TRANG_THAI);
    }

    @Test
    @Transactional
    public void createDmSanPhamWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = dmSanPhamRepository.findAll().size();

        // Create the DmSanPham with an existing ID
        dmSanPham.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restDmSanPhamMockMvc.perform(post("/api/dm-san-phams")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(dmSanPham)))
            .andExpect(status().isBadRequest());

        // Validate the DmSanPham in the database
        List<DmSanPham> dmSanPhamList = dmSanPhamRepository.findAll();
        assertThat(dmSanPhamList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllDmSanPhams() throws Exception {
        // Initialize the database
        dmSanPhamRepository.saveAndFlush(dmSanPham);

        // Get all the dmSanPhamList
        restDmSanPhamMockMvc.perform(get("/api/dm-san-phams?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(dmSanPham.getId().intValue())))
            .andExpect(jsonPath("$.[*].loaiSanPham").value(hasItem(DEFAULT_LOAI_SAN_PHAM)))
            .andExpect(jsonPath("$.[*].thuongHieu").value(hasItem(DEFAULT_THUONG_HIEU)))
            .andExpect(jsonPath("$.[*].ten").value(hasItem(DEFAULT_TEN)))
            .andExpect(jsonPath("$.[*].gia").value(hasItem(DEFAULT_GIA)))
            .andExpect(jsonPath("$.[*].moTa").value(hasItem(DEFAULT_MO_TA)))
            .andExpect(jsonPath("$.[*].anhContentType").value(hasItem(DEFAULT_ANH_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].anh").value(hasItem(Base64Utils.encodeToString(DEFAULT_ANH))))
            .andExpect(jsonPath("$.[*].soDaBan").value(hasItem(DEFAULT_SO_DA_BAN)))
            .andExpect(jsonPath("$.[*].trangThai").value(hasItem(DEFAULT_TRANG_THAI)));
    }
    
    @Test
    @Transactional
    public void getDmSanPham() throws Exception {
        // Initialize the database
        dmSanPhamRepository.saveAndFlush(dmSanPham);

        // Get the dmSanPham
        restDmSanPhamMockMvc.perform(get("/api/dm-san-phams/{id}", dmSanPham.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(dmSanPham.getId().intValue()))
            .andExpect(jsonPath("$.loaiSanPham").value(DEFAULT_LOAI_SAN_PHAM))
            .andExpect(jsonPath("$.thuongHieu").value(DEFAULT_THUONG_HIEU))
            .andExpect(jsonPath("$.ten").value(DEFAULT_TEN))
            .andExpect(jsonPath("$.gia").value(DEFAULT_GIA))
            .andExpect(jsonPath("$.moTa").value(DEFAULT_MO_TA))
            .andExpect(jsonPath("$.anhContentType").value(DEFAULT_ANH_CONTENT_TYPE))
            .andExpect(jsonPath("$.anh").value(Base64Utils.encodeToString(DEFAULT_ANH)))
            .andExpect(jsonPath("$.soDaBan").value(DEFAULT_SO_DA_BAN))
            .andExpect(jsonPath("$.trangThai").value(DEFAULT_TRANG_THAI));
    }
    @Test
    @Transactional
    public void getNonExistingDmSanPham() throws Exception {
        // Get the dmSanPham
        restDmSanPhamMockMvc.perform(get("/api/dm-san-phams/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateDmSanPham() throws Exception {
        // Initialize the database
        dmSanPhamRepository.saveAndFlush(dmSanPham);

        int databaseSizeBeforeUpdate = dmSanPhamRepository.findAll().size();

        // Update the dmSanPham
        DmSanPham updatedDmSanPham = dmSanPhamRepository.findById(dmSanPham.getId()).get();
        // Disconnect from session so that the updates on updatedDmSanPham are not directly saved in db
        em.detach(updatedDmSanPham);
        updatedDmSanPham
            .loaiSanPham(UPDATED_LOAI_SAN_PHAM)
            .thuongHieu(UPDATED_THUONG_HIEU)
            .ten(UPDATED_TEN)
            .gia(UPDATED_GIA)
            .moTa(UPDATED_MO_TA)
            .anh(UPDATED_ANH)
            .anhContentType(UPDATED_ANH_CONTENT_TYPE)
            .soDaBan(UPDATED_SO_DA_BAN)
            .trangThai(UPDATED_TRANG_THAI);

        restDmSanPhamMockMvc.perform(put("/api/dm-san-phams")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(updatedDmSanPham)))
            .andExpect(status().isOk());

        // Validate the DmSanPham in the database
        List<DmSanPham> dmSanPhamList = dmSanPhamRepository.findAll();
        assertThat(dmSanPhamList).hasSize(databaseSizeBeforeUpdate);
        DmSanPham testDmSanPham = dmSanPhamList.get(dmSanPhamList.size() - 1);
        assertThat(testDmSanPham.getLoaiSanPham()).isEqualTo(UPDATED_LOAI_SAN_PHAM);
        assertThat(testDmSanPham.getThuongHieu()).isEqualTo(UPDATED_THUONG_HIEU);
        assertThat(testDmSanPham.getTen()).isEqualTo(UPDATED_TEN);
        assertThat(testDmSanPham.getGia()).isEqualTo(UPDATED_GIA);
        assertThat(testDmSanPham.getMoTa()).isEqualTo(UPDATED_MO_TA);
        assertThat(testDmSanPham.getAnh()).isEqualTo(UPDATED_ANH);
        assertThat(testDmSanPham.getAnhContentType()).isEqualTo(UPDATED_ANH_CONTENT_TYPE);
        assertThat(testDmSanPham.getSoDaBan()).isEqualTo(UPDATED_SO_DA_BAN);
        assertThat(testDmSanPham.getTrangThai()).isEqualTo(UPDATED_TRANG_THAI);
    }

    @Test
    @Transactional
    public void updateNonExistingDmSanPham() throws Exception {
        int databaseSizeBeforeUpdate = dmSanPhamRepository.findAll().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restDmSanPhamMockMvc.perform(put("/api/dm-san-phams")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(dmSanPham)))
            .andExpect(status().isBadRequest());

        // Validate the DmSanPham in the database
        List<DmSanPham> dmSanPhamList = dmSanPhamRepository.findAll();
        assertThat(dmSanPhamList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteDmSanPham() throws Exception {
        // Initialize the database
        dmSanPhamRepository.saveAndFlush(dmSanPham);

        int databaseSizeBeforeDelete = dmSanPhamRepository.findAll().size();

        // Delete the dmSanPham
        restDmSanPhamMockMvc.perform(delete("/api/dm-san-phams/{id}", dmSanPham.getId())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<DmSanPham> dmSanPhamList = dmSanPhamRepository.findAll();
        assertThat(dmSanPhamList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
