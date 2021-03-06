import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core'
import { NavController } from 'ionic-angular'
import * as moment from 'moment-timezone'



@Component({
  selector:    'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage implements OnInit, OnDestroy {

  public hourlyChart:       any    = null
  public singleOpportunity: any    = null
  public opportunityData:   any    = null
  private hourToDisplay:    string = ''


  constructor( public navCtrl: NavController, public ref: ChangeDetectorRef ) {

  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.ref.detach()
  }



  selectHourlyCharts( event: any ): void {
    this.hourlyChart   = event
    this.hourToDisplay = moment(event.time, 'YYYY-MM-DD HH').tz('Australia/Melbourne').format('HH:00a DD/MM/YYYY')
    this.ref.detectChanges()
  }



  selectSingleOpportunity( event: any ): void {
    this.singleOpportunity = {
      timestamp: moment(event.time).tz('Australia/Melbourne').format('HH:mm:ss DD/MM/YYYY'),
      data:     event.data[0]
    }
    this.ref.detectChanges()
  }



}
