package com.hust.sophia.web.rest;

import com.hust.sophia.SophiaApp;
import com.hust.sophia.domain.HoaDon;
import com.hust.sophia.repository.HoaDonRepository;

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
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@link HoaDonResource} REST controller.
 */
@SpringBootTest(classes = SophiaApp.class)
@AutoConfigureMockMvc
@WithMockUser
public class HoaDonResourceIT {

    private static final String DEFAULT_LOGIN = "AAAAAAAAAA";
    private static final String UPDATED_LOGIN = "BBBBBBBBBB";

    private static final Integer DEFAULT_DM_SAN_PHAM_ID = 1;
    private static final Integer UPDATED_DM_SAN_PHAM_ID = 2;

    private static final Integer DEFAULT_SO_LUONG = 1;
    private static final Integer UPDATED_SO_LUONG = 2;

    private static final Integer DEFAULT_GIA = 1;
    private static final Integer UPDATED_GIA = 2;

    private static final String DEFAULT_TEN = "AAAAAAAAAA";
    private static final String UPDATED_TEN = "BBBBBBBBBB";

    private static final String DEFAULT_DIA_CHI = "AAAAAAAAAA";
    private static final String UPDATED_DIA_CHI = "BBBBBBBBBB";

    private static final String DEFAULT_SO_DIEN_THOAI = "AAAAAAAAAA";
    private static final String UPDATED_SO_DIEN_THOAI = "BBBBBBBBBB";

    private static final String DEFAULT_EMAIL = "AAAAAAAAAA";
    private static final String UPDATED_EMAIL = "BBBBBBBBBB";

    private static final String DEFAULT_TRANG_THAI = "AAAAAAAAAA";
    private static final String UPDATED_TRANG_THAI = "BBBBBBBBBB";

    private static final String DEFAULT_GHI_CHU = "AAAAAAAAAA";
    private static final String UPDATED_GHI_CHU = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_NGAY_LAP = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_NGAY_LAP = LocalDate.now(ZoneId.systemDefault());

    private static final String DEFAULT_TRANG_THAI_2 = "AAAAAAAAAA";
    private static final String UPDATED_TRANG_THAI_2 = "BBBBBBBBBB";

    @Autowired
    private HoaDonRepository hoaDonRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restHoaDonMockMvc;

    private HoaDon hoaDon;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static HoaDon createEntity(EntityManager em) {
        HoaDon hoaDon = new HoaDon()
            .login(DEFAULT_LOGIN)
            .dmSanPhamId(DEFAULT_DM_SAN_PHAM_ID)
            .soLuong(DEFAULT_SO_LUONG)
            .gia(DEFAULT_GIA)
            .ten(DEFAULT_TEN)
            .diaChi(DEFAULT_DIA_CHI)
            .soDienThoai(DEFAULT_SO_DIEN_THOAI)
            .email(DEFAULT_EMAIL)
            .trangThai(DEFAULT_TRANG_THAI)
            .ghiChu(DEFAULT_GHI_CHU)
            .ngayLap(DEFAULT_NGAY_LAP)
            .trangThai2(DEFAULT_TRANG_THAI_2);
        return hoaDon;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static HoaDon createUpdatedEntity(EntityManager em) {
        HoaDon hoaDon = new HoaDon()
            .login(UPDATED_LOGIN)
            .dmSanPhamId(UPDATED_DM_SAN_PHAM_ID)
            .soLuong(UPDATED_SO_LUONG)
            .gia(UPDATED_GIA)
            .ten(UPDATED_TEN)
            .diaChi(UPDATED_DIA_CHI)
            .soDienThoai(UPDATED_SO_DIEN_THOAI)
            .email(UPDATED_EMAIL)
            .trangThai(UPDATED_TRANG_THAI)
            .ghiChu(UPDATED_GHI_CHU)
            .ngayLap(UPDATED_NGAY_LAP)
            .trangThai2(UPDATED_TRANG_THAI_2);
        return hoaDon;
    }

    @BeforeEach
    public void initTest() {
        hoaDon = createEntity(em);
    }

    @Test
    @Transactional
    public void createHoaDon() throws Exception {
        int databaseSizeBeforeCreate = hoaDonRepository.findAll().size();
        // Create the HoaDon
        restHoaDonMockMvc.perform(post("/api/hoa-dons")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(hoaDon)))
            .andExpect(status().isCreated());

        // Validate the HoaDon in the database
        List<HoaDon> hoaDonList = hoaDonRepository.findAll();
        assertThat(hoaDonList).hasSize(databaseSizeBeforeCreate + 1);
        HoaDon testHoaDon = hoaDonList.get(hoaDonList.size() - 1);
        assertThat(testHoaDon.getLogin()).isEqualTo(DEFAULT_LOGIN);
        assertThat(testHoaDon.getDmSanPhamId()).isEqualTo(DEFAULT_DM_SAN_PHAM_ID);
        assertThat(testHoaDon.getSoLuong()).isEqualTo(DEFAULT_SO_LUONG);
        assertThat(testHoaDon.getGia()).isEqualTo(DEFAULT_GIA);
        assertThat(testHoaDon.getTen()).isEqualTo(DEFAULT_TEN);
        assertThat(testHoaDon.getDiaChi()).isEqualTo(DEFAULT_DIA_CHI);
        assertThat(testHoaDon.getSoDienThoai()).isEqualTo(DEFAULT_SO_DIEN_THOAI);
        assertThat(testHoaDon.getEmail()).isEqualTo(DEFAULT_EMAIL);
        assertThat(testHoaDon.getTrangThai()).isEqualTo(DEFAULT_TRANG_THAI);
        assertThat(testHoaDon.getGhiChu()).isEqualTo(DEFAULT_GHI_CHU);
        assertThat(testHoaDon.getNgayLap()).isEqualTo(DEFAULT_NGAY_LAP);
        assertThat(testHoaDon.getTrangThai2()).isEqualTo(DEFAULT_TRANG_THAI_2);
    }

    @Test
    @Transactional
    public void createHoaDonWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = hoaDonRepository.findAll().size();

        // Create the HoaDon with an existing ID
        hoaDon.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restHoaDonMockMvc.perform(post("/api/hoa-dons")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(hoaDon)))
            .andExpect(status().isBadRequest());

        // Validate the HoaDon in the database
        List<HoaDon> hoaDonList = hoaDonRepository.findAll();
        assertThat(hoaDonList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllHoaDons() throws Exception {
        // Initialize the database
        hoaDonRepository.saveAndFlush(hoaDon);

        // Get all the hoaDonList
        restHoaDonMockMvc.perform(get("/api/hoa-dons?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(hoaDon.getId().intValue())))
            .andExpect(jsonPath("$.[*].login").value(hasItem(DEFAULT_LOGIN)))
            .andExpect(jsonPath("$.[*].dmSanPhamId").value(hasItem(DEFAULT_DM_SAN_PHAM_ID)))
            .andExpect(jsonPath("$.[*].soLuong").value(hasItem(DEFAULT_SO_LUONG)))
            .andExpect(jsonPath("$.[*].gia").value(hasItem(DEFAULT_GIA)))
            .andExpect(jsonPath("$.[*].ten").value(hasItem(DEFAULT_TEN)))
            .andExpect(jsonPath("$.[*].diaChi").value(hasItem(DEFAULT_DIA_CHI)))
            .andExpect(jsonPath("$.[*].soDienThoai").value(hasItem(DEFAULT_SO_DIEN_THOAI)))
            .andExpect(jsonPath("$.[*].email").value(hasItem(DEFAULT_EMAIL)))
            .andExpect(jsonPath("$.[*].trangThai").value(hasItem(DEFAULT_TRANG_THAI)))
            .andExpect(jsonPath("$.[*].ghiChu").value(hasItem(DEFAULT_GHI_CHU)))
            .andExpect(jsonPath("$.[*].ngayLap").value(hasItem(DEFAULT_NGAY_LAP.toString())))
            .andExpect(jsonPath("$.[*].trangThai2").value(hasItem(DEFAULT_TRANG_THAI_2)));
    }
    
    @Test
    @Transactional
    public void getHoaDon() throws Exception {
        // Initialize the database
        hoaDonRepository.saveAndFlush(hoaDon);

        // Get the hoaDon
        restHoaDonMockMvc.perform(get("/api/hoa-dons/{id}", hoaDon.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(hoaDon.getId().intValue()))
            .andExpect(jsonPath("$.login").value(DEFAULT_LOGIN))
            .andExpect(jsonPath("$.dmSanPhamId").value(DEFAULT_DM_SAN_PHAM_ID))
            .andExpect(jsonPath("$.soLuong").value(DEFAULT_SO_LUONG))
            .andExpect(jsonPath("$.gia").value(DEFAULT_GIA))
            .andExpect(jsonPath("$.ten").value(DEFAULT_TEN))
            .andExpect(jsonPath("$.diaChi").value(DEFAULT_DIA_CHI))
            .andExpect(jsonPath("$.soDienThoai").value(DEFAULT_SO_DIEN_THOAI))
            .andExpect(jsonPath("$.email").value(DEFAULT_EMAIL))
            .andExpect(jsonPath("$.trangThai").value(DEFAULT_TRANG_THAI))
            .andExpect(jsonPath("$.ghiChu").value(DEFAULT_GHI_CHU))
            .andExpect(jsonPath("$.ngayLap").value(DEFAULT_NGAY_LAP.toString()))
            .andExpect(jsonPath("$.trangThai2").value(DEFAULT_TRANG_THAI_2));
    }
    @Test
    @Transactional
    public void getNonExistingHoaDon() throws Exception {
        // Get the hoaDon
        restHoaDonMockMvc.perform(get("/api/hoa-dons/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateHoaDon() throws Exception {
        // Initialize the database
        hoaDonRepository.saveAndFlush(hoaDon);

        int databaseSizeBeforeUpdate = hoaDonRepository.findAll().size();

        // Update the hoaDon
        HoaDon updatedHoaDon = hoaDonRepository.findById(hoaDon.getId()).get();
        // Disconnect from session so that the updates on updatedHoaDon are not directly saved in db
        em.detach(updatedHoaDon);
        updatedHoaDon
            .login(UPDATED_LOGIN)
            .dmSanPhamId(UPDATED_DM_SAN_PHAM_ID)
            .soLuong(UPDATED_SO_LUONG)
            .gia(UPDATED_GIA)
            .ten(UPDATED_TEN)
            .diaChi(UPDATED_DIA_CHI)
            .soDienThoai(UPDATED_SO_DIEN_THOAI)
            .email(UPDATED_EMAIL)
            .trangThai(UPDATED_TRANG_THAI)
            .ghiChu(UPDATED_GHI_CHU)
            .ngayLap(UPDATED_NGAY_LAP)
            .trangThai2(UPDATED_TRANG_THAI_2);

        restHoaDonMockMvc.perform(put("/api/hoa-dons")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(updatedHoaDon)))
            .andExpect(status().isOk());

        // Validate the HoaDon in the database
        List<HoaDon> hoaDonList = hoaDonRepository.findAll();
        assertThat(hoaDonList).hasSize(databaseSizeBeforeUpdate);
        HoaDon testHoaDon = hoaDonList.get(hoaDonList.size() - 1);
        assertThat(testHoaDon.getLogin()).isEqualTo(UPDATED_LOGIN);
        assertThat(testHoaDon.getDmSanPhamId()).isEqualTo(UPDATED_DM_SAN_PHAM_ID);
        assertThat(testHoaDon.getSoLuong()).isEqualTo(UPDATED_SO_LUONG);
        assertThat(testHoaDon.getGia()).isEqualTo(UPDATED_GIA);
        assertThat(testHoaDon.getTen()).isEqualTo(UPDATED_TEN);
        assertThat(testHoaDon.getDiaChi()).isEqualTo(UPDATED_DIA_CHI);
        assertThat(testHoaDon.getSoDienThoai()).isEqualTo(UPDATED_SO_DIEN_THOAI);
        assertThat(testHoaDon.getEmail()).isEqualTo(UPDATED_EMAIL);
        assertThat(testHoaDon.getTrangThai()).isEqualTo(UPDATED_TRANG_THAI);
        assertThat(testHoaDon.getGhiChu()).isEqualTo(UPDATED_GHI_CHU);
        assertThat(testHoaDon.getNgayLap()).isEqualTo(UPDATED_NGAY_LAP);
        assertThat(testHoaDon.getTrangThai2()).isEqualTo(UPDATED_TRANG_THAI_2);
    }

    @Test
    @Transactional
    public void updateNonExistingHoaDon() throws Exception {
        int databaseSizeBeforeUpdate = hoaDonRepository.findAll().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restHoaDonMockMvc.perform(put("/api/hoa-dons")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(hoaDon)))
            .andExpect(status().isBadRequest());

        // Validate the HoaDon in the database
        List<HoaDon> hoaDonList = hoaDonRepository.findAll();
        assertThat(hoaDonList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteHoaDon() throws Exception {
        // Initialize the database
        hoaDonRepository.saveAndFlush(hoaDon);

        int databaseSizeBeforeDelete = hoaDonRepository.findAll().size();

        // Delete the hoaDon
        restHoaDonMockMvc.perform(delete("/api/hoa-dons/{id}", hoaDon.getId())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<HoaDon> hoaDonList = hoaDonRepository.findAll();
        assertThat(hoaDonList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
