function likedBy (list){
 
  if(list.length === 0){
   console.log("0 likes");
  return "0 likes";
  }
  else if(list.length === 2 ){
    console.log("Liked by " +list[0] + " and " + list[1]);
      return "Liked by " +list[0] + " and " + list[1];
  }
  else if(list.length === 3){
    console.log("Liked by " + list[0] + " and " + Number(list.length-1) + " others")
    return "Liked by " + list[0] + " and " + Number(list.length-1) + " others"
  }
  else {
    console.log("Liked by " + list[0] + ", "+list[1] + " and " + Number(list.length-2) +" others" )
    return "Liked by " + list[0] + ", "+list[1] + " and " + Number(list.length-2) +" others"
  }
}

