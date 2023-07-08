
let header=document.querySelector("#header")
document.addEventListener("scroll",()=>{
    let nav=
console.log(document.documentElement.scrollTop);
if(document.documentElement.scrollTop>=200){

    console.log(header);
    header.style.backgroundColor="rgba(18, 60, 60)"
}
else{
    header.style.backgroundColor=""

}
})

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      // Check if the navbar is collapsed (on small screens)
      const navbar = document.getElementById('navbarSupportedContent');
      if (window.getComputedStyle(navbar).getPropertyValue('display') !== 'none') {
        $('.navbar-collapse').collapse('hide');
      }
    });
  });
