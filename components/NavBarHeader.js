class NavBarHeader extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    style(){
        return /*css*/`
        .nav {
            display: flex;
            justify-content: space-between;
            margin: auto;
            align-content: center;
        
        }
        .logo {
            color: #fff;
            font-size: 30px;
        
            text-decoration: none;
        }
        
        .nav-menu {
            display: flex;
            list-style: none;
        
        }

        .toggle {
            border: none;
            background: none;
            cursor: pointer;
            display: none;
        
        }
        
        .toggle .bx-menu-alt-right {
            font-size: 30px;
        }

        .nav-item a {
            display: inline-block;
            color: #fff;
            font-weight: 300;
            text-decoration: none;
            margin-left: 37px;
            font-size: 20px;
            -webkit-transform: perspective(1px) translateZ(0);
            transform: perspective(1px) translateZ(0);
            position: relative;
            overflow: hidden;
        }
        .nav-item a:before {
            content: "";
            position: absolute;
            z-index: -1;
            left: 0;
            right: 100%;
            bottom: 0;
            background: #fff;
            height: 3px;
            -webkit-transition-property: right;
            transition-property: right;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-animation-timing-function: ease-out;
            transition-timing-function: ease-out;
        }
        .nav-menu a:hover:before,
        .header .nav-menu a:focus:before,
        header .nav-menu a:active:before {
            right: 0;
        }

        .toggle {
            border: none;
            background: none;
            color: #fff;
            cursor: pointer;
            display: none;
            font-size: 40px;
        }
        @media (max-width: 768px) {


            .logo {
                font-size: 20px;
                line-height: 60px;
                margin-left: 10px;
            }
        
            .nav-menu {
                display: flex;
                flex-direction: column;
                margin-right: 20px;
                position: fixed;
                background: linear-gradient(63deg, rgba(15, 23, 42, 1) 46%, rgba(14, 10, 85, 1) 100%);
                left: 0;
                top: 95px;
                width: 100%;
                padding: 20px 0;
        
                height: calc(100% - 60px);
                overflow-y: auto;
                left: 100%;
                transition: left 0.3s;
                z-index: 1;
            }
        
            .nav-item {
                line-height: 70px;
                display: block;
        
                width: 100%;
            }
        
            .nav-item a {
                color: #fff;
                font-size: 20px;
            }
        
            .toggle {
                display: block;
                margin-right: 20px;
            }
        
            .nav-menu-visible {
                left: 0;
            }
        }
        
        
        `
    }

    render(){
        /* const nav = ['Hom', 'Sobre My', 'Skills', 'Proyects', 'Contact']; */
        this.shadowRoot.innerHTML = /*html*/`
        <style>${this.style()}</style>
        <nav class="nav">
            <a href="" class="logo p-2">D a n i l o  M a c e a</a>
            <button class="toggle">
                <i class='bx bx-menu-alt-right'></i>
            </button>
            <ul class="nav-menu">
                <li class="nav-item"><a href="#">Home</a></li>
                <li class="nav-item"><a href="#">Sobre My</a></li>
                <li class="nav-item"><a href="#">Skills</a></li>
                <li class="nav-item"><a href="#">Proyects</a></li>
                <li class="nav-item"><a href="#">Contact</a></li>
            </ul>
        </nav>
        `
    }
}

customElements.define('nav-bar-header', NavBarHeader);