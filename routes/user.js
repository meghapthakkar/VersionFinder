
/*
 * GET users listing.
 */
var HashMap = require('hashmap').HashMap;
http=require('http')
var map=new HashMap()	
exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.findVersion=function(req,res){
	url=req.param('url')
	str=''
	http.get(url,function(response){
		response.on('data',function(chunk){
			str+=chunk;
		})
		response.on('end',function(){
		
			console.log('je'+str.length)
			versionindex=str.indexOf('version');
			
			part=str.substring(versionindex+8);
			console.log(part.length)
			spaceindex=part.indexOf(' ');
			console.log(spaceindex+"is space index")
			version=part.substring(0,spaceindex);
			vernum=version.match(/\d+/g).map(Number);
			console.log('after version'+vernum);
			defaultVersion=[1,1,1];
			map.set("url",defaultVersion)
			if(versionindex>-1)
				{
					changed=true
					var oldVer=map.get("url")
					if(oldVer!=null){
						for(i=0;i<oldVer.length;i++){
							if(oldVer[i]!=vernum){
								changed=false;
								break;
							}
						}
						if(changed=true){
							map.set("url",vernum)
							}
						res.render('abc.ejs',{changed:changed,vernum:vernum})
					}
					else{
						changed=false
						res.render('abc.ejs',{vernum:vernum,changed:changed})
					}
				}
			else{
				console.log("does not exist")
			}
		
		})
	})
}