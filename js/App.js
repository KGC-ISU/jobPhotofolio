class App {
    constructor() {

        let list = document.querySelectorAll(".canvas-list .box");

        console.log(list);

        this.cardList = [];

        list.forEach(x => {
            let p = x.dataset.percent;
            let c = x.querySelector("canvas");
            this.cardList.push(new Card(c, p));
        });

        this.isDrawed = false;
        this.p = document.querySelector(".skill");
        console.log(this.p.offsetTop);
        window.addEventListener("scroll", this.scrollHandle.bind(this));

        this.visualSection = document.querySelector(".visual");
        window.addEventListener("resize", this.resizeHandle.bind(this));
        this.resizeHandle();

        this.navList = document.querySelectorAll(".nav-container nav ul li");
        this.navList.forEach(x => {
            x.addEventListener("click", this.navScrollHandle.bind(this));
        });

        this.intro = document.querySelector(".intro-info");
        this.skill = document.querySelector(".skill-info");
    }

    navScrollHandle(e) {
        document.getElementsByClassName("intro-info").scrollIntoView();
    }

    resizeHandle(e){
        let height = window.innerHeight - 80;
        this.visualSection.style.height = height + 'px';
    }

    scrollHandle(e) {
        if (window.scrollY + window.innerHeight >= this.p.offsetTop + 100 && !this.isDrawed) {
            this.draw();
            this.isDrawed = true;
        }
    }

    draw() {
        this.cardList.forEach(x => x.start());
    }

}

window.onload = function () {
    let app = new App();
}

function dunfa() {
    window.open("https://github.com/KGC-ISU/dunfanet");
}

function copySite() {
    window.open("http://www.gmsgondr.net/exhibition/1/kjm/index.html");
}

function git() {
    window.open("https://github.com/KGC-ISU");
}
