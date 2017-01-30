function tooltipHtml(n, d){
	return "<h4>"+n+"</h4>"+//<table>"+
		"<div class='container' id='tooltip-container'><div class='row'>"+
		"<div class='col-xs-6'><div class='row'>"+(d[0]["First Name"] + " " + d[0]["Last Name"])+"</div><div class='row'>"+(d[0]["Muslim Ban"])+"</div><div class='row'>"+(d[0]["CIA Director"])+"</div></div>"+
		"<div class='col-xs-6'><div class='row'>"+(d[1]["First Name"] + " " + d[1]["Last Name"])+"</div><div class='row'>"+(d[1]["Muslim Ban"])+"</div><div class='row'>"+(d[1]["CIA Director"])+"</div></div>"+
		"</div></div>";
		//"<tr><td>"+(d[0]["First Name"] + " " + d[0]["Last Name"])+"</td></tr><tr><td>"+(d[0]["Muslim Ban"])+"</td><td>"+(d[0]["CIA Director"])+"</td></tr>"+
		//"<tr><td>"+(d[1]["First Name"] + " " + d[1]["Last Name"])+"</td></tr><tr><td>"+(d[1]["Muslim Ban"])+"</td><td>"+(d[1]["CIA Director"])+"</td></tr>"+
		//"</table>";
}

uStates.draw("#statesvg", senators, tooltipHtml);

d3.select(self.frameElement).style("height", "600px");
