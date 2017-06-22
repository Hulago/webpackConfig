import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-detail',
  templateUrl: 'detail.component.html'
})

export class DetailComponent implements OnInit {

  private id: string;

  private data: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() { 
    this.route.params.subscribe(data => {
      this.id = data.id
    });
    this.route.data.subscribe(data => {
      this.data = data.data;
    })
  }
}