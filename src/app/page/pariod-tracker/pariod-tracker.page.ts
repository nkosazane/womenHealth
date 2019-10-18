
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

declare  var jQuery:  any;

@Component({
  selector: 'app-pariod-tracker',
  templateUrl: './pariod-tracker.page.html',
  styleUrls: ['./pariod-tracker.page.scss'],
})

export class PariodTrackerPage implements OnInit {

  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };
 
  minDate = new Date().toISOString();
 
  eventSource = [];
  viewTitle;
 
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
 
  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(   private alertCtrl: AlertController, private router: Router,
     @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() {
    $(document).on('pageinit', '#index', function(){     
      var periodCycleDays = 28;
      var bleedingDays = 3;
      var fertilePhaseStart = periodCycleDays - 20;
      var fertilePhaseEnd = periodCycleDays - 11;
      var ovulation = (fertilePhaseStart-1) + (fertilePhaseEnd - fertilePhaseStart)/2;
  
      var periodStartDate = new Date();
  
      function createEventsForDate(date){
        var timeBetween = Math.abs(date.getTime() - periodStartDate.getTime());
        var daysBetween = Math.ceil(timeBetween / (1000 * 3600 * 24)); 
        var cyclesBetween = Math.floor((daysBetween / periodCycleDays));
        var events = [];
        // Create next two events to handle multiple sets within one month
        for(var i=0;i<2;i++){
          var cycleDaysBetween = periodCycleDays * (cyclesBetween + i);
          var p = addDays(periodStartDate, cycleDaysBetween);
          var bleedingEnd = addDays(p, bleedingDays);
          var fertilePhaseStartDate = addDays(p, fertilePhaseStart);
          var fertilePhaseEndDate = addDays(p, fertilePhaseEnd);
          var ovulationDayStart = addDays(p, ovulation)
          var ovulationDayEnd = new Date(new Date(ovulationDayStart).setHours(23,59,59,999));
          events.push({
            "summary": "Period",
            "begin": p,
            "end": bleedingEnd 
          });
          events.push({
            "summary": "Fertile",
            "begin": fertilePhaseStartDate,
            "end": fertilePhaseEndDate 
          });
          events.push({
            "summary": "Ovulation",
            "begin": ovulationDayStart,
            "end": ovulationDayEnd
          });
        }
        return events;
      }
      
      var InitialEvents = createEventsForDate(periodStartDate);
  
      $("#calendar").jqmCalendar({
          events: InitialEvents,
          months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          startOfWeek: 0
      }).bind('change', function(ev){
          var calendarDate = $(this).data("jqm-calendar").settings.date;
          var firstDayOfMonthForCalendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), 1);
          $(this).data("jqm-calendar").settings.events = createEventsForDate(firstDayOfMonthForCalendarDate);
      });
  });
                 
  function addDays(date, days){
    var d = new Date(date.valueOf());
    d.setDate(d.getDate() + days)
    d.setHours(0,0,0,0);  // set to start of day
    return d;
  }
  
    this.resetEvent();
  }
  

  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }
 
  // Create the right event format and reload source
  addEvent() {
    let eventCopy = {
      title: this.event.title,
      startTime:  new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      desc: this.event.desc
    }
 
    if (eventCopy.allDay) {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;
 
      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }
 
    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
  }
  // Change current month/week/day
 next() {
  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slideNext();
}
 
back() {
  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slidePrev();
}
 
// Change between month/week/day
changeMode(mode) {
  this.calendar.mode = mode;
}
 
// Focus today
today() {
  this.calendar.currentDate = new Date();
}
 
// Selected date reange and hence title changed
onViewTitleChanged(title) {
  this.viewTitle = title;
}
 
// Calendar event was clicked
async onEventSelected(event) {
  // Use Angular date pipe for conversion
  let start = formatDate(event.startTime, 'medium', this.locale);
  let end = formatDate(event.endTime, 'medium', this.locale);
 
  const alert = await this.alertCtrl.create({
    header: event.title,
    subHeader: event.desc,
    message: 'From: ' + start + '<br><br>To: ' + end,
    buttons: ['OK']
  });
  alert.present();
}
 
// Time slot was clicked
onTimeSelected(ev) {
  let selected = new Date(ev.selectedTime);
  this.event.startTime = selected.toISOString();
  selected.setHours(selected.getHours() + 1);
  this.event.endTime = (selected.toISOString());
}

}
