  function goToMenu() {
    window.location.href = 'menu.html';
}
function orderWhatsapp() {
    const number = '+2348028124356';
    const message = "Hi i want to order"; 
    const encodedMessage=
    encodeURIComponent (message);

    const url = `https://wa.me/${+2348028124356}?text=$encodedMassage}`;
    window.open(url, '_blank');
}


function sendMassage() {
  const textarea =
  document.querySelector('textarea');
  const message=
  textarea.value.trim();

  if(message){
    alert('Your massage has been sent!');
    textarea.value = '';
  }else{
    alert('please type a massage first.');
  }
}
 

