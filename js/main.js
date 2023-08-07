const MAIN_PAGE = `
	<div style="text-align: center; color: #ff4216; font-weight: bold;">
		<p>The Project is in Alpha stage!<br>Most modules are not complete and existing ones can contain bugs!</p>
	</div>
	<div style="margin-left: 25px; margin-right: 25px; text-align: justify; text-indent: 40px;">
		<p><b><span style="color: #5271c8;">Beta</span> <span style="color: #f8862d;">Horizons</span></b> is a modular long-term projects that represents "my game vision" of Minecraft Beta 1.7.3.</p>
		<p>
			The project is based on <b>Babric</b> (beta Fabric) and <b>StAPI</b> (Station API).
			Both tools introduces modern code practices, flexibility and usage of modern Java 17.
			Unlike many old and legacy mods all patches to Minecraft code are compatible with each other - instead of base edits tools use <b>mixins</b>.
		</p>
		<p>
			All project parts are logical modules that can be enabled or disabled depending on player needs (which provides a good customisation for players).
			Most modules also have configs and options, so it is possible to customise modules individually.
		</p>
	</div>
	<img style="width: 100%;" src="img/main_screenshot.png">
`;

const MODS_PAGE = `
	<div style="text-align: center; color: #ff4216; font-weight: bold;">
		<p>Mod list is in active development, expect to see changes here</p>
	</div>
	<table align="center">
		<tr>
			<td width="280px" style="text-align: center;"><img src="https://github.com/paulevsGitch/BetterWeather/raw/main/src/main/resources/assets/better_weather/icon.png" style="width: 90%;"/></td>		
			<td>
				<p><b>Better Weather</b></p>
				<p><a href="https://jitpack.io/#paulevsGitch/BetterWeather"><img src="https://jitpack.io/v/paulevsGitch/BetterWeather.svg"></a></p>
				<p>
					This mod improves Minecraft weather by making clouds volumetric and weather effects local.
				</p>
				<p>
					<b>Dependencies:</b>
					<ul>
						<li><a href="https://github.com/babric/prism-instance">Babric Instance (MultiMC/PolyMC/Prism)</a></li>
						<li><a href="https://jenkins.glass-launcher.net/job/StationAPI">StationAPI</a></li>
					</ul>
				</p>
			</td>		
		</tr>
		<tr style="height: 4px; background-color: #333333;"><td colspan="2"></td></tr>
		<tr>
			<td width="280px" style="text-align: center;"><img src="https://github.com/paulevsGitch/BHCreative/raw/stapi-2.0/src/main/resources/assets/bhcreative/icon.png" style="width: 90%;"/></td>		
			<td>
				<p><b>BH Creative</b></p>
				<p><a href="https://jitpack.io/#paulevsGitch/BHCreative"><img src="https://jitpack.io/v/paulevsGitch/BHCreative.svg"></a></p>
				<p>
					Creative mod for Beta Horizons modpack.
				</p>
				<p>
					<b>Dependencies:</b>
					<ul>
						<li><a href="https://github.com/babric/prism-instance">Babric Instance (MultiMC/PolyMC/Prism)</a></li>
						<li><a href="https://jenkins.glass-launcher.net/job/StationAPI">StationAPI</a></li>
					</ul>
				</p>
			</td>		
		</tr>
	</table>
`;

const DOWNLOADS_PAGE = `
	<ul>
		<li><a href="https://disk.yandex.ru/d/Wmq0MXRC0Fh2Og">Alpha 0.0.3</a></li>
		<li><a href="https://disk.yandex.ru/d/1K5a2ibsL_lDrQ">Alpha 0.0.2</a></li>
		<li><a href="https://www.dropbox.com/s/vdq325iur78tal4/BHTests.zip?dl=0">Alpha 0.0.1</a></li>
	</ul>
`;

const HEADER_BUTTONS = [
	{ name: "MAIN", html: MAIN_PAGE },
	{ name: "MODS", html: MODS_PAGE },
	{ name: "DOWNLOADS", html: DOWNLOADS_PAGE }
];

var currentPage = parseInt(localStorage.getItem("bh_website_page")) || 0;

function init() {
	const contentDiv = document.createElement("div");
	document.body.appendChild(contentDiv);
	var style = contentDiv.style;
	style.position = "absolute";
	style.top = "70px";
	style.left = "20%";
	style.width = "60%";
	style.height = "100%";
	style.fontSize = "20px";
	style.textAlign = "left";
	
	contentDiv.innerHTML = HEADER_BUTTONS[currentPage].html;
	
	var table = document.createElement("table");
	document.body.appendChild(table);
	
	style = table.style;
	style.position = "absolute";
	style.top = "10px";
	style.left = "20%";
	style.width = "60%";
	style.height = "60px";
	style.textAlign = "center";
	style.fontWeight = "bold";
	style.fontSize = "20px";
	style.lineHeight = "0px";
	style.borderCollapse = "collapse";
	style.border = "0px";
	style.backgroundColor = "#181818";
	
	const row = table.insertRow(0);
	var index = 0;
	
	var cell = row.insertCell(index++);
	cell.style.width = "350px";
	
	var img = document.createElement("img");
	cell.appendChild(img);
	
	img.src = "img/bh_logo_horizontal.png"
	style = img.style;
	style.height = "42px";
	style.marginTop = "4px";
	
	HEADER_BUTTONS.forEach(entry => {
		var cellIndex = index++;
		const pageIndex = cellIndex - 1;
		cell = row.insertCell(cellIndex);
		
		cell.innerHTML = entry.name;
		
		style = cell.style;
		style.width = "170px";
		
		if (currentPage == pageIndex) {
			style.backgroundImage = "linear-gradient(to top, #f25421, #ffb537)";
		}
		else {
			style.backgroundColor = "#333333";
			style.cursor = "pointer";
		}
		
		cell.onclick = () => {
			if (currentPage == pageIndex) return;
			contentDiv.innerHTML = HEADER_BUTTONS[pageIndex].html;
			
			var activeCell = row.cells[pageIndex + 1];
			activeCell.style.backgroundImage = "linear-gradient(to top, #f25421, #ffb537)";
			activeCell.style.cursor = null;
			
			activeCell = row.cells[currentPage + 1];
			activeCell.style.backgroundImage = null;
			activeCell.style.backgroundColor = "#333333";
			activeCell.style.cursor = "pointer";
			
			currentPage = pageIndex;
			localStorage.setItem("bh_website_page", currentPage);
		};
	});
	
	//row.insertCell(index++);
	
	cell = row.insertCell(index++);
	//cell.style.width = "80px";
	
	img = document.createElement("img");
	cell.appendChild(img);
	
	img.src = "https://cdn-icons-png.flaticon.com/512/2111/2111370.png"
	style = img.style;
	style.height = "42px";
	style.marginTop = "4px";
}
