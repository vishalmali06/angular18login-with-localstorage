import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  inputData: any = {
    "p.data1": "value p-1",
    "p.data2": "value p-2",
    "s.data1": "value s-1",
    "d.data1": "value d-1",
    "p.data3": "value p-3",
    "contact": "conatct data",
    "name": "demo name",
  };

  menuItem: any[] = [
    {
      title: 'Home',
      subItem: [
        { menuName: 'hoem-1' },
        { menuName: 'hoem-2' },
        { menuName: 'hoem-3' }
      ]
    },
    {
      title: 'Abput',
      subItem: [
        { menuName: 'About-1' },
        { menuName: 'About-2' },
        { menuName: 'About-3' }
      ]
    },
    {
      title: 'Conact'
    }

  ]


  groupElements: any[] = [];

  newList: any[] = [];


  getValue() {
    const keysList = Object.keys(this.inputData);
    debugger;
    keysList.forEach(element => {
      if (element.includes(".")) {
        const isExist = this.groupElements.find(m => m == element.charAt(0));
        if (isExist == undefined) {
          this.groupElements.push(element.charAt(0));
        }
      }
    });
    // ['p', 's', 'd'] 
    this.groupElements.forEach(element => {
      const startKeysElement = keysList.filter(m => m.startsWith(element));
      debugger;
      const obj = {
        groupKey: element,
        subItems: [] as any
      };

      /// p.data1 
      startKeysElement.forEach((element: string) => {
        const keyName = element.slice(2);

        const subItem = {
          [keyName]: this.inputData[element]
        }
        obj.subItems.push(subItem);
      });
      this.newList.push(obj);
    });

    debugger;


  }

  getKey(obj: any) {
    return Object.keys(obj)[0];
  }


}
