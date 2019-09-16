import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './Pagination.component.html',
  styleUrls: ['./Pagination.component.scss']
})
export class PaginationComponent implements OnInit {
	
	@Input() paginationItems : any;

	constructor() { }

	ngOnInit() {
	}

}
