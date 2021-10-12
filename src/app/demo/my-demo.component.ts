import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  SkyAgGridService,
  SkyCellType
} from '@skyux/ag-grid';
import {
  GridApi,
  GridOptions,
  GridReadyEvent
} from 'ag-grid-community';
import {
  DataService
} from '../shared/data.service';
import {
  User
} from '../shared/user';

@Component({
  selector: 'app-my-demo',
  templateUrl: './my-demo.component.html',
  styleUrls: []
})
export class MyDemoComponent implements OnInit {

public personList: User[];
public gridApi: GridApi;
public gridOptions: GridOptions;
public columnDefs = [
  {
    field: 'firstName',
    headerName: 'First Name'
  },
  {
    field: 'lastName',
    headerName: 'Last Name'
  },
  {
    field: 'emailAddress',
    headerName: 'Email Address'
  },
  {
    field: 'contactNumber',
    headerName: 'Contact Number'
  },
  {
    field: 'dateOfBirth',
    headerName: 'DOB',
    type: SkyCellType.Date
  },
  {
    field: 'address',
    headerName: 'Address'
  }
];

constructor(
  private agGridService: SkyAgGridService,
  private ds: DataService,
  private router: Router
) { }

public ngOnInit(): void {
  this.gridOptions = {
    columnDefs: this.columnDefs,
    onGridReady: gridReadyEvent => this.onGridReady(gridReadyEvent)
  };
  this.gridOptions = this.agGridService.getGridOptions({ gridOptions: this.gridOptions });
  this.getUser();
}

public backToForm() {
  this.router.navigate(['/']);
}

public getUser(): void {
  this.personList = this.ds.getUser();
}

public onGridReady(gridReadyEvent: GridReadyEvent): void {
  this.gridApi = gridReadyEvent.api;
  this.gridApi.sizeColumnsToFit();
}

}
