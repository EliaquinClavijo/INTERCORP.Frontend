import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../_services/client.service";
import {ClientResponse} from "../../_interfaces/client.interface";
import {LOADING} from "../../_shared/constants";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  listClients: ClientResponse[] = [];

  public displayedColumns = ['name', 'lastName', 'age', 'birthdate', 'deadAge' ];
  public dataSource = new MatTableDataSource<ClientResponse>();

  constructor(
    private clientService : ClientService
  ) {

  }

  ngOnInit(): void {
    sessionStorage.setItem(LOADING, 'true');
    this.getUsers();
  }

  getUsers() {
    this.clientService.getClients().subscribe(res => {
      if (res) {
        this.listClients = res
        this.dataSource.data = res;
      }
      sessionStorage.setItem(LOADING, 'false');
    });
  }

}
