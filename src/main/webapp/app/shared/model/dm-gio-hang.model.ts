export interface IDmGioHang {
  id?: number;
  login?: string;
  dmSanPhamId?: number;
  anhSpContentType?: string;
  anhSp?: any;
  soLuong?: number;
  gia?: number;
  hoaDonId?: number;
  chiTiet?: string;
  thanhTien?: number;
}

export class DmGioHang implements IDmGioHang {
  constructor(
    public id?: number,
    public login?: string,
    public dmSanPhamId?: number,
    public anhSpContentType?: string,
    public anhSp?: any,
    public soLuong?: number,
    public gia?: number,
    public hoaDonId?: number,
    public chiTiet?: string,
    public thanhTien?: number
  ) {}
}
