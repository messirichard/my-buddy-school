class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="p-5 pref-footer">
            <div class="prelative container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-12">
                        <div class="logo mb-4">
                            <img src="../../assets/img/logo-head.png" alt="logo" height="35">
                        </div>
                        <p class="about-us mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae facilisi consequat donec turpis aliquam at. Egestas arcu ut.</p>
                        <ul class="social-media d-flex align-items-center p-0">
                            <li class="item">
                                <a href="#" class="link p-2 d-inline-block"><i class="fab fa-youtube"></i></a>
                            </li>
                            <li class="item ml-2">
                                <a href="#" class="link p-2 d-inline-block"><i class="fab fa-facebook-square"></i></a>
                            </li>
                            <li class="item ml-2">
                                <a href="#" class="link p-2 d-inline-block"><i class="fab fa-twitter"></i></a>
                            </li>
                            <li class="item ml-2">
                                <a href="#" class="link p-2 d-inline-block"><i class="fab fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-2 col-12 mt-3">
                        <ul class="footer-link p-0">
                            <li class="item text-bold">My Buddy School</li>
                            <li class="item"><a href="">About Us</a></li>
                            <li class="item"><a href="">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-2 col-12 mt-3">
                        <ul class="footer-link p-0">
                            <li class="item text-bold">Menu</li>
                            <li class="item"><a href="">Dashboard</a></li>
                            <li class="item"><a href="">Course</a></li>
                            <li class="item"><a href="">My Course</a></li>
                            <li class="item"><a href="">Inbox</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-2 col-12 mt-3">
                        <ul class="footer-link p-0">
                            <li class="item text-bold">For users</li>
                            <li class="item"><a href="">Login</a></li>
                            <li class="item"><a href="">Register</a></li>
                            <li class="item"><a href="">Account</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <footer class="footer py-2">
            <p class="text-white text-center m-0">© 2020 My Buddy School.</p>
        </footer>
    `;
    }
}
      
customElements.define('footer-component', Footer);