package com.hust.sophia.service.dto;

import com.hust.sophia.domain.DmGioHang;

import java.util.List;

public class DmGioHangDTO {
    private String tenKhachHang;
    private String soDienThoai;
    private String email;
    private String diaChi;
    private String ghiChu;
    private List<DmGioHang> dmGioHangs;

    public DmGioHangDTO() {
    }

    public DmGioHangDTO(String tenKhachHang, String soDienThoai, String email, String diaChi, String ghiChu, List<DmGioHang> dmGioHangs) {
        this.tenKhachHang = tenKhachHang;
        this.soDienThoai = soDienThoai;
        this.email = email;
        this.diaChi = diaChi;
        this.ghiChu = ghiChu;
        this.dmGioHangs = dmGioHangs;
    }

    public String getTenKhachHang() {
        return tenKhachHang;
    }

    public void setTenKhachHang(String tenKhachHang) {
        this.tenKhachHang = tenKhachHang;
    }

    public String getSoDienThoai() {
        return soDienThoai;
    }

    public void setSoDienThoai(String soDienThoai) {
        this.soDienThoai = soDienThoai;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDiaChi() {
        return diaChi;
    }

    public void setDiaChi(String diaChi) {
        this.diaChi = diaChi;
    }

    public String getGhiChu() {
        return ghiChu;
    }

    public void setGhiChu(String ghiChu) {
        this.ghiChu = ghiChu;
    }

    public List<DmGioHang> getDmGioHangs() {
        return dmGioHangs;
    }

    public void setDmGioHangs(List<DmGioHang> dmGioHangs) {
        this.dmGioHangs = dmGioHangs;
    }
}
