async function loadVideos() {
    console.log("loadVideos")
    const response = await fetch("./videos.json")
    const data = await response.json()
    console.log(data)
    
    const element = document.getElementById('sug')
    data.forEach(e => {
        const div = document.createElement("div")
        div.className = "suggestion-container"
        
        const imgChild = document.createElement("img")
        imgChild.src = e.imgURL
        imgChild.style.width = '160px'
        imgChild.style.height = '90px'
        imgChild.style.border = '1px solid red'

        const divChild = document.createElement("div")

        const pTitle = document.createElement("p")
        pTitle.className = "suggestion-title"
        pTitle.textContent = e.title

        const pOwner = document.createElement("p")
        pOwner.textContent = e.owner

        const pInfos = document.createElement("p")
        pInfos.innerHTML = `${e.views}<br>${e.last}`

        divChild.appendChild(pTitle)
        divChild.appendChild(pOwner)
        divChild.appendChild(pInfos)


        div.appendChild(imgChild)
        div.appendChild(divChild)

        element.appendChild(div)
    });
}

loadVideos()