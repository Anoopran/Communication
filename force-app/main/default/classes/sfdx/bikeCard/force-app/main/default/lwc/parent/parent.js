import { LightningElement , track } from 'lwc';

export default class Parent extends LightningElement {

@track parentValue = "Second Value";

handleEvent(event){

alert('custom event fired');

this.parentValue = "customEvent";

alert('first value' + event.detail.firstParam);
alert('second value' + event.detail.secondParam);


}



handleChange(){

    this.parentValue = "Third Value";
}

handleCall(){

    var childCompVar = this.template.querySelector('c-child');
    var sendParam = {'firstName' :  'Anoop'};
    childCompVar.testChildMethod(sendParam);

}


}