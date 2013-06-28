function taco(var1) {

	if(var1==1) document.getElementById('login_username').focus();
     else if(var1==3) document.getElementById('ti').value=1;
     else if(var1==4) document.getElementById('ti').value=4;
	 else if(var1==5) document.getElementById('ti').value=0;
     else if(var1==2)document.getElementById('login_passwd').focus();
	 else if(var1==6)document.getElementById('pseudo').focus();
	 else if(var1==7)document.getElementById('email1').focus();
	 else if(var1==8)document.getElementById('passe1').focus();
	 else if(var1==9)document.getElementById('naissance1').focus();
    
	}
	
function VerificationMail(email)
{
 address = email.toUpperCase();

  if(address.length < 5)
     return false;

  if(address.indexOf("..") != -1) 
     return false;

  for(i=0; i<address.length; i++)
  {
     tmpchar = address[i];

     if((tmpchar != '.') && (tmpchar != '@')
		&& ( (tmpchar <  '0') || (tmpchar  > '9') )
		&& ( (tmpchar <  'A') || (tmpchar  > 'Z') )
		&& ( (tmpchar <  '-') || (tmpchar  > '-') ) 
		&& ( (tmpchar <  '_') || (tmpchar  > '_') ) )
        return false;
  }


  if(address.indexOf('@') == -1)
     return false;

  if(address.indexOf('.') == -1)
     return false;

  if( (address.substring(0, 1) == '@') || (address.substring(0, 1) == '.') )
     return false;

  if( (address.substring(address.length -1, address.length) == '@') || (address.substring(address.length -1, address.length) == '.'))
     return false;

  if(address.indexOf('@', address.indexOf('@', 0) + 1) != -1)
     return false;

  if(address.substring(address.indexOf('@') + 1, address.indexOf('@') +2) == '.')
     return false;

  if(address.substring(address.indexOf('@') - 1, address.indexOf('@')) == '.')
     return false;

  // address may be ok
  return true;
}