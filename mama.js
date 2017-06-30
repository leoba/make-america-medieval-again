// mama.js - part of make america medieval again
// by Dot Porter @leoba
// Based on Make America Kittens Again
// v1.2.1
// by Tom Royal 
// tomroyal.com

var mamaTesting = false; // for debugging only

if (mamaTesting){
	console.log('mama initiated');
	var mamaReplacements = 0;
}	

// init blacklist

var blacklist = ["trump", "трамп", "トランプ"]; // thanks to jSanchoDev and akiatoji for translations

// get additional settings from chrome storage

chrome.storage.local.get({
    blockPence: false,
    blockFarage: false,
    blockLePen: false,
    blockWilders: false,
    blockBannon: false,
    customBlock: false
  }, function(items) { 
	  if (items.blockPence){
		  blacklist.push("mike pence");
		  blacklist.push("ペンス");
	  };
	  if (items.blockFarage){
		  blacklist.push("farage");
	  };
	  if (items.blockLePen){
		  blacklist.push("le pen");
	  };
	  if (items.blockWilders){
		  blacklist.push("wilders");
	  };
	  if (items.blockBannon){
		  blacklist.push("bannon");
	  };
	  // process custom blocklist
	  
	  if(items.customBlock){
			var customBlockTargets = items.customBlock.split(',');
			  customBlockTargets.forEach(function(blockTarget) {
				    blacklist.push(blockTarget.trim().toLowerCase())
			  });  
	  };

	  document.addEventListener('DOMContentLoaded', mamanow(theMss), false);
	  
  });

// manuscript data!
// Note - now moved from S3 to local storage


var theMss = {"mss": [
    {"file": "0488_0092_web.jpg", "Credit": "UPenn Ms. Codex 1056, Miniature, Nativity, f. 45r", "URL": "http://openn.library.upenn.edu/Data/0002/html/mscodex1056.html", "type":"0"},
	{"file": "0488_0107_web.jpg", "Credit": "UPenn Ms. Codex 1056, Miniature, Magi, f. 52v", "URL": "http://openn.library.upenn.edu/Data/0002/html/mscodex1056.html", "type":"0"},
	{"file": "0488_0180_web.jpg", "Credit": "UPenn Ms. Codex 1056, Miniature, Three Living and Three Dead, f. 89r", "URL": "http://openn.library.upenn.edu/Data/0002/html/mscodex1056.html", "type":"0"},
	{"file": "0409_0004_web.jpg", "Credit": "UPenn Ms. Codex 1070, Two knights, f. 1r", "URL": "http://openn.library.upenn.edu/Data/0002/html/mscodex1070.html", "type":"0"},
	{"file": "0409_0035_web.jpg", "Credit": "UPenn Ms. Codex 1070, fol. 17v", "URL": "http://openn.library.upenn.edu/Data/0002/html/mscodex1070.html", "type":"0"},
	{"file": "0238_0080_web.jpg", "Credit": "UPenn LJS 47, musical diagram, f. 39r", "URL": "http://openn.library.upenn.edu/Data/0001/html/ljs47.html", "type":"0"},
	{"file": "0238_0083_web.jpg", "Credit": "UPenn LJS 47, musical diagram, f. 40v", "URL": "http://openn.library.upenn.edu/Data/0001/html/ljs47.html", "type":"0"},
	{"file": "0229_0057_web.jpg", "Credit": "UPenn LJS 449, Medical illustration, f. 27v", "URL": "http://openn.library.upenn.edu/Data/0001/html/ljs449.html", "type":"0"},
	{"file": "0229_0049_web.jpg", "Credit": "UPenn LJS 449, Medical illustration (urinalysis), f. 23v", "URL": "http://openn.library.upenn.edu/Data/0001/html/ljs449.html", "type":"0"},
	{"file": "0678_0145_web.jpg", "Credit": "UPenn Ms. Codex 724, Drollery, Rabbit playing horn, f. 72v", "URL": "http://openn.library.upenn.edu/Data/0002/html/mscodex724.html", "type":"0"},
	{"file": "0678_0037_web.jpg", "Credit": "UPenn Ms. Codex 724, Drollery, White cat, f. 18v", "URL": "http://openn.library.upenn.edu/Data/0002/html/mscodex724.html", "type":"0"},
	{"file": "0678_0373_web.jpg", "Credit": "UPenn Ms. Codex 724, Drollery, Unicorn, f. 186v", "URL": "http://openn.library.upenn.edu/Data/0002/html/mscodex724.html", "type":"0"},
	{"file": "0678_0312_web1.jpg", "Credit": "UPenn Ms. Codex 724, Drollery, Griffin, f. 156r", "URL": "http://openn.library.upenn.edu/Data/0002/html/mscodex724.html", "type":"0"},
	{"file": "0678_0312_web2.jpg", "Credit": "UPenn Ms. Codex 724, Winged serpent, f. 156r", "URL": "http://openn.library.upenn.edu/Data/0002/html/mscodex724.html", "type":"0"},
	{"file": "0011_0007_web.jpg", "Credit": "UPenn Ms. Codex 1058, Decorated Initial B, f. 1v", "URL": "http://openn.library.upenn.edu/Data/0002/html/mscodex1058.html", "type":"0"},
	{"file": "0349_0219_web.jpg", "Credit": "UPenn LJS 459, Illuminated drawing (Robot?), f. 108v", "URL": "http://openn.library.upenn.edu/Data/0001/html/ljs459.html", "type":"0"},
	{"file": "1730_0000_web.jpg", "Credit": "UPenn Ms. Coll 713, Collage 1", "URL": "http://openn.library.upenn.edu/Data/0002/html/mscoll713.html", "type":"0"},
	{"file": "1730_0001_web.jpg", "Credit": "UPenn Ms. Coll 713, Collage 2", "URL": "http://openn.library.upenn.edu/Data/0002/html/mscoll713.html", "type":"0"},
	{"file": "0241_0076_web.jpg", "Credit": "UPenn LJS 101, Diagram, f. 36r", "URL": "http://openn.library.upenn.edu/Data/0001/html/ljs101.html", "type":"0"},
	{"file": "0241_0077_web.jpg", "Credit": "UPenn LJS 101, Diagram, f. 36v", "URL": "http://openn.library.upenn.edu/Data/0001/html/ljs101.html", "type":"0"},
	{"file": "0241_0007_web.jpg", "Credit": "UPenn LJS 101, Decorated Initial P, f. 1v", "URL": "http://openn.library.upenn.edu/Data/0001/html/ljs101.html", "type":"0"},
	{"file": "4235_0011_web.jpg", "Credit": "FLP Lewis E 125, Calendar vignette, Virgo (zodiac sign of August), August and its labors threshing, f. 4v", "URL": "http://openn.library.upenn.edu/Data/0023/html/lewis_e_125.html", "type":"0"},
	{"file": "4237_0032_web.jpg", "Credit": "FLP Lewis E 126, Full-page miniature, Annunciation, f. 15v", "URL": "http://openn.library.upenn.edu/Data/0023/html/lewis_e_126.html", "type":"0"},
	{"file": "4237_0035_web.jpg", "Credit": "FLP Lewis E 126, f. 16v", "URL": "http://openn.library.upenn.edu/Data/0023/html/lewis_e_126.html", "type":"0"},
	{"file": "4288_0067_web.jpg", "Credit": "FLP Lewis E 87, f. 32v", "URL": "http://openn.library.upenn.edu/Data/0023/html/lewis_e_087.html", "type":"0"},
	{"file": "4278_0031_web.jpg", "Credit": "University of Manchester Hebrew Mss 6, Full-page miniature, upper right to left, Moses with Jethro's flock (Exodus 3:1); Moses and the Burning Bush (Exodus 3:5); lower right to left, Moses answers the Lord, holding up his rod – a shepherd's staff (Exodus 4:2); his rod turns into a serpent (Exodus 4:4); Moses holds the serpent (Exodus 4:4), f. 6a", "URL": "http://openn.library.upenn.edu/Data/0021/html/HebrewMss6.html", "type":"0"},
	{"file": "4278_0042_web.jpg", "Credit": "University of Manchester Hebrew Mss 6, Full-page miniature, Moses, Aaron and the Israelites walk on dry land, while Pharaoh (centre, right) and the Egyptians drown (Exodus 12:27-28), f. 19a", "URL": "http://openn.library.upenn.edu/Data/0021/html/HebrewMss6.html", "type":"0"},
	{"file": "4278_0063_web.jpg", "Credit": "University of Manchester Hebrew Mss 6, Marginal decoration, Grotesques and a hare hunt, f.29b", "URL": "http://www.flickr.com/photos/spookypeanut/5502011850/", "type":"0"},
	{"file": "4280_0032_web.jpg", "Credit": "University of Manchester Hebrew Mss 7, Marginal decoration, Naked children cavorting in a field and trees; the image illustrates the text: השדה כצמח רבבה, f. 14a", "URL": "http://openn.library.upenn.edu/Data/0021/html/HebrewMss7.html", "type":"0"},
	{"file": "W4_000068_sap.jpg", "Credit": "Walters Art Museum W.4, Portrait of the Evangelist Matthew, f. 33v", "URL": "http://openn.library.upenn.edu/Data/0020/Data/WaltersManuscripts/html/W4/", "type":"0"},
	{"file": "W4_000182_sap.jpg", "Credit": "Walters Art Museum W.4, Portrait of the Evangelist Mark, f. 90v", "URL": "http://openn.library.upenn.edu/Data/0020/Data/WaltersManuscripts/html/W4/", "type":"0"},
	{"file": "W4_000254_sap.jpg", "Credit": "Walters Art Museum W.4, Portrait of the Evangelist Luke, f. 126v", "URL": "http://openn.library.upenn.edu/Data/0020/Data/WaltersManuscripts/html/W4/", "type":"0"},
	{"file": "W4_000358_sap.jpg", "Credit": "Walters Art Museum W.4, Portrait of the Evangelist John, f. 178v", "URL": "http://openn.library.upenn.edu/Data/0020/Data/WaltersManuscripts/html/W4/", "type":"0"}
    ]
};

function mamanow(theMss){
	if (mamaTesting){
		console.log('mama processing blacklist is '+blacklist);
	}

	// called on page load. Searches all img alt text and srcs for the strings in blacklist, replaces with mss
	var pagepics=document.getElementsByTagName("img"), i=0, img;	
	while (img = pagepics[i++])
	{	
		
		if (img.hasAttribute('mamareplaced')){
			// already replaced	
		}
		else {
			// not yet replaced
			var alttext = String(img.alt).toLowerCase();
			var imgsrc = String(img.src).toLowerCase();
			
			if (img.parentElement.nodeName != 'BODY'){
				// check parent innerHTML for blackilist
				var parenttag = img.parentElement.innerHTML.toLowerCase();
			}
			else {
				// prevent parse of entire doc
				var parenttag = '';
			};
			
			var imgwidth = img.clientWidth;
			var imgheight = img.clientHeight;
	
			blacklist.forEach(function(blist) {	
				if ((alttext.indexOf(blist) != -1) || (imgsrc.indexOf(blist) != -1) || (parenttag.indexOf(blist) != -1)){
					
					// append old src
					img.setAttribute("mamareplaced", img.src);
					
					// remove srcsets, forcing browser to the mss - eg, BBC News
					if (img.hasAttribute('srcset')){
						img.removeAttribute('srcset');	
					};
					// remove source srcsets if children of same parent <picture> element - eg, the Guardian
					if (img.parentElement.nodeName == 'PICTURE'){
						var theparent = img.parentNode;
						for(var child=theparent.firstChild; child!==null; child=child.nextSibling) {
						    if (child.nodeName == "SOURCE"){
							    child.removeAttribute('src');
							    child.removeAttribute('srcset');
						    };
						};
						
					};
					// knock out lazyloader data URLs so it doesn't overwrite mss
					if (img.hasAttribute('data-src')){
						img.removeAttribute('data-src');	
					};
					if (img.hasAttribute('data-hi-res-src')){
						img.removeAttribute('data-hi-res-src');	
					};
					if (img.hasAttribute('data-low-res-src')){
						img.removeAttribute('data-low-res-src');	
					};
					
					var randk = Math.floor(Math.random() * 32) + 1
					
					img.src = chrome.runtime.getURL('/mss/'+theMss.mss[randk].file+'');
					
					img.width = imgwidth;
					img.height = imgheight;
					
					if (theMss.mss[randk].type == 0){
						img.alt = theMss.mss[randk].Credit+' description '+theMss.mss[randk].URL+'';
					}
					else {
						img.alt = 'Photo by '+theMss.mss[randk].Credit+'';
					};
					mamaReplacements++;
				};
			});	
		};				
	}
	if (mamaTesting){
		console.log('mama processing complete, replaced '+mamaReplacements+' images');
	}	    
};

// function to replace mssed-images with the original SRCs

function undomamanow(){
	if (mamaTesting){
		console.log('undoing MAMA');
	}

	var pagepics=document.getElementsByTagName("img"), i=0, img;	
	while (img = pagepics[i++])
	{	
		if (img.hasAttribute('mamareplaced')){
			if (mamaTesting){
				console.log('replacing image');
			};
			img.src = img.getAttribute('mamareplaced');
			img.removeAttribute('mamareplaced');
		};	
	};
	
}

// listener for context menu click invoking the above

chrome.extension.onMessage.addListener(function (message, sender, callback) {
    if (message.functiontoInvoke == "undoMAMA") {
	    // undo function called
        undomamanow();
    };
    /*
    else if (message.functiontoInvoke == "redoMAMA") {
        mamanow(theMss);
    }
    */
});