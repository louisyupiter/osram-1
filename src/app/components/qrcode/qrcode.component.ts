import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit {

  qrcode = [{
    id: 1,
    serial_number: 'osy11111111'
  },
  {
    id: 2,
    serial_number: 'osy22222222'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
