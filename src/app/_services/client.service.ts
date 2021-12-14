import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {ClientResponse} from "../_interfaces/client.interface";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url = `${environment.BASE_URL}client`;

  constructor(private _httpClient: HttpClient) {
  }

  getClients() {
    return this._httpClient.get<ClientResponse[]>(`${this.url}/listclientes`)
  }
}
