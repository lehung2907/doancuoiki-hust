export interface IDmDienThoai {
  id?: number;
  hangSanXuat?: string;
  tenDienThoai?: string;
  giaDienThoai?: string;
  ngayNhap?: string;
  ngayXuat?: string;
  daBan?: string;
  moTaSanPham?: string;
  ghiChu?: string;
  hinhSanPhamContentType?: string;
  hinhSanPham?: any;
}

export class DmDienThoai implements IDmDienThoai {
  constructor(
    public id?: number,
    public hangSanXuat?: string,
    public tenDienThoai?: string,
    public giaDienThoai?: string,
    public ngayNhap?: string,
    public ngayXuat?: string,
    public daBan?: string,
    public moTaSanPham?: string,
    public ghiChu?: string,
    public hinhSanPhamContentType?: string,
    public hinhSanPham?: any
  ) {}
}
