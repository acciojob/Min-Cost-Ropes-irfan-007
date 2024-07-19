function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort((a,b)=>(a-b));
	let ans=0;
	tem=0;
	for(let i of arr){
		tem+=i;
		ans+=tem;
	}
  return ans;
}

module.exports=mincost;
