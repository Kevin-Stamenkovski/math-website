import { Component, OnInit } from '@angular/core';
import {tableData} from "./tableData";

@Component({
  selector: 'app-equations-disequations',
  templateUrl: './equations-disequations.component.html',
  styleUrls: ['./equations-disequations.component.scss']
})

export class EquationsDisequationsComponent implements OnInit {


ELEMENT_DATA: tableData[] = [
  {header: 'Discriminante', one: '<p>&delta &gt; 0</p>', two: '<p>&delta &equals; 0</p>', three: '<p>&delta &lt; 0</p>'},
  {header: 'Grafico', one: 'Helium', two:' 4.0026', three: 'He'},
  {header: '<p>Ax<sup>2</sup> + Bx + C &gt; 0</p>', one: 'Lithium', two: '6.941', three: 'Li'},
  {header: '<p>Ax<sup>2</sup> + Bx + C &equals; 0</p>', one: 'Beryllium', two: '9.0122', three: 'Be'},
  {header: '<p>Ax<sup>2</sup> + Bx + C &lt; 0</p>', one: 'Beryllium', two: '9.0122', three: 'Be'},

];
  displayedColumns: string[] = ['header', 'one', 'two', 'three'];
  dataSource = this.ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
