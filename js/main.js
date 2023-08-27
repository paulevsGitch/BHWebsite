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
		header: "Advanced Trees <span style='color: #ff4216'>(Not Updated, WIP)</span>",
		repo: "https://github.com/paulevsGitch/AdvancedTrees",
		img: "https://github.com/paulevsGitch/AdvancedTrees/raw/main/src/main/resources/assets/advancedtrees/icon.png",
		description: "AdvancedTrees mod for Beta Horizons pack. This mod changes trees behaviour and make them dynamic complex growing structures. It also provides API for custom trees (WIP).",
		dependencies: [BABRIC_DEP, STAPI_DEP, BHCORE_DEP]
	},
	{
		header: "AnnoyanceFix (by Telvarost and 2zqa)",
		repo: "https://github.com/telvarost/AnnoyanceFix-StationAPI",
		img: "https://user-images.githubusercontent.com/25235249/260255281-f6331228-f1df-4e48-b33d-e94b46dcc703.png",
		description: "The aim of this mod is to fix (major) annoyances or backport useful features that do not affect gameplay.",
		dependencies: [BABRIC_DEP, STAPI_DEP]
	},
	{
		header: "Better Nether Beta",
		repo: "https://github.com/paulevsGitch/BetterNetherBeta/tree/stapi-2.0",
		img: "https://github.com/paulevsGitch/BetterNetherBeta/raw/stapi-2.0/src/main/resources/assets/bnb/icon.png",
		description: "This mod inhances vanilla Nether with new plants, mobs, blocks, biomes and terrain generator. It is a not direct port of original BetterNether mod or Minecraft 1.16 biomes into beta, but it can have similar vibes.",
		dependencies: [BABRIC_DEP, STAPI_DEP]
	},
	{
		header: "Better Weather",
		repo: "https://github.com/paulevsGitch/BetterWeather",
		img: "https://github.com/paulevsGitch/BetterWeather/raw/main/src/main/resources/assets/better_weather/icon.png",
		description: "This mod improves Minecraft weather by making clouds volumetric and weather effects local.",
		dependencies: [BABRIC_DEP, STAPI_DEP]
	},
	{
		header: "BH Creative",
		repo: "https://github.com/paulevsGitch/BHCreative",
		img: "https://github.com/paulevsGitch/BHCreative/raw/stapi-2.0/src/main/resources/assets/bhcreative/icon.png",
		description: "Creative mod for Beta Horizons modpack.",
		dependencies: [BABRIC_DEP, STAPI_DEP]
	},
	{
		header: "Graphene <span style='color: #ff4216'>(Not Updated, WIP)</span>",
		repo: "https://github.com/paulevsGitch/Graphene",
		img: "https://github.com/paulevsGitch/Graphene/raw/main/src/main/resources/assets/graphene/icon.png",
		description: "This mod enhances Minecraft graphics in its own way.",
		dependencies: [BABRIC_DEP, STAPI_DEP, BHCORE_DEP]
	},
	{
		header: "Mod Menu (by calmilamsy, edited by VendoAU)",
		repo: "https://github.com/VendoAU/ModMenu",
		img: "https://github.com/VendoAU/ModMenu/raw/b1.7.3/src/main/resources/assets/modmenu/icon.png",
		description: "This mod enriches the standard Minecraft menu with an interface displaying a one-dimensional array of modifications",
		dependencies: [BABRIC_DEP]
	},
	{
		header: "MojangFix (by js6pak)",
		repo: "https://github.com/js6pak/mojangfix",
		img: "https://cdn.modrinth.com/data/8sdj2JBj/6bbcf542d94cd819a0dcb7e93e38aa12ecbd0400.png",
		description: "Minecraft b1.7.3 mod that fixes skins, authentication and more",
		dependencies: [BABRIC_DEP]
	},
	{
		header: "SmoothBeta (by MineDiver)",
		repo: "https://github.com/mineLdiver/smoothbeta",
		img: "https://cdn.discordapp.com/attachments/1128626864974475374/1128626865179992155/icon.png",
		description: "This mod is a collection of tweaks and optimizations that improve b1.7.3 performance",
		dependencies: [BABRIC_DEP, STAPI_DEP]
	},
	{
		header: "Quitbutton (by Byte)",
		repo: "https://glass-repo.net/repo/mod/quitbutton",
		description: "This mod un-hides the Quit Button from Beta 1.7.3's main menu.",
		dependencies: [BABRIC_DEP]
	},
	{
		header: "Station API (by MineDiver and Calmilamsy)",
		repo: "https://github.com/ModificationStation/StationAPI",
		img: "https://cdn.discordapp.com/attachments/1123686228785639535/1123686228986970152/icon.png",
		description: "A general use API for Fabric Loader mods on legacy Minecraft versions.",
		dependencies: [BABRIC_DEP]
	},
	{
		header: "Vanilla Block Enhancements",
		repo: "https://github.com/paulevsGitch/VanillaBlockEnhancements",
		img: "https://github.com/paulevsGitch/VanillaBlockEnhancements/raw/main/src/main/resources/assets/vbe/icon.png",
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

function setPixelated(img) {
	if (img.naturalWidth < img.width) {
		img.style.imageRendering = "pixelated";
	}
}

function makeModList() {
	var html = `
	<div style="text-align: center; color: #ff4216; font-weight: bold;">
		<p>Mod list is in active development, expect to see changes here</p>
	</div>
	<table align="center">
	`;
	
	var index = 0;
	MOD_LIST.forEach(mod => {
		html += `<tr><td width="25%" style="text-align: center;"><div style="width:90%;aspect-ratio:1/1;">`;
		if (mod.img) {
			html += `<img src="` +  mod.img + `" style="width: 100%;height: 100%;object-fit: cover;object-position: 0 0;margin-top:10px;margin-bottom:10px;" onload="setPixelated(this);"/>`
		}
		else {
			html += `<div style="width:100%;height:100%;"><p style="margin:0;position:relative;top:50%;left:50%;transform:translate(-50%,-50%);">NO ICON</p></div">`;
		}
		html += `</div></td>`;
		
		html += `<td style="vertical-align: top;"><p><a href="` + mod.repo + `">` + mod.header + `</a></p>`;
		if (mod.repo.includes("github.com")) {
			html += `<p><a href="` +
			mod.repo.replace("https://github.com/", "https://jitpack.io/#") + `"><img src="` +
			mod.repo.replace("https://github.com/", "https://jitpack.io/v/") + `.svg"></a></p>`;
		}
		html += `<p style="margin-top:10px;margin-bottom:10px;">` + mod.description + `</p>`;
		
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

const FAQ_PAGE = `
	<div style="margin-left: 25px; margin-right: 25px; text-align: justify; ">
		<ul style="line-height: 30px;">
			<li>
				<p><span style="color: #ff4216;font-weight: bold;">What launcher I need to use for this pack?</span></p>
				<p>Pack was origianally made for MultiMC launcher, but you can use it with PolyMC and with Prism since they use same pack format as MultiMC.</p>
			</li>
			<li>
				<p><span style="color: #ff4216;font-weight: bold;">What Java version I need to use?</span></p>
				<p>You need to use <a href="https://jdk.java.net/archive/">Java 17</a>, other Java versions will not work.</p>
			</li>
			<li>
				<p><span style="color: #ff4216;font-weight: bold;">Why I can't launch instance and get "Exception caught from launcher" in my logs?</span></p>
				<p>Looks like you are using Prism launcher which has legacy Minecraft compatibility check, you need disable it and set Java version for your instance to 17.</p>
			</li>
			<li>
				<table width="100%">
					<tr>
						<p><span style="color: #ff4216;font-weight: bold;">Why 3/4 of my Minecraft screen is white space?</span></p>
						<td>
							<p style="margin-top: 8px; margin-bottom: 8px;">This issue is related to DPI scaling, you need to change your java settings:</p>
							<p style="margin-left: 40px; margin-top: 8px; margin-bottom: 8px;">- Right click your java.exe/javaw.exe file and open properties</p>
							<p style="margin-left: 40px; margin-top: 8px; margin-bottom: 8px;">- Navigate to "Compatibility" &#10140; "Change high DPI settings"</p>
							<p style="margin-left: 40px; margin-top: 8px; margin-bottom: 8px;">- "Override high DPI scaling behavior" &#10140; "Scaling performed by:" &#10140; "System"</p>
						</td>
						<td style="text-align: right; width: 35%; vertical-align: middle;">
							<img src="img/scale_layout.png" style="width: 100%;"></img>
						</td>
					</tr>
				</table>
			</li>
			<li>
				<p><span style="color: #ff4216;font-weight: bold;">How do I craft thing X?</span></p>
				<p>At this moment there is no recipe quide in the pack, you can additionally install <a href="https://jenkins.glass-launcher.net/job/HMI-Fabric/36/artifact/build/libs/HMI-Fabric-Unofficial-5.0.12.jar">HMI</a> to see existing recipes. It is planned to add custom recipe viewer mod in the future</p>
			</li>
		</ul>
	</div>
`;

const HEADER_BUTTONS = [
	{ name: "MAIN", html: MAIN_PAGE },
	{ name: "FAQ", html: FAQ_PAGE },
	{ name: "MODS", html: makeModList() },
	{ name: "DOWNLOADS", html: DOWNLOADS_PAGE }
];

var currentPage = parseInt(localStorage.getItem("bh_website_page")) || 0;
if (currentPage < 0 || currentPage >= HEADER_BUTTONS.length) currentPage = 0;

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
