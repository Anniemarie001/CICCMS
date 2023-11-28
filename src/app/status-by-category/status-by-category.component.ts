import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-status-by-category',
  templateUrl: './status-by-category.component.html',
  styleUrls: ['./status-by-category.component.scss']
})
export class StatusByCategoryComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Contract Category'
    },
    xAxis: {
      categories: [
        'New',
        'Renewed ',
        'Terminated',
        
      ]
    },
    yAxis: {
      title: {
        text: 'Totals in %'
      }
    },
    series: [
     {
      type: 'pie',
      data: [
        {
          name: 'New',
          y: 30.0,
          color: '#044342',
        },
        {
          name: 'Renewed',
          y: 60,
          color: '#7e0505',
        },
        {
          name: 'Terminated',
          y: 10,
          color: '#ed9e20',
        },
        
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })

  constructor() { }

  ngOnInit(): void {
  }


}
