class App {
    constructor() {

        let list = document.querySelectorAll(".canvas-list .box");

        this.cardList = [];

        list.forEach(x => {
            let p = x.dataset.percent;
            let c = x.querySelector("canvas");
            this.cardList.push(new Card(c, p));
        });

        this.isDrawed = false;
        this.p = document.querySelector(".skill");
        window.addEventListener("scroll", this.scrollHandle.bind(this));

        this.visualSection = document.querySelector(".visual");
        window.addEventListener("resize", this.resizeHandle.bind(this));
        this.resizeHandle();

        this.navList = document.querySelectorAll(".nav-container nav ul li");
        this.navList.forEach(x => {
            x.addEventListener("click", this.navScrollHandle.bind(this));
        });

        this.hello = document.querySelector(".hello p");
        this.hello.addEventListener("click", this.sweetAlert.bind(this));

        this.goto = document.querySelector(".goto-top");
        $(this.goto).stop().on("click", this.gotoHeadHandle.bind(this));
        
        window.addEventListener("scroll", this.gotoHead.bind(this));

    }

    gotoHeadHandle(e) {
        $("html, body").animate({
            scrollTop : 0
        }, 700);
    }

    gotoHead(e) {
        
        let scroll = $(document).scrollTop();
        
        if(scroll > 80) {
            $(this.goto).stop().addClass("active");
        } else {
            $(this.goto).stop().removeClass("active");
        }

    }

    sweetAlert(e) {
        swal({
            title: "반가워요!",
            text: "overnice2020@gmail.com",
            icon: "success",
            button: "닫기",
          });
    }

    navScrollHandle(e) {
        let target = e.target.dataset.target;

        if(target == null) {
            return;
        }

        let top = document.querySelector("." + target);

        $("html, body").stop().animate({
            scrollTop : top.offsetTop - 50
        }, 700);
        
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
