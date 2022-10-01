let links = document.getElementById('links')
let deleteAll = document.getElementById('deleteAll')
let saveTab = document.getElementById('saveTab')
let saveInput = document.getElementById('saveInput')
let inputLink= document.getElementById('inputLink')

let storedLinks =['https://chrome.google.com/webstore/detail/tweakpass-free-password-m/kmbjcfefmceiibhnddbeenklcmpehmdd', 'https://fonts.google.com/specimen/Roboto' , 'https://scrimba.com/learn/learnjavascript/lets-build-a-chrome-extension-co85441e3b6bd2c9eeee218bf']

function listLinks(){
     links.innerHTML=""
     let localStorageData = []
     localStorageData = JSON.parse(localStorage.getItem('storedLinks')) || []
     localStorageData.forEach( (data) => links.innerHTML += '<li>' + data + '</li>')
}

function addLink(data){
    let localStorageData = []
    localStorageData = JSON.parse(localStorage.getItem('storedLinks')) || []
    localStorageData.push(data)
    localStorage.setItem('storedLinks', JSON.stringify(localStorageData));
}

saveInput.addEventListener('click', function(){ addLink(inputLink.value); listLinks() })

saveTab.addEventListener('click', function(){
    chrome.tabs.query({ active: true,currentWindow: true }, function(tabs) 
    {   let tabURL = tabs[0].url
        addLink(tabURL)
        listLinks() 
    })})

deleteAll.addEventListener('click', function(){ localStorage.clear(); listLinks() })
listLinks()