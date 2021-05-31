import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Penjual } from '../models/Penjual';
import { SerialNumber } from '../models/SerialNumber';
import { Pembeli } from '../models/Pembeli';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    createQrcode(): any {
        return this.http
            .post<any>(`${environment.baseUrl}code/create`, null)
            .subscribe(
                (res) => {
                    console.log(res);
                    // this.router.navigate([`/home`]);
                },
                (err) => {
                    console.log(err);
                }
            );
    }

    getAllunPrintQrcode(): Observable<any[]> {
        return this.http.get<any>(`${environment.baseUrl}code/`);
    }

    printQrcode(): Observable<any[]> {
        return this.http.get<any>(`${environment.baseUrl}code/print`);
    }

    validateQrcode(serialnumber: SerialNumber): Observable<any[]> {
        return this.http
            .post<any>(`${environment.baseUrl}code/validate`, serialnumber);
    }

    getAllPenjual(): any {
        return this.http
            .get<any>(`${environment.baseUrl}penjual`)
            .subscribe(
                (res) => {
                    console.log(res);
                    // this.router.navigate([`/home`]);
                },
                (err) => {
                    console.log(err);
                }
            );
    }

    getPenjual(idqrcode: string): Observable<any[]> {
        return this.http
            .get<any>(`${environment.baseUrl}penjual/${idqrcode}`);
    }

    updatePenjual(idqrcode: string, penjual: Penjual): Observable<any[]> {
        return this.http
            .post<any>(`${environment.baseUrl}penjual/${idqrcode}`, penjual);
    }

    getAllPembeli(): Observable<any[]> {
        return this.http.get<any>(`${environment.baseUrl}pembeli`);
    }

    getPembeli(idqrcode: string): Observable<any[]> {
        return this.http.get<any>(`${environment.baseUrl}pembeli/${idqrcode}`);
    }

    updatePembeli(
        idqrcode: string,
        // tslint:disable-next-line:variable-name
        nama_pembeli: string,
        // tslint:disable-next-line:variable-name
        nomor_polisi: string,
        // tslint:disable-next-line:variable-name
        merk_mobil: string,
        // tslint:disable-next-line:variable-name
        no_invoice: string,
        deskripsi: string
    ): Observable<any[]> {
        let pembeliData: Pembeli;
        pembeliData = {
            nama_pembeli,
            nomor_polisi,
            merk_mobil,
            no_invoice,
            deskripsi
        };

        return this.http
            .post<any>(`${environment.baseUrl}pembeli/${idqrcode}`, pembeliData);
    }

    updatePembeliImage(idqrcode: string, image: File): Observable<HttpEvent<any>> {
        const formData: FormData = new FormData();
        formData.append('image', image);
        const req = new HttpRequest('POST', `${environment.baseUrl}pembeli/image/${idqrcode}`, formData, {
            reportProgress: true,
            responseType: 'json'
        });
        return this.http.request(req);
    }

    getPembeliImage(idqrcode: string): Observable<any> {
        return this.http.get(`${environment.baseUrl}pembeli/image/${idqrcode}`);
    }

    // updatePembeliImage(idqrcode: string, image: any): any {
    //     return this.http
    //         .post<any>(`${environment.baseUrl}pembeli/image/${idqrcode}`, image);
    // }
    updatePembeliVideo(idqrcode: string, video: any): Observable<HttpEvent<any>> {
        const formData: FormData = new FormData();
        formData.append('video', video);
        const req = new HttpRequest('POST', `${environment.baseUrl}pembeli/video/${idqrcode}`, formData, {
            reportProgress: true,
            responseType: 'json'
        });
        return this.http.request(req);
    }
    getPembeliVideo(idqrcode: string): Observable<any> {
        return this.http.get(`${environment.baseUrl}pembeli/video/${idqrcode}`);
    }
    // updatePembeliVideo(idqrcode: string, video: any): Observable<any[]> {
    //     return this.http
    //         .post<any>(`${environment.baseUrl}pembeli/video/${idqrcode}`, video);
    // }
}
