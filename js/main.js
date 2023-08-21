const MAIN_PAGE = `
	<div style="text-align: center; color: #ff4216; font-weight: bold;">
		<p>The Project is in Alpha stage!<br>Most modules are not complete and existing ones can contain bugs!</p>
	</div>
	<div style="margin-left: 25px; margin-right: 25px; text-align: justify; text-indent: 40px;">
		<p><b><span style="color: #5271c8;">Beta</span> <span style="color: #f8862d;">Horizons</span></b> is a modular long-term projects that represents "my game vision" of Minecraft Beta 1.7.3.</p>
		<p>
			The project is based on <a href="https://github.com/babric">Babric</a> (beta Fabric) and <a href="https://github.com/ModificationStation/StationAPI">StAPI</a> (Station API).
			Both tools introduces modern code practices, flexibility and usage of modern <a href="https://jdk.java.net/archive/">Java 17</a>.
			Unlike many old and legacy mods all patches to Minecraft code are compatible with each other - instead of base edits tools use <a href="https://fabricmc.net/wiki/tutorial:mixin_introduction">mixins</a>.
		</p>
		<p>
			All project parts are logical modules that can be enabled or disabled depending on player needs (which provides a good customisation for players).
			Most modules also have configs and options, so it is possible to customize modules individually.
		</p>
	</div>
	<img style="width: 100%;" src="img/main_screenshot.png">
`;

const BABRIC_DEP = "<a href='https://github.com/babric/prism-instance'>Babric Instance (MultiMC/PolyMC/Prism)</a>";
const STAPI_DEP = "<a href='https://jenkins.glass-launcher.net/job/StationAPI'>StationAPI</a>";
const BHCORE_DEP = "BHCore (deprecated)";

const MOD_LIST = [
	{
		header: "Advanced Trees <span style='color: #ff4216'>(Not Updated, WIP)",
		repoName: "AdvancedTrees",
		img: "raw/main/src/main/resources/assets/advancedtrees/icon.png",
		description: "AdvancedTrees mod for Beta Horizons pack. This mod changes trees behaviour and make them dynamic complex growing structures. It also provides API for custom trees (WIP).",
		dependencies: [BABRIC_DEP, STAPI_DEP, BHCORE_DEP]
	},
	{
		header: "Better Weather",
		repoName: "BetterWeather",
		img: "raw/main/src/main/resources/assets/better_weather/icon.png",
		description: "This mod improves Minecraft weather by making clouds volumetric and weather effects local.",
		dependencies: [BABRIC_DEP, STAPI_DEP]
	},
	{
		header: "BH Creative",
		repoName: "BHCreative",
		img: "raw/stapi-2.0/src/main/resources/assets/bhcreative/icon.png",
		description: "Creative mod for Beta Horizons modpack.",
		dependencies: [BABRIC_DEP, STAPI_DEP]
	},
	{
		header: "Graphene",
		repoName: "Graphene",
		img: "raw/main/src/main/resources/assets/graphene/icon.png",
		description: "This mod enhances Minecraft graphics in its own way.",
		dependencies: [BABRIC_DEP, STAPI_DEP, BHCORE_DEP]
	},
	{
		header: "Vanilla Block Enhancements",
		repoName: "VanillaBlockEnhancements",
		img: "raw/main/src/main/resources/assets/vbe/icon.png",
		description: "This mod changes behaviour for several vanilla blocks (like stairs and slabs) and fixes several bugs related to them.",
		dependencies: [BABRIC_DEP, STAPI_DEP]
	}
]

const DOWNLOADS_PAGE = `
	<div style="margin-left: 25px; margin-right: 25px; text-align: justify; ">
		<p>Each download contains complete MultiMC/PolyMC/Prism instance, you can import it as usual and use.</p>
			<p>Make sure that you are using <a href="https://jdk.java.net/archive/">Java 17</a>,
			some launchers (PolyMC/Prism) have check for legacy versions that prevents usage of modern Java. Make sure that you disabled all checks.
		</p>
		<ul style="line-height: 30px;">
			<li><a href="https://disk.yandex.ru/d/nfDFCWkQt_b_Sg">Alpha 0.0.4</a></li>
			<li><a href="https://disk.yandex.ru/d/Wmq0MXRC0Fh2Og">Alpha 0.0.3</a></li>
			<li><a href="https://disk.yandex.ru/d/1K5a2ibsL_lDrQ">Alpha 0.0.2</a></li>
			<li><a href="https://www.dropbox.com/s/vdq325iur78tal4/BHTests.zip?dl=0">Alpha 0.0.1</a></li>
		</ul>
	</div>
`;

function makeDownloads() {
	var html = `
	<div style="text-align: center; color: #ff4216; font-weight: bold;">
		<p>Mod list is in active development, expect to see changes here</p>
	</div>
	<table align="center">
	`;
	
	var index = 0;
	MOD_LIST.forEach(mod => {
		html += `<td width="30%" style="text-align: center;"><img src="https://github.com/paulevsGitch/` + mod.repoName + "/" + mod.img + `" style="width: 90%;"/></td>`;
		html += `
			<td style="vertical-align: top;">
			<p><a href="https://github.com/paulevsGitch/` + mod.repoName + `">` + mod.header + `</a></p>
			<p><a href="https://jitpack.io/#paulevsGitch/` + mod.repoName + `"><img src="https://jitpack.io/v/paulevsGitch/` + mod.repoName + `.svg"></a></p>
			<p>` + mod.description + `</p>
		`;
		
		var addDep = mod.dependencies !== undefined;
		
		if (addDep) {
			html += "<p>";
		}
		
		if (mod.dependencies) {
			html += "<b>Dependencies:</b><ul>";
			mod.dependencies.forEach(dep => {
				html += "<li>" + dep + "</li>";
			});
			html += "</ul>";
		}
		
		if (addDep) {
			html += "</p>";
		}
		
		html += `</td></tr>`;
		
		if (++index < MOD_LIST.length) {
			html += `<tr style="height: 4px; background-color: #333333;"><td colspan="2"></td></tr>`;
		}
	});
	
	return html;
}

const HEADER_BUTTONS = [
	{ name: "MAIN", html: MAIN_PAGE },
	{ name: "MODS", html: makeDownloads() },
	{ name: "DOWNLOADS", html: DOWNLOADS_PAGE }
];

var currentPage = parseInt(localStorage.getItem("bh_website_page")) || 0;

function init() {
	var table = document.createElement("table");
	document.body.appendChild(table);
	
	table.style.position = "absolute";
	table.style.top = "10px";
	table.style.left = "20%";
	table.style.width = "60%";
	table.style.textAlign = "center";
	table.style.fontSize = "18px";
	table.style.borderCollapse = "collapse";
	table.style.border = "0px";
	table.style.backgroundColor = "#181818";
	
	var index = 0;
	
	var cell = table.insertRow(index++).insertCell(0);
	var img = document.createElement("img");
	img.src = "img/bh_logo_horizontal.png"
	img.style.height = "42px";
	
	cell.appendChild(img);
	cell.colSpan = HEADER_BUTTONS.length + 1;
	cell.style.height = "60px";
	
	const row = table.insertRow(index++);
	row.style.height = "40px";
	row.style.lineHeight = "0px";
	row.style.fontWeight = "bold";
	
	var cell = table.insertRow(index++).insertCell(0);
	cell.colSpan = HEADER_BUTTONS.length + 1;
	cell.style.backgroundColor = "#0c0c0c";
	
	const contentDiv = document.createElement("div");
	contentDiv.innerHTML = HEADER_BUTTONS[currentPage].html;
	contentDiv.style.textAlign = "left";
	cell.appendChild(contentDiv);
	
	index = 0;
	
	HEADER_BUTTONS.forEach(entry => {
		var cellIndex = index++;
		cell = row.insertCell(cellIndex);
		cell.innerHTML = entry.name;
		cell.style.width = "170px";
		
		if (currentPage == cellIndex) {
			cell.style.backgroundImage = "linear-gradient(to top, #f25421, #ffb537)";
		}
		else {
			cell.style.backgroundColor = "#333333";
			cell.style.cursor = "pointer";
		}
		
		cell.onclick = () => {
			if (currentPage == cellIndex) return;
			contentDiv.innerHTML = HEADER_BUTTONS[cellIndex].html;
			
			var activeCell = row.cells[cellIndex];
			activeCell.style.backgroundImage = "linear-gradient(to top, #f25421, #ffb537)";
			activeCell.style.cursor = null;
			
			activeCell = row.cells[currentPage];
			activeCell.style.backgroundImage = null;
			activeCell.style.backgroundColor = "#333333";
			activeCell.style.cursor = "pointer";
			
			currentPage = cellIndex;
			localStorage.setItem("bh_website_page", currentPage);
		};
	});
	
	cell = row.insertCell(index++);
	cell.style.textAlign = "right";
	
	img = document.createElement("img");
	cell.appendChild(img);
	
	img.src = "https://cdn-icons-png.flaticon.com/512/2111/2111370.png";
	img.style.height = "30px";
	img.style.marginRight = "10px";
}
