const foo = document.getElementById("footer");
// codigo(HTML) de footer
foo.innerHTML = `
<div class="footer-info">
    <div class="contact-info">
        <h3>Contacto</h3>
        <p><strong>Teléfono:</strong>  (+506) 2298-6000</p>
        <p><strong>Dirección:</strong> Componentes Intel de Costa Rica Calle 129 La Ribera de Belen Heredia, Costa Rica</p>
        <p>© 2023 Intel Costa Rica. Todos los derechos reservados.</p>
    </div>
    <div class="social-media">
    <h3>Redes Sociales</h3>
        <div class="social-icons">
            <a href="#"><img src="../assets/img/Logo_de_Facebook.png" alt="Facebook"></a>
            <a href="#"><img src="../assets/img/twitter-icon-free-png.webp" alt="Twitter"></a>
            <a href="#"><img src="../assets/img/instagram-icon.png" alt="Instagram"></a>
        </div>
    </div>
    
</div>

`;
