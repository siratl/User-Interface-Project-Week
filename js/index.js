// JS goes here
class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.contentElement = document.querySelector(`.tab-content[data-tab="${this.data}"]`);
        this.tabContent = new TabContent(this.contentElement);
        this.element.addEventListener("click", () => {this.select()});
    }

    select () {
        const tabLinks = document.querySelectorAll(".tab-link").forEach( link => link.classList.remove("tab-link-selected"));
        this.element.classList.add("tab-link-selected");
        this.tabContent.select();
    }
}

class TabContent {
    constructor(element) {
        this.element = element;
    }

    select() {
        const tabContents = document.querySelectorAll(".tab-content").forEach( item => item.classList.remove("tab-content-selected"));
        this.element.classList.add("tab-content-selected");
    }
}

class NavDrop {
    constructor(element) {
        this.element = element;
        this.menu = document.querySelector(".menu");
        this.navOpenBtn = document.querySelector(".hamburger-open");
        this.navCloseBtn = document.querySelector(".hamburger-close");
        this.content = document.querySelector(".nav-content");
        this.element.addEventListener("click", () => {this.select()})
    }

    select() {
        // this.content.classList.toggle("nav-hidden");
        if (this.content.classList.contains("nav-shown")) {
            this.content.classList.remove("nav-shown");
            TweenMax.to(content, 1, {
                top: 0,
                opacity: 0.97,
            })
            
            this.navCloseBtn.classList.remove("hamburger-hidden");
            this.navOpenBtn.classList.add("hamburger-hidden");

        } else {
            TweenMax.to(content, 5, {
                top: -1550,
                opacity: 0,
            })

            this.navOpenBtn.classList.remove("hamburger-hidden");
            this.navCloseBtn.classList.add("hamburger-hidden");
            this.content.classList.add("nav-shown");
        }
        
    }
}



const tabLinks = document.querySelectorAll(".tab-link").forEach(link => new TabLink(link));

const content = document.querySelector(".nav-shown");
const navOpenBtn = document.querySelectorAll(".hamburger-open");
navOpenBtn.forEach(element => new NavDrop(element));

const navCloseBtn = document.querySelectorAll(".hamburger-close").forEach(element => new NavDrop(element));

