var FarmSearch;
(function (FarmSearch_1) {
    window.onload = function () {
        var farmSearch = new FarmSearch();
        var inputField = document.getElementById("inputField");
        inputField.value = "";
        inputField.focus();
        farmSearch.init("inputField", "searchButton", "body");
    };
    var FarmSearch = (function () {
        function FarmSearch() {
            var _this = this;
            this.cowPasture = "/Images/kor-majorns-hage.JPG";
            this.otefield = "/Images/staket-i-hage.jpg";
            this.cat = "/Images/cat.jpg";
            this.farm = "/Images/farm.jpg";
            this.farmer = "/Images/farmer.jpg";
            this.hay = "/Images/hay.jpg";
            this.horse = "/Images/horse.jpg";
            this.tractor = "/Images/john-deere-traktor.jpg";
            this.pig = "/Images/pig.jpg";
            this.tilde = "/Images/Tilde.jpg";
            this.imageElement = document.getElementById("image");
            this.getImageOnEnter = function (event) {
                var e = event;
                if (e.key === "Enter") {
                    _this.getImage();
                }
            };
            this.getImage = function () {
                var inputElement = document.getElementById("inputField");
                var searchPhrase = inputElement.value;
                if (searchPhrase.toLowerCase() === "ko")
                    _this.imageElement.src = _this.cowPasture;
                if (searchPhrase.toLowerCase() === "hage")
                    _this.imageElement.src = _this.otefield;
                if (searchPhrase.toLowerCase() === "katt")
                    _this.imageElement.src = _this.cat;
                if (searchPhrase.toLowerCase() === "farm")
                    _this.imageElement.src = _this.farm;
                if (searchPhrase.toLowerCase() === "bonde")
                    _this.imageElement.src = _this.farmer;
                if (searchPhrase.toLowerCase() === "hö")
                    _this.imageElement.src = _this.hay;
                if (searchPhrase.toLowerCase() === "traktor")
                    _this.imageElement.src = _this.tractor;
                if (searchPhrase.toLowerCase() === "gris")
                    _this.imageElement.src = _this.pig;
                if (searchPhrase.toLowerCase() === "häst")
                    _this.imageElement.src = _this.horse;
                if (searchPhrase.toLowerCase() === "tilde")
                    _this.imageElement.src = _this.tilde;
                inputElement.value = "";
            };
        }
        FarmSearch.prototype.init = function (inputField, searchButton, body) {
            document.getElementById(inputField).addEventListener("keydown", this.getImageOnEnter, false);
            document.getElementById(searchButton).addEventListener("click", this.getImage, false);
            //document.getElementById(body).addEventListener("keydown", this.getImageOnEnter, false);
            window.addEventListener("keydown", this.getImageOnEnter, false);
        };
        return FarmSearch;
    }());
})(FarmSearch || (FarmSearch = {}));
//# sourceMappingURL=Script.js.map