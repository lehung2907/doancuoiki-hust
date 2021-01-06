export interface IDmTablet {
  id?: number;
  hangSanXuat?: string;
  tenTablet?: string;
  giaTablet?: string;
  ngayNhap?: string;
  ngayXuat?: string;
  moTaSanPham?: string;
  ghiChu?: string;
}

export class DmTablet implements IDmTablet {
  constructor(
    public id?: number,
    public hangSanXuat?: string,
    public tenTablet?: string,
    public giaTablet?: string,
    public ngayNhap?: string,
    public ngayXuat?: string,
    public moTaSanPham?: string,
    public ghiChu?: string
  ) {}
}
