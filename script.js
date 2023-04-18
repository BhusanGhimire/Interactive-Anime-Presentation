window.addEventListener("contextmenu", e => e.preventDefault())
let Girllinks = [ 
{
	url: 'images/blue fight.jpg',
	backgroundSize: 'cover',
	backgroundPosition: '-90%'
},
{
	url: 'images/RYT.png',
	backgroundSize: 'cover',
	backgroundPosition: 'center'
},
{
	url: 'images/in heaven.png',
	backgroundSize: 'cover',
	backgroundPosition: 'right'
},
{
	url: 'images/that marry me song.png',
	backgroundSize: 'cover',
		backgroundPosition: 'bottom'
},
{
	url: 'https://wallpaperaccess.com/full/6574022.jpg',
	backgroundSize: 'cover',
	backgroundPosition: 'center'
},
{
	url: 'images/mikeGirl.jpg',
	backgroundSize: 'cover',
	backgroundPosition: 'center'
},
{
	url: 'images/dx.jpg',
	backgroundSize: 'cover',
	backgroundPosition: 'center'
},
{
	url: 'images/Aayaka.jpg',
	backgroundSize: 'cover',
	backgroundPosition: 'center'
}
];
let Boylinks = [
	{
		url:"https://i.pinimg.com/originals/85/e1/63/85e163a00f52d6ae02f5431df399e58a.jpg",//zongli
		backgroundSize:"cover",
		backgroundPosition:"center"
	},
	{
		url:"images/violet x red leaders.jpg",
		backgroundSize:"cover",
		backgroundPosition:"center"
	},
	{
		url:"images/xiao.jpg",
		backgroundSize:"cover",
		backgroundPosition:"center"
	},
	{
		url:"images/B boy.png",
		backgroundSize:"cover",
		backgroundPosition:"70%"
	},
	{
		url:"https://getwallpapers.com/wallpaper/full/8/2/4/650378.jpg",
		backgroundSize:"cover",
		backgroundPosition:"center"
	},
	{
		url:"https://wallpaperaccess.com/full/4007107.png",//vali lucifer
		backgroundSize:"cover",
		backgroundPosition:"center"
	},
	{
		url:"https://wallpaperaccess.com/full/4007128.jpg",
		backgroundSize:"cover",
		backgroundPosition:"center"
	},
	{
		url:"https://wallpaperaccess.com/full/4007164.jpg",
		backgroundSize:"cover",
		backgroundPosition:"center"
	}
]
links = Girllinks;
let imgMenu = document.getElementById("dynamic-image-menu");
let imgMenuArray = [...imgMenu.children];
let label = imgMenu.querySelector("label");
let themes = imgMenu.querySelector("select");
let mainCharacterImage = document.querySelector("#main img");
let mainCharacterName = document.querySelector("#main #para span");

label.addEventListener("click",()=>{
	themes.style.scale = (themes.style.scale == "0") ? "1":"0";//to show or hide theme menu(boys or girls menu)
})
	//changes elements(objects) of "links" array and also changes the image and name of the character inside #main according to the item seleced in themes menu
  themes.addEventListener("change", function() {
    let selectedOption = this.options[this.selectedIndex].value;
    if (selectedOption === "boys") {
		links = Boylinks;
		backgroundCall();
		mainCharacterImage.setAttribute("src", "https://imgs.search.brave.com/J2PKvQlkuYnKIbxiTwbFECUTG81w-3B9Lm5KB97w1AU/rs:fit:796:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5B/Uk9sdm0wMzhZTUZL/UFQza2ZnLVB3SGFF/YSZwaWQ9QXBp");
		mainCharacterName.innerHTML = "@Vali lucifer";
    } else if (selectedOption === "girls") {
		links = Girllinks;
		backgroundCall();
		mainCharacterImage.setAttribute("src", "https://imgs.search.brave.com/en8mjB9gKVa0Ew10wm5uyIxgpKUeCrfT1wfBokmCPLw/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/aFRIc2JueHVRY0JB/QkFSQTdhUG53SGFI/YSZwaWQ9QXBp");
		mainCharacterName.innerHTML = "@Atena";
    }
  });


		//Will popup that good day message according to current time
		let scroll = document.getElementById('scroll');
		window.addEventListener('scroll', displayShow);
		function displayShow() {
			if (window.pageYOffset > 100) {
  			scroll.setAttribute('style', "scale:1");
			}else {
  			scroll.setAttribute('style', "scale:0");
			}
		}
		let greetings;
		const hour = new Date().getHours();
		greetings = (hour < 20) || (hour >= 17) ? "evening"
 	 	: (hour >= 5 && hour <= 11) ? "morning"
  	 	: (hour >= 12 && hour < 17) ? "afternoon"
  	 	: "to meet you";
		scroll.children[1].innerText = `Good ${greetings} baby!`;


//function to change background image of body
function setBackground(imageIndex) {
	document.body.style.background = `url("${links[imageIndex].url}")`;
	document.body.style.backgroundSize = links[imageIndex].backgroundSize;
	document.body.style.backgroundPosition = links[imageIndex].backgroundPosition;
}

//when seventh child is right chicked then body's background will change after every two seconds until eighth child is right clicked
function backgroundCall(){
imgMenuArray.forEach((child,index)=>{
	if(index == 6){
	imgMenuArray[6].oncontextmenu = () => {
		timeout = window.setInterval(() => {
		index = Random(0,imgMenu.children.length-1);
		setBackground(index);
		},2000);
	imgMenuArray[7].oncontextmenu = () =>{
		window.clearInterval(timeout);
	}
	}
}
	//event listener to change body's background is applied to every child of #dynamic-image-menu through setBackground function and if the child is eighth then the event listener is applied to it to change body's background according to innerWidth of the window
	child.addEventListener("click",()=>{
		if (links == Girllinks && index == 7) {
  			index = (window.innerWidth <= 690) ? 7 : 3;
		}		
		if(index<=7) setBackground(index);// if index<=7 because only upto 8 childs the image menus are present(have look at html)
	});
})
}
backgroundCall();


function Random(min,max){
	let random = Math.floor(Math.random()*(max-min)+min);
	return random;
}


		//Will change images of #imgesBox
		let numbering = 0;
		slideshow(numbering);
		function controller(imgNo){
			numbering = numbering + imgNo;
			slideshow(numbering);
		}
		
		function slideshow(funcNum){
			let slides = document.getElementsByClassName('slideImages');
			if (funcNum==slides.length){
				funcNum=0;
				numbering=0;
			}
			if (funcNum<0){
				funcNum=slides.length-1;
				numbering=slides.length-1;
			}
			for(let every of slides){
				every.style.display = 'none';
			}
			slides[funcNum].style.display='block';
		}


	        /*wii display out or hide the #dynamic-image-menu by changing its width onclick of #img-for_dynamic-image-menu*/
	let imgForDynamicImageMenu = document.getElementById('img-for_dynamic-image-menu');
	imgForDynamicImageMenu.addEventListener('click', () => {
		imgMenu.style.width = (imgMenu.style.width == 0 || imgMenu.style.width === '' || imgMenu.style.width === '0px') ? '12vw' : '0';
	})
