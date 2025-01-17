class Controls
{
    constructor(type)
    {
        this.right=false;
        this.left=false;
        this.forward=false;
        this.reverse=false;

        switch (type) {
            case "KEYS":
                // Method call
                // # makes this method private to the class
                this.#addkeyboardListeners();
                break;
            case "DUMMY":
                this.forward=true;
                break;
        }
    }

    #addkeyboardListeners(ctx)
    {
        // On key press bool value changes to true
        // Note: due to arrow function "this" will refer to the obj
        document.onkeydown=(event)=>{
            switch (event.key) {
                case "ArrowLeft":
                    this.left=true;
                    break;
                case "ArrowRight":
                    this.right=true;
                    break;
                case "ArrowUp":
                    this.forward=true;
                    break;
                case "ArrowDown":
                    this.reverse=true;
                    break;
            }
            // Logging values in Table format
            // console.table(this);
        }

        // On key release bool value changes to false
        document.onkeyup=(event)=>{
            switch (event.key) {
                case "ArrowLeft":
                    this.left=false;
                    break;
                case "ArrowRight":
                    this.right=false;
                    break;
                case "ArrowUp":
                    this.forward=false;
                    break;
                case "ArrowDown":
                    this.reverse=false;
                    break;
            }
            // Logging values in Table format
            // console.table(this);
        }
    }
}