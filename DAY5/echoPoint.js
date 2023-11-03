const EventEmitter= require('events');
const  shoutEvent = new EventEmitter(); 
//  This  will listem to this event 
shoutEvent.on('echoPoint',function(){
     console.log("Custom Event recieved : ",data);
}); 

shoutEvent.emit('echoPoint',
    {message : 'Shouting name on echo point'}
) 