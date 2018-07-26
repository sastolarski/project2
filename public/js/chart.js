// function getData(exerciseId, userId, exerciseName) {
//   $.get("/chart/", +exerciseId + "/" + userId, function(data) {
//     console.log(data);
//   });
// }
// createChart() {
// 	var chart= new CanvasJS.Chart("chartContainer", {
// 	      axisX: {
// 	        lineThickness: 2
// 	      },

// 	      data: [
// 	      {
// 	       type: "line",

// 	       dataPoints: [

// 	       { x: new Date(2008,02), y: 15.00 },
// 	       { x: new Date(2008,03), y: 14.50 },
// 	       { x: new Date(2008,04), y: 14.00 },
// 	       { x: new Date(2008,05), y: 14.50 },
// 	       { x: new Date(2008,06), y: 14.75 },
// 	       { x: new Date(2008,07), y: 16.30 },
// 	       { x: new Date(2008,08), y: 15.80 },
// 	       { x: new Date(2008,09), y: 17.50 }
// 	       ]
// 	     },
// 	     {
// 	       type: "line",
// 	       dataPoints: [

// 	       { x: new Date(2008,02), y: 41.00 },
// 	       { x: new Date(2008,03), y: 42.50 },
// 	       { x: new Date(2008,04), y: 41.00 },
// 	       { x: new Date(2008,05), y: 45.30 },
// 	       { x: new Date(2008,06), y: 47.55 },
// 	       { x: new Date(2008,07), y: 45.00 },
// 	       { x: new Date(2008,08), y: 40.70 },
// 	       { x: new Date(2008,09), y: 37.00 }

// 	       ]
// 	     }
// 	     ]
// 	   });
// 	chart.render();
// 	renderChart();
// };

// function renderChart(exerciseId, userId, exerciseName) {
//   $("#label").html(exerciseName);
//   $("#chartContainer").attr("style", "");
// }

// $(document).ready(function() {
//   $("html").on("click", ".exercise", function(event) {
//     event.preventDefault();
//     getData(
//       $(this).data("exerciseid"),
//       $(this).data("userid"),
//       $(this).data("exercisename")
//     );
//   });
// });
