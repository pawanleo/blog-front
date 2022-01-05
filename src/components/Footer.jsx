import React from 'react'
import "../css/Footer.css"
const Footer = () => {
    return (

        <div class="footer container-fluid bg-light ">

            <div class=" container justify-content-around pt-3 d-flex">
                <div>
                    <p>Copyright &#169;2022 All rights reserved | This template is made with 💖 by <span
                        style={{ 'font-weight': 'bold', 'cursor': 'pointer', 'color': '#fb1239' }}>
                        ShanuTech
                    </span>
                    </p>
                </div>
                <div>


                    <a title="twitter" href="https://twitter.com/ShaikhS78196343" target="_blank"><i
                        class="fab fa-twitter i-color "></i></a>
                    <a title="facebook" href="https://www.facebook.com/profile.php?id=100030898398832" target="_blank"><i
                        class="fab fa-facebook i-color mx-3"></i></a>

                    <a title="instagram" href="https://www.instagram.com/__shah_nawaz__/" target="_blank"><i
                        class="fab fa-instagram i-color "></i></a>

                    <a title="linkedIn" href="https://www.linkedin.com/in/shaikh-mohammed-shahnawaz-9149601b5/" target="_blank"><i
                        class="fab fa-linkedin i- mx-3 "></i></a>

                    <a title="github" href="https://github.com/Shaikh-Shahnawaz" target="_blank"><i
                        class="fab fa-github i-color "></i></a>

                    <a title="stackoverflow" href="https://stackoverflow.com/users/14162052/shaikh-shahnawaz"
                        target="_blank"><i class="fab fa-stack-overflow i-color ms-3 "></i></a>
                </div>
            </div>

        </div >

    )
}

export default Footer
