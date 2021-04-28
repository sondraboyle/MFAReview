

//MUSIC VIDEO

const renderVideo = function(){
    const body = document.querySelector('body')
    const container1 = document.createElement('div')
    container1.className ='container center-align'
    container1.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/mcnDJP4lxWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  
  //create go back button
  const frame = document.querySelector('.frame')
  frame.innerHTML =`<h5>
  <a href="hexgf.html" class="frame__button" aria-hidden="true">Close</a>
  </h5>`
  document.querySelector('#date').innerText=''
  
  
  //append
    body.appendChild(container1)
    document.querySelector('#title').innerText="Music Video"
  
  console.log(container1)
  }

//links

document.querySelector('#promotional').addEventListener('click',function(e){
  e.target.parentElement.parentElement.innerHTML=''
  renderPromotional()

})

document.querySelector('#COSvid').addEventListener('click',function(e){
    e.target.parentElement.parentElement.innerHTML=''
    renderVideo()
  
  })


