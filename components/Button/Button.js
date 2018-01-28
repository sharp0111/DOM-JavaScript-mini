class Button {
    constructor(element) {
        this.element = element;
        console.log("here's my button element", this.element);

        this.element.addEventListener('mousedown', event => {
            // console.log("this event was fired", event);
            // console.log("this was what the target was", event.target);
            this.element.classList.add('Button--activated');
        });

        this.element.addEventListener('mouseup', () => {
            this.element.classList.remove('Button--activated');
        });

        this.element.addEventListener('mouseout', () => {
            this.element.classList.remove('Button--activated');
        });
    }
}

let allButtons = document.querySelectorAll(".Button");
allButtons = Array.from(allButtons).map(button => {
    return new Button(button);
});
console.log("allButtons", allButtons);