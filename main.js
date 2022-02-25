const openTab = (evt, tabName) => {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName(`tabcontent`);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = `none`;
    }
    tablinks = document.getElementsByClassName(`tablinks`);
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(` active`, ``);
    }
    document.getElementById(tabName).style.display = `block`;
    evt.currentTarget.className += ` active`;
};

const addPage = (num, url) => {
    console.log(url);
    const btn = document.getElementById(`btn${num}`);
    const div = document.createElement(`div`);
    const path = document.getElementById(`pathName${num}`);
    const iframeHeader = document.createElement(`h4`);
    iframeHeader.innerHTML = path.value;
    const iframe = document.createElement(`iframe`);
    iframe.className = `iframe`;
    iframe.src = `${url}${path.value}`;
    iframe.height = 600;
    iframe.width = 980;
    div.appendChild(iframeHeader);
    div.appendChild(iframe);
    //div.innerHTML = `
    //<iframe src="${url.value}" frameborder="1" height="600" width="980"></iframe>`;
    document.getElementById(num).appendChild(div);
    path.value = ``;
};

const addTab = () => {
        let tab = document.getElementById(`headers`).children.length + 1;
        let url = document.getElementById(`newTab`);
        let btn = document.createElement(`button`);
        let div = document.createElement(`div`);
        div.className = `tabcontent`;
        div.id = `${tab}`;
        btn.id = tab == 0 ? `defaultOpen` : ``;
        btn.className = `tablinks`;
        btn.innerHTML = `${url.value.length > 0? url.value : `null`}`;
	btn.onclick = function(e) {
		openTab(e, tab);
	};
	let meta = document.createElement(`meta`);
	meta.content = url.value;
	meta.id = `meta${tab}`;
	div.appendChild(meta);
	let span = document.createElement(`span`);
	span.className = `topright`;
	span.innerHTML = `&times`;
	span.onclick = function(){
		this.parentElement.style.display = `none`;
	};
	div.appendChild(span);
	let inputField = document.createElement(`input`);
    inputField.placeholder = `Path: `
    inputField.className = `textbox`;
	inputField.type = `text`;
	inputField.name = `pathName${tab}`;
	inputField.id = `pathName${tab}`;
	div.appendChild(inputField);
	let newBtn = document.createElement(`button`);
	newBtn.innerHTML = `add`;
	newBtn.id = `btn${tab}`;
    newBtn.className = `btn`;
	newBtn.onclick = function() {
		addPage(tab, document.getElementById(`meta${tab}`).content);
	};
	div.appendChild(newBtn);
	document.getElementById(`headers`).appendChild(btn);
	document.getElementById(`content`).appendChild(div);
	url.value = ``;
	if(tab == 0){
		document.getElementById(`defaultOpen`).click();
	}
};