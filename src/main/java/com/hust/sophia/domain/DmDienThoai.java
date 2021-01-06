package com.hust.sophia.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A DmDienThoai.
 */
@Entity
@Table(name = "dm_dien_thoai")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class DmDienThoai implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "hang_san_xuat")
    private String hangSanXuat;

    @Column(name = "ten_dien_thoai")
    private String tenDienThoai;

    @Column(name = "gia_dien_thoai")
    private String giaDienThoai;

    @Column(name = "ngay_nhap")
    private String ngayNhap;

    @Column(name = "ngay_xuat")
    private String ngayXuat;

    @Column(name = "da_ban")
    private String daBan;

    @Column(name = "mo_ta_san_pham")
    private String moTaSanPham;

    @Column(name = "ghi_chu")
    private String ghiChu;

    @Lob
    @Column(name = "hinh_san_pham")
    private byte[] hinhSanPham;

    @Column(name = "hinh_san_pham_content_type")
    private String hinhSanPhamContentType;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHangSanXuat() {
        return hangSanXuat;
    }

    public DmDienThoai hangSanXuat(String hangSanXuat) {
        this.hangSanXuat = hangSanXuat;
        return this;
    }

    public void setHangSanXuat(String hangSanXuat) {
        this.hangSanXuat = hangSanXuat;
    }

    public String getTenDienThoai() {
        return tenDienThoai;
    }

    public DmDienThoai tenDienThoai(String tenDienThoai) {
        this.tenDienThoai = tenDienThoai;
        return this;
    }

    public void setTenDienThoai(String tenDienThoai) {
        this.tenDienThoai = tenDienThoai;
    }

    public String getGiaDienThoai() {
        return giaDienThoai;
    }

    public DmDienThoai giaDienThoai(String giaDienThoai) {
        this.giaDienThoai = giaDienThoai;
        return this;
    }

    public void setGiaDienThoai(String giaDienThoai) {
        this.giaDienThoai = giaDienThoai;
    }

    public String getNgayNhap() {
        return ngayNhap;
    }

    public DmDienThoai ngayNhap(String ngayNhap) {
        this.ngayNhap = ngayNhap;
        return this;
    }

    public void setNgayNhap(String ngayNhap) {
        this.ngayNhap = ngayNhap;
    }

    public String getNgayXuat() {
        return ngayXuat;
    }

    public DmDienThoai ngayXuat(String ngayXuat) {
        this.ngayXuat = ngayXuat;
        return this;
    }

    public void setNgayXuat(String ngayXuat) {
        this.ngayXuat = ngayXuat;
    }

    public String getDaBan() {
        return daBan;
    }

    public DmDienThoai daBan(String daBan) {
        this.daBan = daBan;
        return this;
    }

    public void setDaBan(String daBan) {
        this.daBan = daBan;
    }

    public String getMoTaSanPham() {
        return moTaSanPham;
    }

    public DmDienThoai moTaSanPham(String moTaSanPham) {
        this.moTaSanPham = moTaSanPham;
        return this;
    }

    public void setMoTaSanPham(String moTaSanPham) {
        this.moTaSanPham = moTaSanPham;
    }

    public String getGhiChu() {
        return ghiChu;
    }

    public DmDienThoai ghiChu(String ghiChu) {
        this.ghiChu = ghiChu;
        return this;
    }

    public void setGhiChu(String ghiChu) {
        this.ghiChu = ghiChu;
    }

    public byte[] getHinhSanPham() {
        return hinhSanPham;
    }

    public DmDienThoai hinhSanPham(byte[] hinhSanPham) {
        this.hinhSanPham = hinhSanPham;
        return this;
    }

    public void setHinhSanPham(byte[] hinhSanPham) {
        this.hinhSanPham = hinhSanPham;
    }

    public String getHinhSanPhamContentType() {
        return hinhSanPhamContentType;
    }

    public DmDienThoai hinhSanPhamContentType(String hinhSanPhamContentType) {
        this.hinhSanPhamContentType = hinhSanPhamContentType;
        return this;
    }

    public void setHinhSanPhamContentType(String hinhSanPhamContentType) {
        this.hinhSanPhamContentType = hinhSanPhamContentType;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof DmDienThoai)) {
            return false;
        }
        return id != null && id.equals(((DmDienThoai) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "DmDienThoai{" +
            "id=" + getId() +
            ", hangSanXuat='" + getHangSanXuat() + "'" +
            ", tenDienThoai='" + getTenDienThoai() + "'" +
            ", giaDienThoai='" + getGiaDienThoai() + "'" +
            ", ngayNhap='" + getNgayNhap() + "'" +
            ", ngayXuat='" + getNgayXuat() + "'" +
            ", daBan='" + getDaBan() + "'" +
            ", moTaSanPham='" + getMoTaSanPham() + "'" +
            ", ghiChu='" + getGhiChu() + "'" +
            ", hinhSanPham='" + getHinhSanPham() + "'" +
            ", hinhSanPhamContentType='" + getHinhSanPhamContentType() + "'" +
            "}";
    }
}
