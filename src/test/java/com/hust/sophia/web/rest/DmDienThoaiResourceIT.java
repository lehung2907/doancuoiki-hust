package com.hust.sophia.web.rest;

import com.hust.sophia.SophiaApp;
import com.hust.sophia.domain.DmDienThoai;
import com.hust.sophia.repository.DmDienThoaiRepository;

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
 * Integration tests for the {@link DmDienThoaiResource} REST controller.
 */
@SpringBootTest(classes = SophiaApp.class)
@AutoConfigureMockMvc
@WithMockUser
public class DmDienThoaiResourceIT {

    private static final String DEFAULT_HANG_SAN_XUAT = "AAAAAAAAAA";
    private static final String UPDATED_HANG_SAN_XUAT = "BBBBBBBBBB";

    private static final String DEFAULT_TEN_DIEN_THOAI = "AAAAAAAAAA";
    private static final String UPDATED_TEN_DIEN_THOAI = "BBBBBBBBBB";

    private static final String DEFAULT_GIA_DIEN_THOAI = "AAAAAAAAAA";
    private static final String UPDATED_GIA_DIEN_THOAI = "BBBBBBBBBB";

    private static final String DEFAULT_NGAY_NHAP = "AAAAAAAAAA";
    private static final String UPDATED_NGAY_NHAP = "BBBBBBBBBB";

    private static final String DEFAULT_NGAY_XUAT = "AAAAAAAAAA";
    private static final String UPDATED_NGAY_XUAT = "BBBBBBBBBB";

    private static final String DEFAULT_DA_BAN = "AAAAAAAAAA";
    private static final String UPDATED_DA_BAN = "BBBBBBBBBB";

    private static final String DEFAULT_MO_TA_SAN_PHAM = "AAAAAAAAAA";
    private static final String UPDATED_MO_TA_SAN_PHAM = "BBBBBBBBBB";

    private static final String DEFAULT_GHI_CHU = "AAAAAAAAAA";
    private static final String UPDATED_GHI_CHU = "BBBBBBBBBB";

    private static final byte[] DEFAULT_HINH_SAN_PHAM = TestUtil.createByteArray(1, "0");
    private static final byte[] UPDATED_HINH_SAN_PHAM = TestUtil.createByteArray(1, "1");
    private static final String DEFAULT_HINH_SAN_PHAM_CONTENT_TYPE = "image/jpg";
    private static final String UPDATED_HINH_SAN_PHAM_CONTENT_TYPE = "image/png";

    @Autowired
    private DmDienThoaiRepository dmDienThoaiRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restDmDienThoaiMockMvc;

    private DmDienThoai dmDienThoai;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static DmDienThoai createEntity(EntityManager em) {
        DmDienThoai dmDienThoai = new DmDienThoai()
            .hangSanXuat(DEFAULT_HANG_SAN_XUAT)
            .tenDienThoai(DEFAULT_TEN_DIEN_THOAI)
            .giaDienThoai(DEFAULT_GIA_DIEN_THOAI)
            .ngayNhap(DEFAULT_NGAY_NHAP)
            .ngayXuat(DEFAULT_NGAY_XUAT)
            .daBan(DEFAULT_DA_BAN)
            .moTaSanPham(DEFAULT_MO_TA_SAN_PHAM)
            .ghiChu(DEFAULT_GHI_CHU)
            .hinhSanPham(DEFAULT_HINH_SAN_PHAM)
            .hinhSanPhamContentType(DEFAULT_HINH_SAN_PHAM_CONTENT_TYPE);
        return dmDienThoai;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static DmDienThoai createUpdatedEntity(EntityManager em) {
        DmDienThoai dmDienThoai = new DmDienThoai()
            .hangSanXuat(UPDATED_HANG_SAN_XUAT)
            .tenDienThoai(UPDATED_TEN_DIEN_THOAI)
            .giaDienThoai(UPDATED_GIA_DIEN_THOAI)
            .ngayNhap(UPDATED_NGAY_NHAP)
            .ngayXuat(UPDATED_NGAY_XUAT)
            .daBan(UPDATED_DA_BAN)
            .moTaSanPham(UPDATED_MO_TA_SAN_PHAM)
            .ghiChu(UPDATED_GHI_CHU)
            .hinhSanPham(UPDATED_HINH_SAN_PHAM)
            .hinhSanPhamContentType(UPDATED_HINH_SAN_PHAM_CONTENT_TYPE);
        return dmDienThoai;
    }

    @BeforeEach
    public void initTest() {
        dmDienThoai = createEntity(em);
    }

    @Test
    @Transactional
    public void createDmDienThoai() throws Exception {
        int databaseSizeBeforeCreate = dmDienThoaiRepository.findAll().size();
        // Create the DmDienThoai
        restDmDienThoaiMockMvc.perform(post("/api/dm-dien-thoais")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(dmDienThoai)))
            .andExpect(status().isCreated());

        // Validate the DmDienThoai in the database
        List<DmDienThoai> dmDienThoaiList = dmDienThoaiRepository.findAll();
        assertThat(dmDienThoaiList).hasSize(databaseSizeBeforeCreate + 1);
        DmDienThoai testDmDienThoai = dmDienThoaiList.get(dmDienThoaiList.size() - 1);
        assertThat(testDmDienThoai.getHangSanXuat()).isEqualTo(DEFAULT_HANG_SAN_XUAT);
        assertThat(testDmDienThoai.getTenDienThoai()).isEqualTo(DEFAULT_TEN_DIEN_THOAI);
        assertThat(testDmDienThoai.getGiaDienThoai()).isEqualTo(DEFAULT_GIA_DIEN_THOAI);
        assertThat(testDmDienThoai.getNgayNhap()).isEqualTo(DEFAULT_NGAY_NHAP);
        assertThat(testDmDienThoai.getNgayXuat()).isEqualTo(DEFAULT_NGAY_XUAT);
        assertThat(testDmDienThoai.getDaBan()).isEqualTo(DEFAULT_DA_BAN);
        assertThat(testDmDienThoai.getMoTaSanPham()).isEqualTo(DEFAULT_MO_TA_SAN_PHAM);
        assertThat(testDmDienThoai.getGhiChu()).isEqualTo(DEFAULT_GHI_CHU);
        assertThat(testDmDienThoai.getHinhSanPham()).isEqualTo(DEFAULT_HINH_SAN_PHAM);
        assertThat(testDmDienThoai.getHinhSanPhamContentType()).isEqualTo(DEFAULT_HINH_SAN_PHAM_CONTENT_TYPE);
    }

    @Test
    @Transactional
    public void createDmDienThoaiWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = dmDienThoaiRepository.findAll().size();

        // Create the DmDienThoai with an existing ID
        dmDienThoai.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restDmDienThoaiMockMvc.perform(post("/api/dm-dien-thoais")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(dmDienThoai)))
            .andExpect(status().isBadRequest());

        // Validate the DmDienThoai in the database
        List<DmDienThoai> dmDienThoaiList = dmDienThoaiRepository.findAll();
        assertThat(dmDienThoaiList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllDmDienThoais() throws Exception {
        // Initialize the database
        dmDienThoaiRepository.saveAndFlush(dmDienThoai);

        // Get all the dmDienThoaiList
        restDmDienThoaiMockMvc.perform(get("/api/dm-dien-thoais?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(dmDienThoai.getId().intValue())))
            .andExpect(jsonPath("$.[*].hangSanXuat").value(hasItem(DEFAULT_HANG_SAN_XUAT)))
            .andExpect(jsonPath("$.[*].tenDienThoai").value(hasItem(DEFAULT_TEN_DIEN_THOAI)))
            .andExpect(jsonPath("$.[*].giaDienThoai").value(hasItem(DEFAULT_GIA_DIEN_THOAI)))
            .andExpect(jsonPath("$.[*].ngayNhap").value(hasItem(DEFAULT_NGAY_NHAP)))
            .andExpect(jsonPath("$.[*].ngayXuat").value(hasItem(DEFAULT_NGAY_XUAT)))
            .andExpect(jsonPath("$.[*].daBan").value(hasItem(DEFAULT_DA_BAN)))
            .andExpect(jsonPath("$.[*].moTaSanPham").value(hasItem(DEFAULT_MO_TA_SAN_PHAM)))
            .andExpect(jsonPath("$.[*].ghiChu").value(hasItem(DEFAULT_GHI_CHU)))
            .andExpect(jsonPath("$.[*].hinhSanPhamContentType").value(hasItem(DEFAULT_HINH_SAN_PHAM_CONTENT_TYPE)))
            .andExpect(jsonPath("$.[*].hinhSanPham").value(hasItem(Base64Utils.encodeToString(DEFAULT_HINH_SAN_PHAM))));
    }
    
    @Test
    @Transactional
    public void getDmDienThoai() throws Exception {
        // Initialize the database
        dmDienThoaiRepository.saveAndFlush(dmDienThoai);

        // Get the dmDienThoai
        restDmDienThoaiMockMvc.perform(get("/api/dm-dien-thoais/{id}", dmDienThoai.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(dmDienThoai.getId().intValue()))
            .andExpect(jsonPath("$.hangSanXuat").value(DEFAULT_HANG_SAN_XUAT))
            .andExpect(jsonPath("$.tenDienThoai").value(DEFAULT_TEN_DIEN_THOAI))
            .andExpect(jsonPath("$.giaDienThoai").value(DEFAULT_GIA_DIEN_THOAI))
            .andExpect(jsonPath("$.ngayNhap").value(DEFAULT_NGAY_NHAP))
            .andExpect(jsonPath("$.ngayXuat").value(DEFAULT_NGAY_XUAT))
            .andExpect(jsonPath("$.daBan").value(DEFAULT_DA_BAN))
            .andExpect(jsonPath("$.moTaSanPham").value(DEFAULT_MO_TA_SAN_PHAM))
            .andExpect(jsonPath("$.ghiChu").value(DEFAULT_GHI_CHU))
            .andExpect(jsonPath("$.hinhSanPhamContentType").value(DEFAULT_HINH_SAN_PHAM_CONTENT_TYPE))
            .andExpect(jsonPath("$.hinhSanPham").value(Base64Utils.encodeToString(DEFAULT_HINH_SAN_PHAM)));
    }
    @Test
    @Transactional
    public void getNonExistingDmDienThoai() throws Exception {
        // Get the dmDienThoai
        restDmDienThoaiMockMvc.perform(get("/api/dm-dien-thoais/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateDmDienThoai() throws Exception {
        // Initialize the database
        dmDienThoaiRepository.saveAndFlush(dmDienThoai);

        int databaseSizeBeforeUpdate = dmDienThoaiRepository.findAll().size();

        // Update the dmDienThoai
        DmDienThoai updatedDmDienThoai = dmDienThoaiRepository.findById(dmDienThoai.getId()).get();
        // Disconnect from session so that the updates on updatedDmDienThoai are not directly saved in db
        em.detach(updatedDmDienThoai);
        updatedDmDienThoai
            .hangSanXuat(UPDATED_HANG_SAN_XUAT)
            .tenDienThoai(UPDATED_TEN_DIEN_THOAI)
            .giaDienThoai(UPDATED_GIA_DIEN_THOAI)
            .ngayNhap(UPDATED_NGAY_NHAP)
            .ngayXuat(UPDATED_NGAY_XUAT)
            .daBan(UPDATED_DA_BAN)
            .moTaSanPham(UPDATED_MO_TA_SAN_PHAM)
            .ghiChu(UPDATED_GHI_CHU)
            .hinhSanPham(UPDATED_HINH_SAN_PHAM)
            .hinhSanPhamContentType(UPDATED_HINH_SAN_PHAM_CONTENT_TYPE);

        restDmDienThoaiMockMvc.perform(put("/api/dm-dien-thoais")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(updatedDmDienThoai)))
            .andExpect(status().isOk());

        // Validate the DmDienThoai in the database
        List<DmDienThoai> dmDienThoaiList = dmDienThoaiRepository.findAll();
        assertThat(dmDienThoaiList).hasSize(databaseSizeBeforeUpdate);
        DmDienThoai testDmDienThoai = dmDienThoaiList.get(dmDienThoaiList.size() - 1);
        assertThat(testDmDienThoai.getHangSanXuat()).isEqualTo(UPDATED_HANG_SAN_XUAT);
        assertThat(testDmDienThoai.getTenDienThoai()).isEqualTo(UPDATED_TEN_DIEN_THOAI);
        assertThat(testDmDienThoai.getGiaDienThoai()).isEqualTo(UPDATED_GIA_DIEN_THOAI);
        assertThat(testDmDienThoai.getNgayNhap()).isEqualTo(UPDATED_NGAY_NHAP);
        assertThat(testDmDienThoai.getNgayXuat()).isEqualTo(UPDATED_NGAY_XUAT);
        assertThat(testDmDienThoai.getDaBan()).isEqualTo(UPDATED_DA_BAN);
        assertThat(testDmDienThoai.getMoTaSanPham()).isEqualTo(UPDATED_MO_TA_SAN_PHAM);
        assertThat(testDmDienThoai.getGhiChu()).isEqualTo(UPDATED_GHI_CHU);
        assertThat(testDmDienThoai.getHinhSanPham()).isEqualTo(UPDATED_HINH_SAN_PHAM);
        assertThat(testDmDienThoai.getHinhSanPhamContentType()).isEqualTo(UPDATED_HINH_SAN_PHAM_CONTENT_TYPE);
    }

    @Test
    @Transactional
    public void updateNonExistingDmDienThoai() throws Exception {
        int databaseSizeBeforeUpdate = dmDienThoaiRepository.findAll().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restDmDienThoaiMockMvc.perform(put("/api/dm-dien-thoais")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(dmDienThoai)))
            .andExpect(status().isBadRequest());

        // Validate the DmDienThoai in the database
        List<DmDienThoai> dmDienThoaiList = dmDienThoaiRepository.findAll();
        assertThat(dmDienThoaiList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteDmDienThoai() throws Exception {
        // Initialize the database
        dmDienThoaiRepository.saveAndFlush(dmDienThoai);

        int databaseSizeBeforeDelete = dmDienThoaiRepository.findAll().size();

        // Delete the dmDienThoai
        restDmDienThoaiMockMvc.perform(delete("/api/dm-dien-thoais/{id}", dmDienThoai.getId())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<DmDienThoai> dmDienThoaiList = dmDienThoaiRepository.findAll();
        assertThat(dmDienThoaiList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
