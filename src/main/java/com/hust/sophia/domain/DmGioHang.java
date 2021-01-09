package com.hust.sophia.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A DmGioHang.
 */
@Entity
@Table(name = "dm_gio_hang")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class DmGioHang implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private String userId;

    @Column(name = "dm_san_pham_id")
    private Integer dmSanPhamId;

    @Column(name = "dm_mau_id")
    private Integer dmMauId;

    @Column(name = "so_luong")
    private Integer soLuong;

    @Column(name = "gia")
    private String gia;

    @Column(name = "hoa_don")
    private String hoaDon;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public DmGioHang userId(String userId) {
        this.userId = userId;
        return this;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Integer getDmSanPhamId() {
        return dmSanPhamId;
    }

    public DmGioHang dmSanPhamId(Integer dmSanPhamId) {
        this.dmSanPhamId = dmSanPhamId;
        return this;
    }

    public void setDmSanPhamId(Integer dmSanPhamId) {
        this.dmSanPhamId = dmSanPhamId;
    }

    public Integer getDmMauId() {
        return dmMauId;
    }

    public DmGioHang dmMauId(Integer dmMauId) {
        this.dmMauId = dmMauId;
        return this;
    }

    public void setDmMauId(Integer dmMauId) {
        this.dmMauId = dmMauId;
    }

    public Integer getSoLuong() {
        return soLuong;
    }

    public DmGioHang soLuong(Integer soLuong) {
        this.soLuong = soLuong;
        return this;
    }

    public void setSoLuong(Integer soLuong) {
        this.soLuong = soLuong;
    }

    public String getGia() {
        return gia;
    }

    public DmGioHang gia(String gia) {
        this.gia = gia;
        return this;
    }

    public void setGia(String gia) {
        this.gia = gia;
    }

    public String getHoaDon() {
        return hoaDon;
    }

    public DmGioHang hoaDon(String hoaDon) {
        this.hoaDon = hoaDon;
        return this;
    }

    public void setHoaDon(String hoaDon) {
        this.hoaDon = hoaDon;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof DmGioHang)) {
            return false;
        }
        return id != null && id.equals(((DmGioHang) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "DmGioHang{" +
            "id=" + getId() +
            ", userId='" + getUserId() + "'" +
            ", dmSanPhamId=" + getDmSanPhamId() +
            ", dmMauId=" + getDmMauId() +
            ", soLuong=" + getSoLuong() +
            ", gia='" + getGia() + "'" +
            ", hoaDon='" + getHoaDon() + "'" +
            "}";
    }
}
