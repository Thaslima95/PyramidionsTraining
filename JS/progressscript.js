let progress=document.querySelector('.progress1')
let content=document.querySelector('.content')



let start=0;
let end=80;
let interval=100;

let circularprogress=setInterval(()=>{
    
        start++;
        content.textContent=`${start}%`;
        progress.style.background=`conic-gradient(green ${start*3.6}deg, white 0deg)`;
        if(start==end)
        {
            clearInterval(circularprogress)
        }
        // console.log(start)
    
},interval)


