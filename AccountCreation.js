var form = document.querySelector('#form'); 
CreateAccount=()=>{
    form.addEventListener("submit", e => {
      e.preventDefault();
      fetch(form.action, {
          method : "POST",
          body: new FormData(form),
      }).then(
          response => response.json()
      ).then((html) => {
       UserCreated()
        console.log('Data Sent To The DataBase');
      });
    });
  }
 
