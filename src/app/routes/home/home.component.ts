import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public searchFilter?: string;
  constructor(private _router: Router) {}

  ngOnInit() {}

  public onKeyUp(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      const { searchFilter } = this;
      const queryParams = { searchFilter };
      this._router.navigate(['/search'], { queryParams });
    }
  }
}
