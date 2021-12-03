import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FenReaderService {

  constructor() {
  }

  public fenToStringArray(fen: string): string[][] {
    const positions = fen.split('/');
    return null;
  }
}
