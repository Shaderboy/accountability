function tooltipHtml(n, d){
	return "<h4>"+n+"</h4>"+//<table>"+
		"<div class='container' id='tooltip-container'><div class='row'>"+
		"<div class='col-xs-6'><div class='row'>"+(d[0]["First Name"] + " " + d[0]["Last Name"])+"</div><div class='row'>"+(d[0]["Muslim Ban"])+"</div><div class='row'>\""+(d[0]["Statement"])+"\"</div><div class='row'>"+(d[0]["Local Office Number"])+"</div></div>"+
		"<div class='col-xs-6'><div class='row'>"+(d[1]["First Name"] + " " + d[1]["Last Name"])+"</div><div class='row'>"+(d[1]["Muslim Ban"])+"</div><div class='row'>\""+(d[1]["Statement"])+"\"</div><div class='row'>"+(d[0]["Local Office Number"])+"</div></div>"+
		"</div></div>";
		//"<tr><td>"+(d[0]["First Name"] + " " + d[0]["Last Name"])+"</td></tr><tr><td>"+(d[0]["Muslim Ban"])+"</td><td>"+(d[0]["CIA Director"])+"</td></tr>"+
		//"<tr><td>"+(d[1]["First Name"] + " " + d[1]["Last Name"])+"</td></tr><tr><td>"+(d[1]["Muslim Ban"])+"</td><td>"+(d[1]["CIA Director"])+"</td></tr>"+
		//"</table>";
}

d3.select("div#map-container")
   .append("div")
   .classed("svg-container", true) //container class to make it responsive
   .append("svg")
   //responsive SVG needs these 2 attributes and no width and height attr
   .attr("preserveAspectRatio", "xMinYMin meet")
   .attr("viewBox", "0 0 960 600")
   .attr("id", "statesvg")
   //class to make it responsive
   .classed("svg-content-responsive", true); 

uStates.draw("#statesvg", senators, tooltipHtml);

d3.select(self.frameElement).style("height", "600px");
