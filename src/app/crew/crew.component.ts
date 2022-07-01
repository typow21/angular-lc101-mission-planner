import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  constructor() {}

  ngOnInit() {
  }

  add(newName: string, newFirstMission: boolean){
    let newCrew = {
      name: newName, 
      firstMission: newFirstMission
    }
    this.crew.push(newCrew)
  }

  remove(member: object){
    let index = this.crew.indexOf(member)
    this.crew.splice(index, 1);
  }

}
