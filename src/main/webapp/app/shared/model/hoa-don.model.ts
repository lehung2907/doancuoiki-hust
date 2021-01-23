import { Moment } from 'moment';

export interface IHoaDon {
  id?: number;
  login?: string;
  dmSanPhamId?: number;
  soLuong?: number;
  gia?: number;
  ten?: string;
  diaChi?: string;
  soDienThoai?: string;
  email?: string;
  trangThai?: string;
  ghiChu?: string;
  ngayLap?: Moment;
  trangThai2?: string;
}

export class HoaDon implements IHoaDon {
  constructor(
    public id?: number,
    public login?: string,
    public dmSanPhamId?: number,
    public soLuong?: number,
    public gia?: number,
    public ten?: string,
    public diaChi?: string,
    public soDienThoai?: string,
    public email?: string,
    public trangThai?: string,
    public ghiChu?: string,
    public ngayLap?: Moment,
    public trangThai2?: string
  ) {}
}
