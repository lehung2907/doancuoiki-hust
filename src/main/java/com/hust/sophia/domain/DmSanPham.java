package com.hust.sophia.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A DmSanPham.
 */
@Entity
@Table(name = "dm_san_pham")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class DmSanPham implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "loai_san_pham")
    private String loaiSanPham;

    @Column(name = "thuong_hieu")
    private String thuongHieu;

    @Column(name = "ten")
    private String ten;

    @Column(name = "gia")
    private String gia;

    @Column(name = "mo_ta")
    private String moTa;

    @Lob
    @Column(name = "anh")
    private byte[] anh;

    @Column(name = "anh_content_type")
    private String anhContentType;

    @Column(name = "so_da_ban")
    private Integer soDaBan;

    @Column(name = "trang_thai")
    private String trangThai;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLoaiSanPham() {
        return loaiSanPham;
    }

    public DmSanPham loaiSanPham(String loaiSanPham) {
        this.loaiSanPham = loaiSanPham;
        return this;
    }

    public void setLoaiSanPham(String loaiSanPham) {
        this.loaiSanPham = loaiSanPham;
    }

    public String getThuongHieu() {
        return thuongHieu;
    }

    public DmSanPham thuongHieu(String thuongHieu) {
        this.thuongHieu = thuongHieu;
        return this;
    }

    public void setThuongHieu(String thuongHieu) {
        this.thuongHieu = thuongHieu;
    }

    public String getTen() {
        return ten;
    }

    public DmSanPham ten(String ten) {
        this.ten = ten;
        return this;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public String getGia() {
        return gia;
    }

    public DmSanPham gia(String gia) {
        this.gia = gia;
        return this;
    }

    public void setGia(String gia) {
        this.gia = gia;
    }

    public String getMoTa() {
        return moTa;
    }

    public DmSanPham moTa(String moTa) {
        this.moTa = moTa;
        return this;
    }

    public void setMoTa(String moTa) {
        this.moTa = moTa;
    }

    public byte[] getAnh() {
        return anh;
    }

    public DmSanPham anh(byte[] anh) {
        this.anh = anh;
        return this;
    }

    public void setAnh(byte[] anh) {
        this.anh = anh;
    }

    public String getAnhContentType() {
        return anhContentType;
    }

    public DmSanPham anhContentType(String anhContentType) {
        this.anhContentType = anhContentType;
        return this;
    }

    public void setAnhContentType(String anhContentType) {
        this.anhContentType = anhContentType;
    }

    public Integer getSoDaBan() {
        return soDaBan;
    }

    public DmSanPham soDaBan(Integer soDaBan) {
        this.soDaBan = soDaBan;
        return this;
    }

    public void setSoDaBan(Integer soDaBan) {
        this.soDaBan = soDaBan;
    }

    public String getTrangThai() {
        return trangThai;
    }

    public DmSanPham trangThai(String trangThai) {
        this.trangThai = trangThai;
        return this;
    }

    public void setTrangThai(String trangThai) {
        this.trangThai = trangThai;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof DmSanPham)) {
            return false;
        }
        return id != null && id.equals(((DmSanPham) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "DmSanPham{" +
            "id=" + getId() +
            ", loaiSanPham='" + getLoaiSanPham() + "'" +
            ", thuongHieu='" + getThuongHieu() + "'" +
            ", ten='" + getTen() + "'" +
            ", gia='" + getGia() + "'" +
            ", moTa='" + getMoTa() + "'" +
            ", anh='" + getAnh() + "'" +
            ", anhContentType='" + getAnhContentType() + "'" +
            ", soDaBan=" + getSoDaBan() +
            ", trangThai='" + getTrangThai() + "'" +
            "}";
    }
}
