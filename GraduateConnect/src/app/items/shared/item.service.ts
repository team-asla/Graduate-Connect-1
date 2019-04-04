import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private basePath: string = '/items';

  items: AngularFireList<Item[]> = null; //  list of objects
  item: AngularFireObject<Item> = null; //   single object

  constructor(private db: AngularFireDatabase) { }
  
}