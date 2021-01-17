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

    @Column(name = "cpu")
    private String cpu;

    @Column(name = "gpu")
    private String gpu;

    @Column(name = "boNho")
    private Integer boNho;

    @Column(name = "ram")
    private Integer ram;

    @Column(name = "man_hinh")
    private String manHinh;

    @Column(name = "camera")
    private String camera;

    @Column(name = "sim")
    private String sim;

    public DmSanPham() {
    }

    public DmSanPham(Long id, String loaiSanPham, String thuongHieu, String ten, String gia, String moTa, byte[] anh, String anhContentType, Integer soDaBan, String trangThai, String cpu, String gpu, Integer boNho, Integer ram, String manHinh, String camera, String sim) {
        this.id = id;
        this.loaiSanPham = loaiSanPham;
        this.thuongHieu = thuongHieu;
        this.ten = ten;
        this.gia = gia;
        this.moTa = moTa;
        this.anh = anh;
        this.anhContentType = anhContentType;
        this.soDaBan = soDaBan;
        this.trangThai = trangThai;
        this.cpu = cpu;
        this.gpu = gpu;
        this.boNho = boNho;
        this.ram = ram;
        this.manHinh = manHinh;
        this.camera = camera;
        this.sim = sim;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLoaiSanPham() {
        return loaiSanPham;
    }

    public void setLoaiSanPham(String loaiSanPham) {
        this.loaiSanPham = loaiSanPham;
    }

    public String getThuongHieu() {
        return thuongHieu;
    }

    public void setThuongHieu(String thuongHieu) {
        this.thuongHieu = thuongHieu;
    }

    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public String getGia() {
        return gia;
    }

    public void setGia(String gia) {
        this.gia = gia;
    }

    public String getMoTa() {
        return moTa;
    }

    public void setMoTa(String moTa) {
        this.moTa = moTa;
    }

    public byte[] getAnh() {
        return anh;
    }

    public void setAnh(byte[] anh) {
        this.anh = anh;
    }

    public String getAnhContentType() {
        return anhContentType;
    }

    public void setAnhContentType(String anhContentType) {
        this.anhContentType = anhContentType;
    }

    public Integer getSoDaBan() {
        return soDaBan;
    }

    public void setSoDaBan(Integer soDaBan) {
        this.soDaBan = soDaBan;
    }

    public String getTrangThai() {
        return trangThai;
    }

    public void setTrangThai(String trangThai) {
        this.trangThai = trangThai;
    }

    public String getCpu() {
        return cpu;
    }

    public void setCpu(String cpu) {
        this.cpu = cpu;
    }

    public String getGpu() {
        return gpu;
    }

    public void setGpu(String gpu) {
        this.gpu = gpu;
    }

    public Integer getBoNho() {
        return boNho;
    }

    public void setBoNho(Integer boNho) {
        this.boNho = boNho;
    }

    public Integer getRam() {
        return ram;
    }

    public void setRam(Integer ram) {
        this.ram = ram;
    }

    public String getManHinh() {
        return manHinh;
    }

    public void setManHinh(String manHinh) {
        this.manHinh = manHinh;
    }

    public String getCamera() {
        return camera;
    }

    public void setCamera(String camera) {
        this.camera = camera;
    }

    public String getSim() {
        return sim;
    }

    public void setSim(String sim) {
        this.sim = sim;
    }
}
