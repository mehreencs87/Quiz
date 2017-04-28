var lock = new Auth0Lock(
  'BpHxUMaTIKOuLE6Y9BdqXh5EPYjkPCHB',
  'mehreen--khan.auth0.com',
  options
);

document.getElementById('btn-login').addEventListener('click', function() {
  lock.show();
});