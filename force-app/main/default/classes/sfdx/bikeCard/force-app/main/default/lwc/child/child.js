import { LightningElement ,api} from 'lwc';

export default class Child extends LightningElement {

@api myName = "first value";


@api testChildMethod(parentParam){

    alert('This is Child Method' + parentParam.firstName);
}

 handleMe(){

    const childEvent = new CustomEvent('buttonclick',

    {
        detail: {

            firstParam :'first Value',
            secondParam : 'second Value'
            
        }

    });

    this.dispatchEvent(childEvent);
 }
}