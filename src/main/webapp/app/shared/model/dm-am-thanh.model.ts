export interface IDmAmThanh {
  id?: number;
  hangSanXuat?: string;
  ten?: string;
  gia?: string;
  ngayNhap?: string;
  ngayXuat?: string;
  moTaSanPham?: string;
  ghiChu?: string;
}

export class DmAmThanh implements IDmAmThanh {
  constructor(
    public id?: number,
    public hangSanXuat?: string,
    public ten?: string,
    public gia?: string,
    public ngayNhap?: string,
    public ngayXuat?: string,
    public moTaSanPham?: string,
    public ghiChu?: string
  ) {}
}
