'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

export default function Login() {
  return (
    <main style={{ minHeight: '100dvh', background: 'var(--bg-secondary)' }}>
      <Header />
      
      <div className="container" style={{ display: 'flex', justifyContent: 'center', padding: '80px 24px' }}>
        <div className="glass" style={{ width: '100%', maxWidth: '450px', padding: '40px', borderRadius: 'var(--radius-lg)' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '8px' }}>Bem-vindo de volta!</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '32px' }}>Acesse sua conta para ver preços B2B</p>
          
          <form onSubmit={(e) => { e.preventDefault(); alert('Login simulado!'); }}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>E-mail</label>
              <input 
                type="email" 
                placeholder="seu@email.com" 
                style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', outline: 'none' }} 
              />
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Senha</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', outline: 'none' }} 
              />
            </div>
            
            <button type="submit" className="btn btn-action" style={{ width: '100%', padding: '14px' }}>Entrar</button>
          </form>
          
          <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Não tem uma conta? </span>
            <Link href="/cadastro" style={{ color: 'var(--accent-color)', fontWeight: '600' }}>Cadastre-se</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
