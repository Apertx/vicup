function showCall() {
  callHere.innerHTML = '<div class="email-float" data-toggle="modal" data-target="#modalMail"></div><a href="tel:+79219397700"><div class="call-float"></div></a><a href="javascript:hideCall();"><div class="clear-float"></div></a>';
}

function hideCall() {
  callHere.innerHTML = '<div class="dial-circle"></div><div class="dial-pulse"></div><a href="javascript:showCall();"><div class="dial-float"></div></a>';
}

function closeCall() {
  callHere.innerHTML = '<div class="dial-done"></div>';
  setTimeout(()=>callHere.innerHTML='',1500);
}
