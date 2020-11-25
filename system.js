document.addEventListener("DOMContentLoaded", (loadEv)=>{
	const xmlHttp = new Xml("getData.php", (response)=>{
		console.log(response);
	});
	xmlHttp.request("")
}, false)

class Xml{
	constructor(url=-1,callback=()=>{}){
		this.xmlobj=new XMLHttpRequest();
		if(url==-1)throw new Error("urlがないよ");
		this.url=url;
		this.complete=callback;
		this.xmlobj.addEventListener("load",()=>{
			let response;
			if(this.xmlobj.readyState==4&&(this.xmlobj.status==200||this.xmlobj.status==0)){
				response=this.xmlobj.responseText;
				console.log(response);
				console.log("非同期終了");
				if(response=="")return false;
			}else{
				console.log("エラー\n readyState="+this.xmlobj.readyState+"\n status="+this.xmlobj.status);
			}
			this.complete(response);
		},false);
	}
	request(sendData){
		console.log("非同期開始");
		this.xmlResponse(sendData);
	}
	xmlResponse(sendData){
		this.xmlobj.open("POST",this.url);
		this.xmlobj.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
		this.xmlobj.send(sendData);
	}
}
