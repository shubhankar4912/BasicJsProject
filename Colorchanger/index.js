const body=document.querySelector('body')
const button=document.querySelectorAll('.button')
button.forEach(function (button){
  button.addEventListener('click',function(e){
    const c=e.target.id
    switch(c){
      case 'grey':
        body.style.backgroundColor=c
      case 'white':
        body.style.backgroundColor=c
      case 'blue':
        body.style.backgroundColor=c
      case 'yellow':
        body.style.backgroundColor=c
    }
  })

})