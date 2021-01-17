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

    @Column(name = "login")
    private String login;

    @Column(name = "dm_san_pham_id")
    private Integer dmSanPhamId;

    @Lob
    @Column(name = "anh_sp")
    private byte[] anhSp;

    @Column(name = "anh_sp_content_type")
    private String anhSpContentType;

    @Column(name = "so_luong")
    private Integer soLuong;

    @Column(name = "gia")
    private Integer gia;

    @Column(name = "hoa_don_id")
    private Integer hoaDonId;

    @Column(name = "chi_tiet")
    private String chiTiet;

    public DmGioHang() {
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public Integer getDmSanPhamId() {
        return dmSanPhamId;
    }

    public void setDmSanPhamId(Integer dmSanPhamId) {
        this.dmSanPhamId = dmSanPhamId;
    }

    public byte[] getAnhSp() {
        return anhSp;
    }

    public void setAnhSp(byte[] anhSp) {
        this.anhSp = anhSp;
    }

    public String getAnhSpContentType() {
        return anhSpContentType;
    }

    public void setAnhSpContentType(String anhSpContentType) {
        this.anhSpContentType = anhSpContentType;
    }

    public Integer getSoLuong() {
        return soLuong;
    }

    public void setSoLuong(Integer soLuong) {
        this.soLuong = soLuong;
    }

    public Integer getGia() {
        return gia;
    }

    public void setGia(Integer gia) {
        this.gia = gia;
    }

    public Integer getHoaDonId() {
        return hoaDonId;
    }

    public void setHoaDonId(Integer hoaDonId) {
        this.hoaDonId = hoaDonId;
    }

    public String getChiTiet() {
        return chiTiet;
    }

    public void setChiTiet(String chiTiet) {
        this.chiTiet = chiTiet;
    }

    public DmGioHang(Long id, String login, Integer dmSanPhamId, byte[] anhSp, String anhSpContentType, Integer soLuong, Integer gia, Integer hoaDonId, String chiTiet) {
        this.id = id;
        this.login = login;
        this.dmSanPhamId = dmSanPhamId;
        this.anhSp = anhSp;
        this.anhSpContentType = anhSpContentType;
        this.soLuong = soLuong;
        this.gia = gia;
        this.hoaDonId = hoaDonId;
        this.chiTiet = chiTiet;
    }
}
