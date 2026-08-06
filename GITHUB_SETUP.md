# Instruções para fazer Push no GitHub

## Passo 1: Criar repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Preencha:
   - **Repository name**: `barbearia-saas`
   - **Description**: Sistema de agendamento para barbearias com React + Vite
   - **Visibility**: Public (ou Private, sua escolha)
3. Clique em "Create repository"

## Passo 2: Adicionar origem remota

Copie o SSH ou HTTPS do seu repositório e execute no terminal:

```bash
# Via HTTPS
git remote add origin https://github.com/SEU_Usuario/barbearia-saas.git

# OU via SSH
git remote add origin git@github.com:SEU_Usuario/barbearia-saas.git
```

## Passo 3: Fazer Push da branch main

```bash
# Renomear branch para main (opcional, GitHub agora usa main)
git branch -M main

# Fazer push
git push -u origin main
```

## Verify

Se tudo deu certo, você verá:

```
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

## Próximos commits

Depois que a origem remota estiver configurada, use apenas:

```bash
git add .
git commit -m "Sua mensagem aqui"
git push
```

---

**Dica**: Se tiver erro de autenticação no GitHub com HTTPS, gere um [Personal Access Token](https://github.com/settings/tokens) e use como senha.
