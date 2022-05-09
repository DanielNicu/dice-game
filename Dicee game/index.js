var randomnumber1 = Math.floor(Math.random()*6)+1;
switch(randomnumber1){
  case 1:
    document.querySelector('img.img1').setAttribute("src","images/dice1.png");
    break;
    case 2:
      document.querySelector('img.img1').setAttribute("src","images/dice2.png");
      break;
      case 3:
        document.querySelector('img.img1').setAttribute("src","images/dice3.png");
        break;
        case 4:
          document.querySelector('img.img1').setAttribute("src","images/dice4.png");
          break;
          case 5:
            document.querySelector('img.img1').setAttribute("src","images/dice5.png");
            break;
            case 6:
              document.querySelector('img.img1').setAttribute("src","images/dice6.png");
              break;
  default:
    document.querySelector('img.img1').setAttribute("src","images/dice1.png");
    break;
}
var randomnumber2 = Math.floor(Math.random()*6)+1;
switch(randomnumber2){
  case 1:
    document.querySelector('img.img2').setAttribute("src","images/dice1.png");
    break;
    case 2:
      document.querySelector('img.img2').setAttribute("src","images/dice2.png");
      break;
      case 3:
        document.querySelector('img.img2').setAttribute("src","images/dice3.png");
        break;
        case 4:
          document.querySelector('img.img2').setAttribute("src","images/dice4.png");
          break;
          case 5:
            document.querySelector('img.img2').setAttribute("src","images/dice5.png");
            break;
            case 6:
              document.querySelector('img.img2').setAttribute("src","images/dice6.png");
              break;
  default:
    document.querySelector('img.img2').setAttribute("src","images/dice1.png");
    break;
}
if(randomnumber1 === randomnumber2){
  document.querySelector('h1').innerHTML="Draw!";
}
if(randomnumber1 > randomnumber2){
  document.querySelector('h1').innerHTML="Player 1 wins!";
}
if(randomnumber1 < randomnumber2){
  document.querySelector('h1').innerHTML="Player 2 wins!";
}
