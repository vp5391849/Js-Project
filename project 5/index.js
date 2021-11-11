console.log('This is index.js')

const data = [
    {
        name : 'Rohan Das',
        city : 'Mumbai',
        age : '25',
        language : 'python',
        framework : 'django',
        image : 'https://randomuser.me/api/portraits/men/73.jpg'
    },
    {
        name : 'Tushar Sharma',
        city : 'Mumbai',
        age : '23',
        language : 'python',
        framework : 'flask',
        image : 'https://randomuser.me/api/portraits/men/43.jpg',
    },
    {
        name : 'Millie Bobby Brown',
        city : 'Lucknow',
        age : '22',
        language : 'python',
        framework : 'django',
        image : 'https://randomuser.me/api/portraits/men/53.jpg',
    },
    {
        name : 'Nishant Gangwar',
        city : 'Jaipur',
        age : '26',
        language : 'c++',
        framework : false,
        image : 'https://randomuser.me/api/portraits/men/63.jpg',
    },
    {
        name : 'Kartik Singh',
        city : 'Delhi',
        age : '18',
        language : 'javascript',
        framework : 'react',
        image : 'https://randomuser.me/api/portraits/men/83.jpg',
    }
]

//cv iterator
function cvIterator(profiles) {
    let nextindex = 0
    return {
        next: function () {
            return nextindex < profiles.length ?
                { value: profiles[nextindex++], done: false } :
                { done: true }
        }
    }
}
const candidates = cvIterator(data)

nextCV()
//Button listener for next button 
const next = document.getElementById('next')
next.addEventListener('click', nextCV)

function nextCV() {
    const currentcandidate = candidates.next().value
    let image = document.getElementById('image')
    let profile = document.getElementById('profile')
    if(currentcandidate != undefined){

        image.innerHTML = `<img src ='${currentcandidate.image}'>`
        
        profile.innerHTML = `<ul class="list-group">
        
        <li class="list-group-item">Name: ${currentcandidate.name}</li>
        <li class="list-group-item"> ${currentcandidate.age} years old</li>
        <li class="list-group-item">Lives in ${currentcandidate.city}</li>
        <li class="list-group-item">Primarily work on  ${currentcandidate.language}</li>
        <li class="list-group-item">Uses ${currentcandidate.framework}</li>
        
        </ul>`
 
}
else{
    alert('End of Applications')
    window.location.reload()
}}