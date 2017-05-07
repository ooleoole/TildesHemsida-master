namespace FarmSearch {
    window.onload = () => {
        var farmSearch = new FarmSearch();
        var inputField = document.getElementById("inputField") as HTMLInputElement;
        inputField.value = "";
        inputField.focus();
        farmSearch.init("inputField", "searchButton", "body");
    };


    class FarmSearch {
        cowPasture: string = "/Images/kor-majorns-hage.JPG";
        otefield: string = "/Images/staket-i-hage.jpg";
        cat: string = "/Images/cat.jpg";
        farm: string = "/Images/farm.jpg";
        farmer: string = "/Images/farmer.jpg";
        hay: string = "/Images/hay.jpg";
        horse: string = "/Images/horse.jpg";
        tractor: string = "/Images/john-deere-traktor.jpg";
        pig: string = "/Images/pig.jpg";
        tilde: string = "/Images/Tilde.jpg";
        imageElement: HTMLImageElement = document.getElementById("image") as HTMLImageElement;

        public init(inputField: string, searchButton: string, body: string): void {
            document.getElementById(inputField).addEventListener("keydown", this.getImageOnEnter, false);
            document.getElementById(searchButton).addEventListener("click", this.getImage, false);
            document.getElementById(body).addEventListener("keydown", this.getImageOnEnter, false);
        }

        public getImageOnEnter = (event: Event) => {
            var e = event as KeyboardEvent;
            if (e.key === "Enter") {
                this.getImage();
            }
        }

        public getImage = () => {
            var inputElement = document.getElementById("inputField") as HTMLInputElement;
            var searchPhrase = inputElement.value;

            if (searchPhrase.toLowerCase() === "ko")
                this.imageElement.src = this.cowPasture;
            if (searchPhrase.toLowerCase() === "hage")
                this.imageElement.src = this.otefield;
            if (searchPhrase.toLowerCase() === "katt")
                this.imageElement.src = this.cat;
            if (searchPhrase.toLowerCase() === "farm")
                this.imageElement.src = this.farm;
            if (searchPhrase.toLowerCase() === "bonde")
                this.imageElement.src = this.farmer;
            if (searchPhrase.toLowerCase() === "hö")
                this.imageElement.src = this.hay;
            if (searchPhrase.toLowerCase() === "traktor")
                this.imageElement.src = this.tractor;
            if (searchPhrase.toLowerCase() === "gris")
                this.imageElement.src = this.pig;
            if (searchPhrase.toLowerCase() === "häst")
                this.imageElement.src = this.horse;
            if (searchPhrase.toLowerCase() === "tilde")
                this.imageElement.src = this.tilde;


            inputElement.value = "";
        }
    }
}