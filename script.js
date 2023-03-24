
function search(query){
    const url=`https://imdb-api.com/API/SearchMovie/k_u8b9g55h/string=${query}`
    fetch(url)
    .then((response) => response.json())
    .then((data) =>{
   const ok=data.results;
        renderresult(ok);
        document.getElementById("errormessage").innerHTML="";
    })
    .catch((error)=>{
        document.getElementById("errormessage").innerHTML=error;
        renderresult([]);
    })
}


function renderresult(ok){
    const list=document.getElementById("searchBar");
    ok.forEach(result =>{
     
        var div =document.createElement('div');
        const elements=document.createElement("div");
        elements.innerText =result.title;
        div.setAttribute('class','gridDiv');
        var img=document.createElement('img');
       img.setAttribute('src', result.image);
       img.setAttribute('class', 'gridDivImg');
        list.appendChild(elements);
        list.appendChild(img);
document.querySelector('#movieGrid').append(list)
    });
}
let serachtimeout =0;
window.onload = () =>{
    const newElements = document.getElementById("movieName");
    newElements.onkeyup=(event)=>{
if(newElements.value.length===0){
    return;
}

        clearTimeout(serachtimeout);
        serachtimeout = setTimeout(() =>{
    search(newElements.value);

},250);
        
   
};
}




	function fetchData(){	
fetch('https://imdb-api.com/API/ComingSoon/k_u8b9g55h')
	.then(response =>{
if(!response.ok){
	throw Error("Error");
}
	return response.json();
	})
	.then(data  => {
		console.log(data);
		for(let i=0;i<=10;i++) {
		const moviedis=
		 `<div class ="movies">
			
			<li onclick="fun(this.value)"><button value="${data.items[i]}"><img src="${data.items[i].image}"> </li></button>
			<li><p> ${data.items[i].description}</p></li>
			<li>name ${data.items[i].title}</li>
			</div>`;
		
		
		
		document.querySelector('#movies').innerHTML+=moviedis
	}
	})
	
	}
fetchData();


function fun(id){
	fetch('https://imdb-api.com/API/SearchTitle/k_u8b9g55h/string')
	
	.then(response =>{
		if(!response.ok){
			throw Error("Error");
		}
			return response.json();
			})
			.then(data => {
				console.log(data);
				const moviedis =
		 `<div class="movies">
			
			<li><button><img src="${data.items.image}"></button> </li>
			<li><p> ${data.items.description}</p></li>
			<li>name ${data.items.title}</li>
			</div>`;
			
		document.querySelector('#ab').innerHTML+=moviedis
				
})
}


























