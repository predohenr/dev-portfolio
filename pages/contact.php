<section class="contact" id="contact">
    <h2>ENTRE EM CONTATO COMIGO!</h2>
    <div class="contact-form-container">
        <div class="contact-form">
        <form action="https://formspree.io/f/xvgpqkyz" method="POST">
            <div class="form-control">
            <label for="name">Nome</label>
            <input
                type="text"
                id="name"
                name="sender-name"
                placeholder="Coloque seu nome aqui"
                class="input-field"
                required
            />
            </div>
            <div class="form-control">
            <label for="email">E-mail</label>
            <input
                type="email"
                id="email"
                name="sender-email"
                placeholder="Coloque seu e-mail aqui"
                class="input-field"
                required
            />
            </div>
            <div class="form-control">
            <label for="message">Mensagem</label>
            <textarea
                id="message"
                cols="60"
                rows="10"
                placeholder="Escreva sua mensagem aqui"
                name="message"
                class="input-field"
                required
            ></textarea>
            </div>
            <input
            type="submit"
            value="Enviar"
            id="submit-btn"
            class="submit-btn"
            />
        </form>
        </div>
    </div>
</section>
