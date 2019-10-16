import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
cycle:28;
days:4;
fertale_start= this.cycle-20;
fertale_end:any;
ovulation=(this.fertale_start-1) +(this.fertale_end-this.fertale_start)/2; 
periodStartDate = new Date();
  constructor() { }

  ngOnInit() {
  }

}
