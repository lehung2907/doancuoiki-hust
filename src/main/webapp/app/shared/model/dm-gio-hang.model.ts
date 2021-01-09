export interface IDmGioHang {
  id?: number;
  userId?: string;
  dmSanPhamId?: number;
  dmMauId?: number;
  soLuong?: number;
  gia?: string;
  hoaDon?: string;
}

export class DmGioHang implements IDmGioHang {
  constructor(
    public id?: number,
    public userId?: string,
    public dmSanPhamId?: number,
    public dmMauId?: number,
    public soLuong?: number,
    public gia?: string,
    public hoaDon?: string
  ) {}
}
