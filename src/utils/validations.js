export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validatePhone(value) {
  if (!value) return 'Telefone obrigatório';
  if (value.replace(/\D/g, '').length < 10) return 'Telefone inválido';
  return true;
}

export function validateName(value) {
  if (!value) return 'Nome obrigatório';
  if (value.length < 3) return 'Digite pelo menos 3 caracteres';
  return true;
}
