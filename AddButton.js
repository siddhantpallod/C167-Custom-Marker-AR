AFRAME.registerComponent('buttons', {
    init: function(){
        var button1 = document.createElement('button')
        button1.innerHTML = 'RATE US'
        button1.setAttribute('id', 'rating')
        button1.setAttribute('class', 'press-buttons')

        var button2 = document.createElement('button')
        button2.innerHTML = 'ORDER NOW'
        button2.setAttribute('id', 'order')
        button2.setAttribute('class', 'press-buttons')

        var div = document.getElementById('button-div')
        div.appendChild(button1)
        div.appendChild(button2)
    }
})