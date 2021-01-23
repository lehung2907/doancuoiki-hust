package com.hust.sophia.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;

/**
 * A HoaDon.
 */
@Entity
@Table(name = "hoa_don")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class HoaDon implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "login")
    private String login;

    @Column(name = "dm_san_pham_id")
    private Integer dmSanPhamId;

    @Column(name = "so_luong")
    private Integer soLuong;

    @Column(name = "gia")
    private Integer gia;

    @Column(name = "ten")
    private String ten;

    @Column(name = "dia_chi")
    private String diaChi;

    @Column(name = "so_dien_thoai")
    private String soDienThoai;

    @Column(name = "email")
    private String email;

    @Column(name = "trang_thai")
    private String trangThai;

    @Column(name = "ghi_chu")
    private String ghiChu;

    @Column(name = "ngay_lap")
    private LocalDate ngayLap;

    @Column(name = "trang_thai_2")
    private String trangThai2;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public HoaDon login(String login) {
        this.login = login;
        return this;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public Integer getDmSanPhamId() {
        return dmSanPhamId;
    }

    public HoaDon dmSanPhamId(Integer dmSanPhamId) {
        this.dmSanPhamId = dmSanPhamId;
        return this;
    }

    public void setDmSanPhamId(Integer dmSanPhamId) {
        this.dmSanPhamId = dmSanPhamId;
    }

    public Integer getSoLuong() {
        return soLuong;
    }

    public HoaDon soLuong(Integer soLuong) {
        this.soLuong = soLuong;
        return this;
    }

    public void setSoLuong(Integer soLuong) {
        this.soLuong = soLuong;
    }

    public Integer getGia() {
        return gia;
    }

    public HoaDon gia(Integer gia) {
        this.gia = gia;
        return this;
    }

    public void setGia(Integer gia) {
        this.gia = gia;
    }

    public String getTen() {
        return ten;
    }

    public HoaDon ten(String ten) {
        this.ten = ten;
        return this;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public String getDiaChi() {
        return diaChi;
    }

    public HoaDon diaChi(String diaChi) {
        this.diaChi = diaChi;
        return this;
    }

    public void setDiaChi(String diaChi) {
        this.diaChi = diaChi;
    }

    public String getSoDienThoai() {
        return soDienThoai;
    }

    public HoaDon soDienThoai(String soDienThoai) {
        this.soDienThoai = soDienThoai;
        return this;
    }

    public void setSoDienThoai(String soDienThoai) {
        this.soDienThoai = soDienThoai;
    }

    public String getEmail() {
        return email;
    }

    public HoaDon email(String email) {
        this.email = email;
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTrangThai() {
        return trangThai;
    }

    public HoaDon trangThai(String trangThai) {
        this.trangThai = trangThai;
        return this;
    }

    public void setTrangThai(String trangThai) {
        this.trangThai = trangThai;
    }

    public String getGhiChu() {
        return ghiChu;
    }

    public HoaDon ghiChu(String ghiChu) {
        this.ghiChu = ghiChu;
        return this;
    }

    public void setGhiChu(String ghiChu) {
        this.ghiChu = ghiChu;
    }

    public LocalDate getNgayLap() {
        return ngayLap;
    }

    public HoaDon ngayLap(LocalDate ngayLap) {
        this.ngayLap = ngayLap;
        return this;
    }

    public void setNgayLap(LocalDate ngayLap) {
        this.ngayLap = ngayLap;
    }

    public String getTrangThai2() {
        return trangThai2;
    }

    public HoaDon trangThai2(String trangThai2) {
        this.trangThai2 = trangThai2;
        return this;
    }

    public void setTrangThai2(String trangThai2) {
        this.trangThai2 = trangThai2;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof HoaDon)) {
            return false;
        }
        return id != null && id.equals(((HoaDon) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "HoaDon{" +
            "id=" + getId() +
            ", login='" + getLogin() + "'" +
            ", dmSanPhamId=" + getDmSanPhamId() +
            ", soLuong=" + getSoLuong() +
            ", gia=" + getGia() +
            ", ten='" + getTen() + "'" +
            ", diaChi='" + getDiaChi() + "'" +
            ", soDienThoai='" + getSoDienThoai() + "'" +
            ", email='" + getEmail() + "'" +
            ", trangThai='" + getTrangThai() + "'" +
            ", ghiChu='" + getGhiChu() + "'" +
            ", ngayLap='" + getNgayLap() + "'" +
            ", trangThai2='" + getTrangThai2() + "'" +
            "}";
    }
}
