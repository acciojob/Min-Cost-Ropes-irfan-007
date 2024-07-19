function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort((a,b)=>(a-b));
	console.log(arr);
	var ans=0;
	var tem=arr[0];
	for(let i=1;i<arr.length;i++){
		tem+=arr[i];
		ans+=tem;
	}
  return ans;
}

module.exports=mincost;
