import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {}

  getQuery (query: string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDUlvEtLkLaWPrYOHdy8elEq6nqlgj15VmZDZRcoY44SY7QqT5tMg0xWfJM2iehyW9oQX8FqPQ0TYAQC0c'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases').pipe( map(data => data['albums'].items ));
  }

  getArtistas(term: string){
    return this.getQuery(`search?q=${term}&type=artist`).pipe(map(data => data['artists'].items ));
  }

  getArtista(terms: string){
    return this.getQuery(`artists/${terms}`);
  }

  getTopTracks(terms : string){
    return this.getQuery(`artists/${terms}/top-tracks?market=US`).pipe( map(data => data['tracks'] ) );
  }
}
