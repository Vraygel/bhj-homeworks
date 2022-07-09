let cookieId = document.getElementById("cookie")
let clicker__counterId = document.getElementById("clicker__counter") 
let clicker__speedId = document.getElementById("clicker__speed")
let timeStart = 0
let timeEnd = 0

cookieId.onclick = function image() {
    let height = cookieId.width == 200 ? cookieId.width = 150 : cookieId.width = 200
    cookieId.width = height
    clicker__counterId.textContent = Number(clicker__counterId.textContent) + 1
    
    timeStart = height == 150 ? new Date().getTime() : timeStart
       
    timeEnd = height == 200 ? new Date().getTime() : timeEnd
        
    clicker__speedId.textContent = (1 / (Math.abs(timeEnd - timeStart) / 1000)).toFixed(3)
         
}
