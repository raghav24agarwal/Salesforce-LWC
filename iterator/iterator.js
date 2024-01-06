import { LightningElement } from 'lwc';

export default class ForEach extends LightningElement { 

    contacts = [
        {
            Id : 1,
            Name : 'Raghav Agarwal',
            Title : 'CEO'
        },
        {
            Id : 2,
            Name : 'Vidushi Chauhan',
            Title : 'Manager'
        },
        {
            Id : 3,
            Name : 'Shreyee Dhobal',
            Title : 'CTO'
        },
        {
            Id : 4,
            Name : 'Roshan Singh',
            Title : 'Vice-President'
        },
        {
            Id : 5,
            Name : 'Shashwat Aryan',
            Title : 'VP of Marketing'
        },
        {
            Id : 6,
            Name : 'Vishal Goswami',
            Title : 'Vp of Sales'
        }
    ]

}