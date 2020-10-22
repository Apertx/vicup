function showCall() {
  let div = document.createElement('div');
  div.id = 'callHere';
  div.innerHTML = '<a href="tel:+79219397700"><div class="call-float"></div></a>';
  document.body.append(div);
}
