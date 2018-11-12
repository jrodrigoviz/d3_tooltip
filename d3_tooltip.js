function showToolTip(d,y_offset=10,x_offset=5)
  {
  if (this.tooltipNode != undefined) {
    this.tooltipNode.remove()
  };


  this.tooltipNode = this.plot.append("g");

  //check length of text
  this.tooltipNode.append("text")
    .attr("id","tooltiptext")
    .attr("opacity",1)
    .text(d.x + " | " + d.y);


  var text_width = d3.select("#tooltiptext").node().getComputedTextLength()+15;

  this.tooltipNode
    .attr("transform", "translate(" +(this.xScale(d.x) + x_offset - Math.max(this.xScale(d.x) +x_offset+text_width-this.width+this.padding,0))
    + "," + ((this.yScale(d.y)-y_offset) + Math.max(-4*((this.yScale(d.y)-y_offset)),0)) + ")")
    .style("opacity", 0);

  console.log(Math.max(-(this.yScale(d.y)-y_offset),0));

  this.tooltipNode.append("rect")
    .attr("id","rext")
    .attr("width",text_width)
    .attr("height", "1.6em")
    .attr("y", "-1.25em")
    .attr("fill", "lightgray")
    .attr("rx", 4)
    .style("pointer-events", "auto");

  this.tooltipNode.append("text")
      .attr("x", "0.5em")
      .style("opacity",0.9)
      .style("background", "lightgray")
      .text(d.x + " | " + d.y );

  this.tooltipNode
    .transition().duration(200)
    .style("opacity", 1);

};

function hideToolTip(d){
  var that = this;
  that.tooltipNode.remove();
};
