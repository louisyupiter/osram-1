import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import SwiperCore, { EffectFade, Pagination } from 'swiper/core';

SwiperCore.use([EffectFade, Pagination]);

@Component({
    selector: 'app-videopage',
    templateUrl: './videopage.component.html',
    styleUrls: ['./videopage.component.scss'],
})

export class VideopageComponent implements OnInit {

    config: SwiperOptions = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 50,
        pagination: {
            clickable: true,
            type: 'bullets',
        },
        effect: 'fade',
        // loop: true
    };

    constructor() { }

    ngOnInit(): void { }


}
