SendData=()=>{
    var form = document.getElementById('sheetdb-form');
    form.addEventListener("submit", e => {
        e.preventDefault();
        fetch(form.action, {
            method : "POST",
            body: new FormData(form),
        }).then(
            response => response.json()
        ).then((html) => {
          if (User.length>=1&&Mail.length>=1&&Code.length>=1) {
              localStorage.setItem('NiberUser',User);
              localStorage.setItem('NiberMail',Mail);
              localStorage.setItem('NiberPassword',Code);  
              Login.style.display="none"; 
          }else{
              return false;
          }
        });
      });
}
