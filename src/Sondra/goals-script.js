//Challenges
const proCon = function(){
    const body = document.querySelector('body')
    const container1 = document.createElement('div')
    container1.className ='container'
    container1.innerHTML =`
    <div class ="container">
        <div class="col s12" id="shows">
            <p class="flow-text grey-text">Challenges</p>
              <p>Taking independent studies for courses where I had no prior knowledge was not the right choice for how I learn</p>
             
          </div>
          <div class="col s12" id="videos">
            <p class="flow-text grey-text">Triumphs</p>
              <p>My contextual course gave me more clue as to where my art will extist within theoretical frameworks</p>
              <p>Auditing World Aesthetics helped me to understand the concept of mythology</p>
              <p>I have a starting point for learning more about animation and web development</p>
          </div>
        </div>
      </div>
    
    </div>`

//create go back button
const frame = document.querySelector('.frame')
frame.innerHTML =`<h5>
<a href="goals.html" class="frame__button" aria-hidden="true">Close</a>
</h5>`

//append
    body.appendChild(container1)
    document.querySelector('#title').innerText="Overview"

  console.log(container1)
}

//Summer
const summerPlan = function(){
    const body = document.querySelector('body')
    const container1 = document.createElement('div')
    container1.className ='container'
    container1.innerHTML =`
    <div class ="container">
        <div class="col s12" id="shows">
            <p class="flow-text grey-text">CineVR Set</p>
              <p>I will be working for the GRID lab on a Cine VR set as the 2nd Camera Assistan/Script Supervisor</p>
              <p>One of my main goals coming into this program was to get practical film experience working in teams so that I can land these types of jobs in te future</p>
             
          </div>
          <div class="col s12" id="videos">
            <p class="flow-text grey-text">Experiential Internship</p>
              <p>I will be working as a content creator for a historical railroad and national park non-profit in Cuyahuga Valley</p>
              <p> I will get practical experience and discover what it is like to create original video content for a client</p>
          </div>
        </div>
      </div>
    
    </div>`

//create go back button
const frame = document.querySelector('.frame')
frame.innerHTML =`<h5>
<a href="goals.html" class="frame__button" aria-hidden="true">Close</a>
</h5>`

//append
    body.appendChild(container1)
    document.querySelector('#title').innerText="Summer 2021"

  console.log(container1)
}


//Classes
const classes = function(){
    const body = document.querySelector('body')
    const container1 = document.createElement('div')
    container1.className ='container center-align z-depth-2'
    container1.innerHTML =`
    <div class ="col l12">
    <img height="50%" src= "content/Classes.png">
</div>`

//create go back button
const frame = document.querySelector('.frame')
frame.innerHTML =`<h5>
<a href="goals.html" class="frame__button" aria-hidden="true">Close</a>
</h5>`

//append
    body.appendChild(container1)
    document.querySelector('#title').innerText="Classes"

  console.log(container1)
}


//links
document.querySelector('#overview').addEventListener('click',function(e){
    e.target.parentElement.parentElement.innerHTML=''
    proCon()
})

document.querySelector('#summer').addEventListener('click',function(e){
    e.target.parentElement.parentElement.innerHTML=''
    summerPlan()
})

document.querySelector('#classes').addEventListener('click',function(e){
    e.target.parentElement.parentElement.innerHTML=''
    classes()
})