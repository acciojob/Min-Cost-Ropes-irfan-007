function mincost(arr)
{ 
//write your code here
// return the min cost
    var sum=0;
	while(arr.length>1){
	    arr.sort((a,b)=>(b-a));
	    var tem=arr.pop()+arr.pop();
	    arr.push(tem);
	    sum+=tem;
	}

  return sum;
}

module.exports=mincost;
