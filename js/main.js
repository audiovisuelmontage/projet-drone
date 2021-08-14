// Functions for each action-command.

function help(){
  return "<h2><span style=\"color:#eb926d;\">Help:</span></h2><table>\
  <tr>\
    <td>all</td>\
    <td>Tout voir</td>\
  </tr>\
  <tr>\
    <td>about</td>\
    <td>Sujet du site</td>\
  </tr>\
  <tr>\
    <td>contact</td>\
    <td>Comment rentrer un contacte avec notre groupe</td>\
  </tr>\
  <tr>\
    <td>links</td>\
    <td>Page importante au projet</td>\
  </tr>\
  <tr>\
    <td>etat</td>\
    <td>Apprendre l'état du drone pendant son dernier vol</td>\
  </tr>\
  <tr>\
    <td>sujet</td>\
    <td>Télécharger le sujet</td>\
  </tr>\
  <tr>\
    <td>rickroll</td>\
    <td>Never Gonna Give You Up</td>\
  </tr></table>";
}

function contact(){
  return "<h2><span style=\"color:#cc6666;\">Contact:</span></h2><table>\
  <tr>\
    <td>Email</td>\
    <td><a href=\"mailto:contact@audiovisuel-montage.fr\">contact@audiovisuel-montage.fr</a></td>\
  </tr>\
  <tr>\
    <td>Telephone</td>\
    <td><a href=\"tel:065566778899\">065566778899</a></td>\
  </tr>\
  <tr>\
    <td>Adresse</td>\
    <td>Lycée Main de Biran</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>24100 Bergerac</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>108 Rue Valette</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>France</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>.</td>\
  </tr></table>";
}

function etat(){
  return "<h2><span style=\"color:#81a2be;\">etat:</span></h2><table>\
  <tr>\
    <td>Batterie</td>\
    <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>\
  </tr>\
  <tr>\
    <td>Integration HTML</td>\
    <td>▰▰▰▰▰▱▱▱▱▱ 50%</td>\
  </tr>\
  <tr>\
    <td>Hauteur Maximum Atteind</td>\
    <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>\
  </tr>\
  <tr>\
    <td>Rickrolling</td>\
    <td>▰▰▰▰▰▰▰▰▰▰ 100%</td>\
  </tr></table>";
}

function about(){
  return "<p>Etat du drone pendant son dernier vol sur le terrain.</p>";
}

function sujet(){
  return "<span style=\"color:#8abeb7;\"><h2>Sujet:</h2></span><p>\tTélécharger le sujet <a href=\"src/sujet.7z\" target=\"_blank\" style=\"text-decoration: underline;\">ici</a>.</p>";
         
}

function credits(){
  return "<p>Built by <a href=\"https://www.github.com/CedArctic\" target=\"_blank\"><i class=\"fab fa-github\"></i> CedArctic</a></p>";
}

function links(){
  return "<span style=\"color: #b5bd68;\"><h2>Links:</h2></span><ul>\
  <li><a href=\"https://www.linkedin.com\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i> LinkedIn</a></li>\
  <li><a href=\"https://www.github.com\" target=\"_blank\"><i class=\"fab fa-github\"></i> Github</a></li>\
  <li><a href=\"https://www.twitter.com\" target=\"_blank\"><i class=\"fab fa-twitter\"></i> Twitter</a></li>\
  <li><a href=\"https://www.facebook.com\" target=\"_blank\"><i class=\"fab fa-facebook\"></i> Facebook</a></li>\
  </ul>";
}

function rickroll(){
  return "<p>We're no strangers to love<br>\
    You know the rules and so do I<br>\
    A full commitment's what I'm thinking of<br>\
    You wouldn't get this from any other guy<br>\
    <br>\
    I just wanna tell you how I'm feeling<br>\
    Gotta make you understand<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    We've known each other for so long<br>\
    Your heart's been aching, but<br>\
    You're too shy to say it<br>\
    Inside, we both know what's been going on<br>\
    We know the game and we're gonna play it<br>\
    <br>\
    And if you ask me how I'm feeling<br>\
    Don't tell me you're too blind to see<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    (Ooh, give you up)<br>\
    (Ooh, give you up)<br>\
    Never gonna give, never gonna give<br>\
    (Give you up)<br>\
    Never gonna give, never gonna give<br>\
    (Give you up)<br>\
    <br>\
    We've known each other for so long<br>\
    Your heart's been aching, but<br>\
    You're too shy to say it<br>\
    Inside, we both know what's been going on<br>\
    We know the game and we're gonna play it<br>\
    <br>\
    I just wanna tell you how I'm feeling<br>\
    Gotta make you understand<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you</p>";
}

// Main Function
function commandProcessor(e){

  //Check if the enter key is pressed
  if(e.keyCode == 13){

    //Clear the area where info will be printed
    document.getElementById('injected').innerHTML= "";

    //Get user input
    var txtInput = document.getElementById('txtBox').value;

    //Select what info to print according to command
    if(txtInput == "help"){
      document.getElementById('injected').innerHTML=help();
    }else if (txtInput=="all") {
      document.getElementById('injected').innerHTML=about() + "\n\n\n" + etat() + "\n\n\n" + links() + "\n\n\n" + contact() + "\n\n\n" + sujet();
    }else if (txtInput == "about") {
      document.getElementById('injected').innerHTML=about();
    }else if (txtInput == "contact") {
      document.getElementById('injected').innerHTML=contact();
    }else if (txtInput == "sujet") {
      document.getElementById('injected').innerHTML=sujet();
    }else if (txtInput=="etat") {
      document.getElementById('injected').innerHTML=etat();
    }else if (txtInput=="links") {
      document.getElementById('injected').innerHTML=links();
    }else if (txtInput == "rickroll") {
      var win = window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank');
      win.focus();
      document.getElementById('injected').innerHTML=rickroll();
    }else if (txtInput == "credits") {
      document.getElementById('injected').innerHTML=credits();
    }else{
      document.getElementById('injected').innerHTML = help();
    }

    //Clear input text box
    document.getElementById('txtBox').value= "";
  }
}
