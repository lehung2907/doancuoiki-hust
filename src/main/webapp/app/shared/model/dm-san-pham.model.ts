export interface IDmSanPham {
  id?: number;
  loaiSanPham?: string;
  thuongHieu?: string;
  ten?: string;
  gia?: string;
  moTa?: string;
  anhContentType?: string;
  anh?: any;
  soDaBan?: number;
  trangThai?: string;
  cpu?: string;
  gpu?: string;
  boNho?: number;
  ram?: number;
  manHinh?: string;
  camera?: string;
  sim?: string;
}

export class DmSanPham implements IDmSanPham {
  constructor(
    public id?: number,
    public loaiSanPham?: string,
    public thuongHieu?: string,
    public ten?: string,
    public gia?: string,
    public moTa?: string,
    public anhContentType?: string,
    public anh?: any,
    public soDaBan?: number,
    public trangThai?: string,
    public cpu?: string,
    public gpu?: string,
    public boNho?: number,
    public ram?: number,
    public manHinh?: string,
    public camera?: string,
    public sim?: string
  ) {}
}
