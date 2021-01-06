export interface IDmDongHo {
  id?: number;
  hangSanXuat?: string;
  ten?: string;
  gia?: string;
  ngayNhap?: string;
  ngayXuat?: string;
  moTa?: string;
  ghiChu?: string;
}

export class DmDongHo implements IDmDongHo {
  constructor(
    public id?: number,
    public hangSanXuat?: string,
    public ten?: string,
    public gia?: string,
    public ngayNhap?: string,
    public ngayXuat?: string,
    public moTa?: string,
    public ghiChu?: string
  ) {}
}
