
const cont=document.getElementById('container');
 const input=document.getElementById('inputField');
   
    cont.addEventListener('click', (event) => {
     

        const value =event.target.textContent;
  
       
        if (value === '=') {
          try {
           
            input.value = eval(input.value);
          } catch (e) {
            input.value = 'Error!';
          }
        } else if (value === 'reset') {
          input.value = '';
        } else if (value === 'delete') {
          input.value = input.value.slice(0, -1);
        } else {
          
          input.value += value;
        }
      });
