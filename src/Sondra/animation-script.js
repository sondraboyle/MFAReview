//SANDBOXES
const renderSandboxes= function(){
    const body = document.querySelector('body')
    const container1 = document.createElement('div')
    container1.className ='container col l6'
    container1.innerHTML =`<div class="row gif-grid">
    <div class="col s12 m6 center-align">
      <img class = "grid-item z-depth-2 " src="content/Animations/Carriage1927.gif">
    </div>
    <div class="col s12 m6 l2 center-align">
      <img class = "grid-item z-depth-2" src="content/Animations/archives_17896.gif">
    </div>
  </div>
  <br>
  <div class="row gif-grid">
    <div class="col s12 m6 center-align">
    <img class = "grid-item z-depth-2" src="content/Animations/BeachCrew.gif">
    </div>
    <div class="col s12 m6 l2 center-align">
      <img class="z-depth-2" src="content/Animations/BodySandbox.gif" height = "300px">
    </div>
  </div>
  <br>
  <div class="row gif-grid">
    <div class="col s12 m6 center-align">
      <img class="z-depth-2" src="content/Animations/phone_diamond.gif" width = "300px">
    </div>
    <div class="col s12 m6 l2 center-align">
      <img class = "grid-item z-depth-2" src="content/Animations/eye&snow.gif">
    </div>
  </div>`

//create go back button
const frame = document.querySelector('.frame')
frame.innerHTML =`<h5>
<a href="animation.html" class="frame__button" aria-hidden="true">Close</a>
</h5>`

//append
    body.appendChild(container1)
    document.querySelector('#title').innerText="Sandboxes"

  console.log(container1)
}

//MINI PROJECT
const renderMiniProj = function(){
  const body = document.querySelector('body')
    const container1 = document.createElement('div')
    container1.className ='video-container center-align'
    container1.innerHTML = `<video controls width = "50%">
    <source src="content/Animations/MiniProjFinal.mp4" type="video/mp4"></video>`


//create go back button
const frame = document.querySelector('.frame')
frame.innerHTML =`<h5>
<a href="animation.html" class="frame__button" aria-hidden="true">Close</a>
</h5>`

//append
    body.appendChild(container1)
    document.querySelector('#title').innerText="Mini Project"

  console.log(container1)
}

//FINAL PROJECT

const renderFinalProj = function(){
  const body = document.querySelector('body')
  const container1 = document.createElement('div')
  container1.className ='video-container center-align'
  container1.innerHTML = `<iframe src="https://player.vimeo.com/video/542350564?title=0&byline=0&portrait=0&speed=0&badge=0&autopause=0&player_id=0&app_id=58479/embed" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen frameborder="0" style="position:absolute;top:0;left:0;width:50%;height:50%;"></iframe>`


//create go back button
const frame = document.querySelector('.frame')
frame.innerHTML =`<h5>
<a href="animation.html" class="frame__button" aria-hidden="true">Close</a>
</h5>`

//append
  body.appendChild(container1)
  document.querySelector('#title').innerText="Final Project"

console.log(container1)
}


//links
document.querySelector('#process1').addEventListener('click',function(e){
    e.target.parentElement.parentElement.innerHTML=''
    renderSandboxes()

})

document.querySelector('#process2').addEventListener('click',function(e){
    e.target.parentElement.parentElement.innerHTML=''
    renderMiniProj()
})


document.querySelector('#final').addEventListener('click',function(e){
    e.target.parentElement.parentElement.innerHTML=''
    renderFinalProj()
})


