// Simple authentication utility using localStorage
// Default credentials: admin / admin123

export const login = (username, password) => {
  // Default admin credentials (change these in production!)
  const validUsername = 'admin';
  const validPassword = 'admin123';

  if (username === validUsername && password === validPassword) {
    const token = btoa(`${username}:${password}`); // Simple base64 encoding
    localStorage.setItem('adminToken', token);
    localStorage.setItem('adminUser', username);
    return { success: true, token };
  }
  return { success: false, error: 'Invalid username or password' };
};

export const logout = () => {
  localStorage.removeItem('adminToken');
  localStorage.removeItem('adminUser');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('adminToken');
};

export const getCurrentUser = () => {
  return localStorage.getItem('adminUser');
};
