export interface IDmLapTop {
  id?: number;
  hangSanXuat?: string;
  tenLapTop?: string;
  giaLapTop?: string;
  ngayNhap?: string;
  ngayXuat?: string;
  moTaSanPham?: string;
  ghiChu?: string;
}

export class DmLapTop implements IDmLapTop {
  constructor(
    public id?: number,
    public hangSanXuat?: string,
    public tenLapTop?: string,
    public giaLapTop?: string,
    public ngayNhap?: string,
    public ngayXuat?: string,
    public moTaSanPham?: string,
    public ghiChu?: string
  ) {}
}
