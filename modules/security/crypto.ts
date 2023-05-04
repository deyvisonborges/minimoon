import crypto from 'crypto'

function hashPassword(password: string) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return { salt, hash };
}

function verifyPassword(password: string, salt: string, hash: string) {
  const hashedPassword = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return hash === hashedPassword;
}

// Exemplo de uso:
const password = 'minhaSenha';
const { salt, hash } = hashPassword(password);

console.log('Senha: ' + password);
console.log('Salt: ' + salt);
console.log('Hash: ' + hash);

console.log('Senha verificada: ' + verifyPassword(password, salt, hash));