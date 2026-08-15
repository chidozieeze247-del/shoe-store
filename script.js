const header = document.getElementById('header')
   /* console.log(header) */
    const headerContent = `
     <nav class="navbar">
           <div class="brand-container">
             <div class="brand">
                <img src="brand-removebg-preview.png" alt="" width="75px" height="75px">
            </div> 
            <div class="menu-toggle" id="menu-toggle">&#9776;</div>
           </div>
        <ul class="nav-links" id="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Pricing</a></li>
        </ul>
      </nav>
    
    `;
   header.innerHTML = headerContent;
   
   
   
   
const toggle = document.getElementById('menu-toggle');
        const navLinks = document.getElementById('nav-links');

        toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        })
/* Current Page */

const links =document.querySelectorAll('nav-links a')
/* console.log(links) */
const currentPath = window.location.pathname;

links.forEach(link =>{
    console.log(link.getAttribute('href'), currentPath);


    if (link.getAttribute('href') === currentPath || 
    currentPath.endsWith(link.getAttribute('href'))){
    link.classList.add('active')
    }else{

    }
})
        
