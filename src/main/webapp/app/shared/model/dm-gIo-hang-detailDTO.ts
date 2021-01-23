import { DmGioHang } from './dm-gio-hang.model';

export interface IDmGioHangDTO {
  tenKhachHang?: string;
  soDienThoai?: string;
  email?: string;
  diaChi?: string;
  ghiChu?: string;
  dmGioHangs?: DmGioHang[];
}

export class DmGioHangDTO implements IDmGioHangDTO {
  constructor(
    public tenKhachHang?: string,
    public soDienThoai?: string,
    public email?: string,
    public diaChi?: string,
    public ghiChu?: string,
    public dmGioHangs?: DmGioHang[]
  ) {}
}
