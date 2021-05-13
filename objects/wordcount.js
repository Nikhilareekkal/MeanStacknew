var text="hello hai hello hai good"
//split by space
//[hello,hai,hello,hai,good]
//[hello:2,hai:2,good:1]
//create empty object
//var result={}   //key   value
                //hello  1+1
                //hai    1+1
                //good   1
 //hello hai hello hai good

 //split by space
 var words=text.split(" ")
 var result={}
 for (let word of words){
  //hello
  if(word in result){
      result[word]+=1;
  }
  else{
      result[word]=1;
  }
}
console.log(result);