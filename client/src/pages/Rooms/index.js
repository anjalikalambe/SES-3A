import React from "react";
import "./style.css";
import Interactable from "./Interactable";

/* TODO / Notes: 
 
- Modularise this code: too much is copy & pasted - should be resuable
- Link each drop item to a user
- Give drop containers and ID 
- Trigger chat window, when containter has 2 users 
- Lock room from UI visually (server has a limit of 2 for a chat room so should be k)
- link to backend ? IDK how
- Manage state on refresh?
- Manage state on login/logout : I assume out of scope
- This Room file has a ton of functionality -> split it all up in different files

*/

function Rooms() {
	const draggableOptions = {
		onmove: (event) => {
		  // console.log(event);
		  const target = event.target;
		  // keep the dragged position in the data-x/data-y attributes
		  const x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
		  const y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;
	
		  // translate the element
		  target.style.webkitTransform = target.style.transform =
			"translate(" + x + "px, " + y + "px)";
	
		  // update the posiion attributes
		  target.setAttribute("data-x", x);
		  target.setAttribute("data-y", y);
		},
	  };
	  return (
		<div className="Container">
		  <div className="DropzoneContainer">
		  <Interactable
			  dropzone={true}
			  dropzoneOptions={{
				accept: ".drag-item",
				overlap: 0.75,
				ondropactivate: function (event) {
				  event.target.classList.add("drop-active");
				},
	
				ondragenter: function (event) {
				  var draggableElement = event.relatedTarget,
					dropzoneElement = event.target;
				  dropzoneElement.classList.add("drop-target");
				  draggableElement.classList.add("can-drop");
				  event.relatedTarget.textContent = "Dragged in";
				  event.relatedTarget.style.backgroundColor = "#a2e665"
				},
	
				ondragleave: function (event) {
				  event.target.classList.remove("drop-target");
				  event.relatedTarget.classList.remove("can-drop");
				  event.relatedTarget.textContent = "Dragged out";
				  event.relatedTarget.style.backgroundColor = "#29e"
				},
	
				ondrop: function (event) {
				  console.log(event);
				  
				},
	
				ondropdeactivate: function (event) {
				  event.target.classList.remove("drop-active");
				  event.target.classList.remove("drop-target");
				},
			  }}
			>
			  <div className="dropzone" id="outer-dropzone">
				<div className="DropzoneContent">
				  
				</div>
			  </div>
			</Interactable>
		
			<Interactable
			  dropzone={true}
			  dropzoneOptions={{
				accept: ".drag-item",
				overlap: 0.75,
				ondropactivate: function (event) {
				  event.target.classList.add("drop-active");
				},
	
				ondragenter: function (event) {
				  var draggableElement = event.relatedTarget,
					dropzoneElement = event.target;
				  dropzoneElement.classList.add("drop-target");
				  draggableElement.classList.add("can-drop");
				  event.relatedTarget.textContent = "Dragged in";
				  event.relatedTarget.style.backgroundColor = "#e665e3"
				},
	
				ondragleave: function (event) {
				  event.target.classList.remove("drop-target");
				  event.relatedTarget.classList.remove("can-drop");
				  event.relatedTarget.textContent = "Dragged out";
				  event.relatedTarget.style.backgroundColor = "#29e"
				},
	
				ondrop: function (event) {
				  console.log(event);
				  
				},
	
				ondropdeactivate: function (event) {
				  event.target.classList.remove("drop-active");
				  event.target.classList.remove("drop-target");
				},
			  }}
			>
			  <div className="dropzone" id="outer-dropzone">
				<div className="DropzoneContent">
				  
				</div>
			  </div>
			</Interactable>
			<Interactable
			  dropzone={true}
			  dropzoneOptions={{
				accept: ".drag-item",
				overlap: 0.75,
				ondropactivate: function (event) {
				  event.target.classList.add("drop-active");
				},
	
				ondragenter: function (event) {
				  var draggableElement = event.relatedTarget,
					dropzoneElement = event.target;
				  dropzoneElement.classList.add("drop-target");
				  draggableElement.classList.add("can-drop");
				  event.relatedTarget.textContent = "Dragged in";
				  event.relatedTarget.style.backgroundColor = "#6965e6"
				},
	
				ondragleave: function (event) {
				  event.target.classList.remove("drop-target");
				  event.relatedTarget.classList.remove("can-drop");
				  event.relatedTarget.textContent = "Dragged out";
				  event.relatedTarget.style.backgroundColor = "#29e";
				},
	
				ondrop: function (event) {
				  console.log(event);
				  
				},
	
				ondropdeactivate: function (event) {
				  event.target.classList.remove("drop-active");
				  event.target.classList.remove("drop-target");
				},
			  }}
			>
			  <div className="dropzone" id="outer-dropzone">
				<div className="DropzoneContent">
				  
				</div>
			  </div>
			</Interactable>
		  </div>
		  <div className="dragItems" >
			<Interactable
			  draggable={true}
			  draggableOptions={draggableOptions}
			>
			  <div className="draggable drag-item" >
				Drag Item
			  </div>
			</Interactable>
			<Interactable
			  draggable={true}
			  draggableOptions={draggableOptions}
			>
			  <div className="draggable drag-item" >
				Drag Item
			  </div>
			</Interactable>
			<Interactable
			  draggable={true}
			  draggableOptions={draggableOptions}
			>
			  <div className="draggable drag-item" >
				Drag Item
			  </div>
			</Interactable>
			<Interactable
			  draggable={true}
			  draggableOptions={draggableOptions}
			>
			  <div className="draggable drag-item" >
				Drag Item
			  </div>
			</Interactable>
		  </div>
		</div>
	  );
};

export default Rooms;