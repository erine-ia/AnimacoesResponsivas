const $nav = document.querySelector('.nav-bar');
const $logo = document.querySelector('.logo');

window.addEventListener('scroll', pos, false);

function pos(){
    if(window.scrollY >= $logo.offsetHeight && $nav.classList.contains('abs-pos')){
        $nav.classList.remove('abs-pos');
        $nav.classList.add('fix-pos');

    }else if(window.scrollY < $logo.offsetHeight && $nav.classList.contains('fix-pos')){
        $nav.classList.add('abs-pos');
        $nav.classList.remove('fix-pos');

    }
}

const $extLink = document.querySelectorAll(".ext-link")[0];

$extLink.addEventListener('click', openLink, false);

function openLink(){
    window.open("https://blogger.com", "_blank");
    
}




const $intLinks = document.querySelectorAll(".int-link");
const $secArr = document.querySelectorAll('main section');

$intLinks.forEach(function(cur, idx){
    cur.addEventListener("click", function(){
       window.scrollTo({
        top: $secArr[idx].offsetTop - $nav.offsetHeight,
        left:0,
        behavior: "smooth"
       })
    }, false)

})





