AFRAME.registerComponent("car", {
    schema: {
        message: {type: 'string', default: 'Car'}
    },
    init: function(){
        console.log("Car has loaded")
    }
})