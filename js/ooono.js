function showCall() {
  let div = document.createElement('div');
  div.className = 'dial-float';
  div.innerHTML = '<a href="tel:+79219397700"><div class="call-float"></div></a>';
  document.body.append(div);
}
