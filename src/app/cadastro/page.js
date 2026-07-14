'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

export default function Cadastro() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-secondary)' }}>
      <Header />
      
      <div className="container" style={{ display: 'flex', justifyContent: 'center', padding: '60px 24px' }}>
        <div className="glass" style={{ width: '100%', maxWidth: '500px', padding: '40px', borderRadius: 'var(--radius-lg)' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '8px' }}>Crie sua Conta B2B</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '32px' }}>Cadastre-se para ter acesso a preços exclusivos de atacado.</p>
          
          <form onSubmit={(e) => { e.preventDefault(); alert('Cadastro simulado!'); }}>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Nome da Empresa</label>
                <input 
                  type="text" 
                  placeholder="Borala Store LTDA" 
                  style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', outline: 'none' }} 
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>CNPJ</label>
                <input 
                  type="text" 
                  placeholder="00.000.000/0001-00" 
                  style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', outline: 'none' }} 
                />
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>E-mail Corporativo</label>
              <input 
                type="email" 
                placeholder="contato@empresa.com" 
                style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', outline: 'none' }} 
              />
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Crie uma Senha</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', outline: 'none' }} 
              />
            </div>
            
            <button type="submit" className="btn btn-action" style={{ width: '100%', padding: '14px' }}>Criar Conta Comercial</button>
          </form>
          
          <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Já tem uma conta? </span>
            <Link href="/login" style={{ color: 'var(--accent-color)', fontWeight: '600' }}>Fazer Login</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
