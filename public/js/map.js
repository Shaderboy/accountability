function tooltipHtml(n, d){
	return "<div class='container' id='tooltip-container'><img id='close-tooltip' src='images/close.png'><h4>"+n+"</h4><div class='row'>"+
		"<div class='col-xs-6'><div class='row'><h6>"+(d[0]["First Name"] + " " + d[0]["Last Name"])+"</h6></div><div class='row'><p>"+(d[0]["Muslim Ban"])+"</p></div><div class='row'><p>\""+(d[0]["Statement"])+"\"</p></div><div class='row'><p>"+(d[0]["Local Office Number"])+"</p></div></div>"+
		"<div class='col-xs-6'><div class='row'><h6>"+(d[1]["First Name"] + " " + d[1]["Last Name"])+"</h6></div><div class='row'><p>"+(d[1]["Muslim Ban"])+"</p></div><div class='row'><p>\""+(d[1]["Statement"])+"\"</p></div><div class='row'><p>"+(d[0]["Local Office Number"])+"</p></div></div>"+
		"</div></div>";
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
