import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@Injectable()

  export class MockApiService implements InMemoryWebApiModule {
createDb(){
  let cities = [
    { city: "Austin",   publicTrans: 100.2,  housing: 85.1,	utlities: 110.7, groceries:	89.3, healthcare:	100.3,	incomeTax: 0, salesTax:	107.7, total: 84.9 },
    { city: "Baltimore", publicTrans: 105.3,	housing: 155.4, utilities:	112.5,	groceries: 110.8,healthcare:	97.9,	incomeTax: 163.2,	salesTax: 78.4, total: 101.8},
    { city: "Boston", publicTrans: 104.5,	housing: 152.7, utilites:	138.6,	groceries: 116.7, healthcare:	123.5, incomeTax:	175.2, salesTax:	81.6, total: 111.2 },
    { city: "Columbus", publicTrans: 99.1,	housing: 86.2, utilities:	100.2, groceries:	91.6, healthcare:	107.7, incomeTax:	85.1, salesTax:	98, total:  84.8},
    { city: "Dallas", publicTrans: 100.9, housing:	70.7, utilities:	105.5, groceries:	96.2, healthcare:	103.8, incomeTax:	0, salesTax: 107.7, total:  83.4},
    { city: "Denver", publicTrans: 95.4, housing:	107.5, utilities:	101.9, groceries:	101, healthcare:	105.9, incomeTax:	159, salesTax:	99.9, total:  89.5},
    { city: "Detroit", publicTrans: 101.3, housing:	95.2, utilities:	129.5, groceries:	92.7, healthcare:	94.2, incomeTax:	146, salesTax:	78.4, total: 89.7},
    { city: "Honolulu", publicTrans: 126.2, housing:	249, utilites:	146.6, groceries:	160.1, healthcare:	120, incomeTax:	233.6, salesTax:	58.8, total: 140.2},
    { city: "Houston", publicTrans: 99.2, housing:	82, utilites:	97.7, groceries:	85.1, healthcare:	94.6, incomeTax:	0, salesTax:	107.7, total: 80.2},
    { city: "Las Vegas", publicTrans: 104.9, housing:	94.1, utilites:	97.7, grocieres:	106.8, healthcare:	109, incomeTax:	0, salesTax:	106.4, total: 89.6}
  ]
  return {cities};
}
}
