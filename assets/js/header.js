class HeaderAfter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="drawer drawer-left slide" tabindex="-1" role="dialog" aria-labelledby="drawer-1-title" aria-hidden="true" id="drawer-1">
            <div class="drawer-content drawer-content-scrollable" role="document">
                <div class="drawer-header">
                    <h4 class="drawer-title" id="drawer-1-title">
                        <img src="../../assets/img/logo-head.png" alt="logo" height="25">
                    </h4>
                </div>
                <div class="drawer-body">
                    <form class="form-inline my-2 my-lg-0 search-form">
                        <div class="input-group w-100">
                            <input type="text" class="form-control input-search" placeholder="reading" name="key">
                            <div class="input-group-append">
                                <button class="btn-search">
                                    <img src="../../assets/img/search.png" alt="">
                                </button>
                            </div>
                        </div>
                    </form>

                    <ul class="navbar-nav border-top mt-2">
                        <li class="nav-item">
                            <a href="#" class="nav-link text-primary pt-2 pb-2"><i class="fas fa-tachometer-alt"></i> Dashboard</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link text-primary pt-2 pb-2"><i class="fas fa-book-open"></i> Course</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link text-primary pt-2 pb-2"><i class="fas fa-user-graduate"></i> My Course</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link text-primary pt-2 pb-2"><i class="fas fa-user"></i> Profile</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link text-primary pt-2 pb-2"><i class="fas fa-comment-alt"></i> Message</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link text-primary pt-2 pb-2"><i class="fas fa-sign-out-alt"></i> Logout</a>
                        </li>
                    </ul>
                </div>
                <div class="drawer-footer">
                    <div class="profile d-flex flex-row align-items-first">
                        <div class="img-profile">
                            <img src="../../assets/img/profile.jpg" alt="profile" class="img-fit rounded">
                        </div>
                        <div class="detail ml-1">
                            <p class="text-bold">Hi, Bambang</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <nav class="navbar navbar-expand-lg navbar-light bg-light m-navbar">
            <div class="container headerss">
                <a class="navbar-brand" href="#">
                    <img src="../../assets/img/logo-head.png" alt="logo">
                </a>
                <button class="navbar-toggler" data-toggle="drawer" data-target="#drawer-1">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="d-flex flex-row align-items-center justiy-content-between w-100">
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a href="#" class="nav-link text-black d-flex align-items-center">Dashboard</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link text-black d-flex align-items-center">Course</a>
                            </li>
                        </ul>

                        <form class="form-inline my-2 my-lg-0 search-form">
                            <div class="input-group w-100">
                                <input type="text" class="form-control input-search" placeholder="reading" name="key">
                                <div class="input-group-append">
                                    <button class="btn-search">
                                        <img src="../../assets/img/search.png" alt="">
                                    </button>
                                </div>
                            </div>
                        </form>

                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item d-flex align-items-center">
                                <a href="#" class="nav-link text-black">My Course</a>
                            </li>
                            <li class="nav-item d-flex align-items-center">
                                <a href="#" class="nav-link">
                                    <img src="../../assets/img/mail.png" alt="mail">
                                    <span class="badge badge-pill badge-warning text-white badge-mail">1</span>
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a href="#" class="nav-link d-flex flex-row align-items-center dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <p class="m-0 text-black">Hi, Derry</p>
                                    <img src="../../assets/img/profile.jpg" alt="profile" class="img-fit ml-1 rounded-circle">
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Profile</a>
                                    <a class="dropdown-item" href="#">My Course</a>
                                    <a class="dropdown-item" href="#">Message</a>
                                    <a class="dropdown-item text-danger" href="#">Logout</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    `;
    }
}
class HeaderBefore extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light m-navbar">
        <div class="container headerss">
            <a class="navbar-brand" href="#">
                <img src="../../assets/img/logo-head.png" alt="logo">
            </a>
            <ul class="navbar-nav ml-auto d-flex flex-row">
                <li class="nav-item d-flex align-items-center mr-1">
                    <a href="#" class="nav-link btn btn-signin text-white">SIGN IN</a>
                </li>
                <li class="nav-item d-flex align-items-center">
                    <a href="#" class="nav-link btn btn-signup">SIGN UP</a>
                </li>
            </ul>
        </div>
    </nav>    
    `;
    }
}
class HeaderCourse extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="heads-covers">
        <nav class="navbar navbar-expand-lg navbar-light bg-light m-navbar">
            <div class="container headerss">
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    All Course <i class="far fa-chevron-down"></i>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">All Course <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Primary School (SD)</a>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Junior High School (SMP)</a>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Senior High School (SMA)</a>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Higher School (PT)</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Other</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>   
    `;
    }
}
      
customElements.define('header-after', HeaderAfter);
customElements.define('header-course', HeaderCourse);
customElements.define('header-before', HeaderBefore);