FeedContents.subViews.forEach(function(item) {
	item.on("click", function() {
		Overlay.fadeIn();
		springDown(EditModal, 20);
	});
});

Overlay.on("click", function() {
	Overlay.fadeOut();
});

springDown = function(view, delay) {
	view.y = view.y - 100;
	view.opacity = 0;

	view.animate({
		properties: {
			y: view.originalFrame.y,
			opacity: 1
		},
		curve: "spring(400,20,500)",
		delay: delay
	});
}

popUp = function(view, delay) {
	view.y = view.y + 100;
	view.opacity = 0;

	view.animate({
		properties: {
			y: view.originalFrame.y,
			opacity: 1
		},
		curve: "spring(400,20,500)",
		delay: delay
	});
}

bounceOnClick = function(view) {
	if (view instanceof View) {
		view.on("click", function(event) {
			event.stopPropagation()
			view.scale = 0.7
			view.animate({
				properties:{scale:1.0},
				curve: "spring(1000,15,500)"
			});
		})
	}
}

bounceOnClick(PSD.FrankPhoto);
bounceOnClick(PSD.DiagramPhoto);
