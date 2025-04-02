document.addEventListener('DOMContentLoaded', function() {
    //  header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
      fetch('../html/header_global.html')
        .then(response => response.text())
        .then(html => {
          headerPlaceholder.innerHTML = html;
          
        
          initCartElements();
        })
        .catch(error => console.error('Error', error));
    }
    
    // footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    console.log("Footer placeholder:", footerPlaceholder);
    if (footerPlaceholder) {
        console.log("Loading footer...");
        fetch('../html/footer_global.html')
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
          })
          .then(html => {
            footerPlaceholder.innerHTML = html;
            console.log("Footer loaded successfully");
          })
          .catch(error => {
            console.error('Error loading footer:', error);
            footerPlaceholder.innerText = '<div class="alert alert-danger">Error loading footer</div>';
          });
      } else {
        console.warn("Footer placeholder not found");
      }
  });
  

function responsiveList() {
  const list = document.querySelector('.list');
  const items = document.querySelectorAll('.list .item');
  
  if (list) {
    list.style.display = 'grid';
    if (window.innerWidth <= 400) {
      list.style.gridTemplateColumns = 'repeat(1, 1fr)';
      list.style.gap = '12px';
      list.style.padding = '10px'; 
      list.style.margin = '30px 0';
      
      items.forEach(item => {
        item.style.maxWidth = '250px';
        item.style.margin = '0 auto';
        item.style.padding = '6px';
      });
    } 
    else if (window.innerWidth <= 576) {
      list.style.gridTemplateColumns = 'repeat(1, 1fr)';
      list.style.gap = '12px';
      list.style.padding = '0 15px';
      list.style.margin = '25px auto';
      
      items.forEach(item => {
        item.style.maxWidth = '300px';
        item.style.margin = '0 auto';
       
        item.style.padding = '8px';
      });
    } 
    else if (window.innerWidth <= 768) {
      list.style.gridTemplateColumns = 'repeat(2, 1fr)';
      list.style.gap = '15px'; 
      list.style.padding = '0 20px';
      list.style.margin = '30px auto';
    } 
    else if (window.innerWidth <= 992) {
      list.style.gridTemplateColumns = 'repeat(2, 1fr)';
      list.style.gap = '20px'; 
      list.style.padding = '0 20px';
      list.style.margin = '35px auto';
    } 
    else if (window.innerWidth <= 1024) {
      list.style.gridTemplateColumns = 'repeat(3, 1fr)';
      list.style.gap = '20px'; 
      list.style.padding = '0 20px';
      list.style.margin = '35px auto';
    }
     else if (window.innerWidth <= 1150) {
      list.style.gridTemplateColumns = 'repeat(3, 1fr)';
      list.style.gap = '25px';
      list.style.padding = '0 20px';
      list.style.margin = '35px auto';
    } 
    else if (window.innerWidth <= 1250) {
      list.style.gridTemplateColumns = 'repeat(3, 1fr)';
      list.style.gap = '25px';
      list.style.padding = '0 20px';
      list.style.margin = '35px auto';
    } 
    else {
      list.style.gridTemplateColumns = 'repeat(4, 1fr)';
      list.style.gap = '30px';
      list.style.padding = '0 30px';
      list.style.margin = '40px auto';
    }
    
    if (window.innerWidth > 1250) {
      list.style.maxWidth = '1200px';
    } else {
      list.style.maxWidth = '100%';
    }
  }
}


document.addEventListener('DOMContentLoaded', function() {
  setTimeout(responsiveList, 100);
  window.addEventListener('resize', responsiveList);
});


 