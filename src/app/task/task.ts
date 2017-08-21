import { Data } from '@angular/router';
export class Task {

    id : number;
    name : string;
    note : number;
    done : boolean;
    startD: Date;
    endD : Date;

    constructor(id : number,name : string, note : number, done : boolean, start: Date, end : Date){
        this.id=id;
        this.name=name;
        this.note = note;
        this.done = done;
        this.startD = start;
        this.endD=end;
    }

}
