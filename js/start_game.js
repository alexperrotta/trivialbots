// Create drop down menu

class ChooseCategory {
	constructor(dropdown) {
		this.container = $(container);

		this.render();
	}

	render() {
		this.container.html(`
			<div class="dropdown">
			<a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
     		Dropdown link</a>
     		<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
     		<a class="dropdown-item" href="#">Category 1</a>
     		<a class="dropdown-item" href="#">Category 2</a>
     		<a class="dropdown-item" href="#">Category 3</a>
   			</div>
 			</div>
			`); 
	}

}


class StartButton {
	constructor(startButton) {
		this.container = $(container);

		this.render();
	}

	render() {
		this.container.html(`
			<button type="button" class="btn btn-success">Success</button>
			`);
	}
}


// Disabled button: <button type="button" class="btn btn-secondary btn-lg" disabled>Button</button>



