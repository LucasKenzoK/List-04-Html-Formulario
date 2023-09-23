const formulario = document.getElementById('formulario-inscricao');

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

   
    const camposObrigatorios = formulario.querySelectorAll('[required]');
    let todosPreenchidos = true;

    camposObrigatorios.forEach((campo) => {
        if (!campo.value) {
            todosPreenchidos = false;
        }
    });

    if (todosPreenchidos) {
        const formData = new FormData(formulario);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            const response = await fetch('https://650ddbcca8b42265ec2cc356.mockapi.io/api/01/dadosAluno', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert('Inscrição enviada com sucesso!');
            } else {
                alert('Erro ao enviar a inscrição.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao enviar a inscrição.');
        }
    } else {
        alert('Preencha todos os campos obrigatórios.');
    }
});