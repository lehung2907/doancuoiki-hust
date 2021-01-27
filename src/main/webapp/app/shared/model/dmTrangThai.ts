export interface IDTrangThai {
  id: number;
  trangThai: string;
}

export class DmTrangThai implements IDTrangThai {
  constructor(public id: number, public trangThai: string) {
    this.id = 1;
    this.trangThai = 'xxxx';
  }
}
