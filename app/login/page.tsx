"use client";
export default function Login() {
  return (
    <div
      style={{
        background: 'radial-gradient(ellipse at 60% 20%, #232347 0%, #181824 70%, #10101a 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow effects */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <form
        style={{
          background: 'linear-gradient(135deg, rgba(34,34,54,0.98) 0%, rgba(18,18,32,0.98) 100%)',
          padding: '48px 40px',
          borderRadius: '20px',
          border: '1.5px solid rgba(80,80,160,0.13)',
          boxShadow: `
            0 25px 60px rgba(0,0,0,0.55),
            0 0 0 1px rgba(80,80,160,0.07),
            inset 0 1px 0 rgba(255,255,255,0.07),
            inset 0 -1px 0 rgba(0,0,0,0.25),
            0 0 80px rgba(80,80,160,0.04)
          `,
          minWidth: '380px',
          maxWidth: '420px',
          width: '100%',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          position: 'relative',
          zIndex: 1,
        }}
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Glossy top highlight */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '10%',
            right: '10%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            borderRadius: '50%',
          }}
        />

        {/* Logo / Icon */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #3ecf8e 0%, #5b9bd5 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(62,207,142,0.12), 0 1px 0 rgba(91,155,213,0.10)',
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#111"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
        </div>

        <h2
          style={{
            marginBottom: '8px',
            fontSize: '28px',
            fontWeight: 700,
            color: '#e6f7ff',
            textAlign: 'center',
            letterSpacing: '-0.5px',
            textShadow: '0 2px 8px rgba(62,207,142,0.08)',
          }}
        >
          Welcome Back
        </h2>
        <p
          style={{
            marginBottom: '36px',
            fontSize: '14px',
            color: 'rgba(200,255,255,0.32)',
            textAlign: 'center',
            fontWeight: 400,
          }}
        >
          Sign in to your account to continue
        </p>

        {/* Email Field */}
        <div style={{ marginBottom: '20px' }}>
          <label
            htmlFor="email"
            style={{
              display: 'block',
              marginBottom: '8px',
              color: 'rgba(255,255,255,0.7)',
              fontWeight: 500,
              fontSize: '13px',
              letterSpacing: '0.3px',
              textTransform: 'uppercase',
            }}
          >
            Email
          </label>
          <div style={{ position: 'relative' }}>
            <span
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'rgba(255,255,255,0.3)',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </span>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              style={{
                width: '100%',
                padding: '14px 14px 14px 44px',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.08)',
                fontSize: '15px',
                background: 'rgba(255,255,255,0.04)',
                color: '#fff',
                outline: 'none',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)',
              }}
              onFocus={(e) => {
                e.target.style.border = '1px solid rgba(255,255,255,0.25)';
                e.target.style.background = 'rgba(255,255,255,0.07)';
                e.target.style.boxShadow = '0 0 0 3px rgba(255,255,255,0.05), inset 0 2px 4px rgba(0,0,0,0.2)';
              }}
              onBlur={(e) => {
                e.target.style.border = '1px solid rgba(255,255,255,0.08)';
                e.target.style.background = 'rgba(255,255,255,0.04)';
                e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.2)';
              }}
            />
          </div>
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: '12px' }}>
          <label
            htmlFor="password"
            style={{
              display: 'block',
              marginBottom: '8px',
              color: 'rgba(255,255,255,0.7)',
              fontWeight: 500,
              fontSize: '13px',
              letterSpacing: '0.3px',
              textTransform: 'uppercase',
            }}
          >
            Password
          </label>
          <div style={{ position: 'relative' }}>
            <span
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'rgba(255,255,255,0.3)',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '14px 14px 14px 44px',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.08)',
                fontSize: '15px',
                background: 'rgba(255,255,255,0.04)',
                color: '#fff',
                outline: 'none',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)',
              }}
              onFocus={(e) => {
                e.target.style.border = '1px solid rgba(255,255,255,0.25)';
                e.target.style.background = 'rgba(255,255,255,0.07)';
                e.target.style.boxShadow = '0 0 0 3px rgba(255,255,255,0.05), inset 0 2px 4px rgba(0,0,0,0.2)';
              }}
              onBlur={(e) => {
                e.target.style.border = '1px solid rgba(255,255,255,0.08)';
                e.target.style.background = 'rgba(255,255,255,0.04)';
                e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.2)';
              }}
            />
          </div>
        </div>

        {/* Forgot Password */}
        <div style={{ textAlign: 'right', marginBottom: '28px' }}>
          <a
            href="#"
            style={{
              color: 'rgba(255,255,255,0.4)',
              fontSize: '13px',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = 'rgba(255,255,255,0.8)')}
            onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.4)')}
          >
            Forgot password?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '15px',
            borderRadius: '12px',
            background: 'linear-gradient(145deg, #ffffff, #e8e8e8)',
            color: '#0a0a0a',
            fontWeight: 700,
            fontSize: '15px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 20px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.8)',
            letterSpacing: '0.3px',
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'linear-gradient(145deg, #ffffff, #f0f0f0)';
            e.target.style.boxShadow = '0 8px 32px rgba(255,255,255,0.15), inset 0 1px 0 rgba(255,255,255,0.9)';
            e.target.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'linear-gradient(145deg, #ffffff, #e8e8e8)';
            e.target.style.boxShadow = '0 4px 20px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.8)';
            e.target.style.transform = 'translateY(0)';
          }}
          onMouseDown={(e) => {
            e.target.style.transform = 'translateY(1px)';
            e.target.style.boxShadow = '0 2px 10px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.8)';
          }}
          onMouseUp={(e) => {
            e.target.style.transform = 'translateY(-1px)';
            e.target.style.boxShadow = '0 8px 32px rgba(255,255,255,0.15), inset 0 1px 0 rgba(255,255,255,0.9)';
          }}
        >
          Log In
        </button>

        {/* Divider */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: '28px 0',
            gap: '16px',
          }}
        >
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>
            or
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
        </div>

        {/* Social Login Buttons removed for JWT-only authentication */}

        {/* Sign Up Link */}
        <p
          style={{
            marginTop: '28px',
            textAlign: 'center',
            fontSize: '14px',
            color: 'rgba(255,255,255,0.35)',
          }}
        >
          Don&apos;t have an account?{' '}
          <a
            href="/signup"
            style={{
              color: '#fff',
              fontWeight: 600,
              textDecoration: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.3)',
              paddingBottom: '1px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.target.style.borderBottomColor = 'rgba(255,255,255,0.8)')}
            onMouseLeave={(e) => (e.target.style.borderBottomColor = 'rgba(255,255,255,0.3)')}
          >
            Sign up
          </a>
        </p>
      </form>

      {/* Global styles for placeholder colors */}
      <style>{`
        ::placeholder {
          color: rgba(200,255,255,0.18) !important;
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        input, button {
          font-family: 'Inter', 'Segoe UI', sans-serif;
        }
        /* Prevent autofill from changing background and placeholder color */
        input:-webkit-autofill,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 1000px rgba(34,34,54,0.98) inset !important;
          box-shadow: 0 0 0 1000px rgba(34,34,54,0.98) inset !important;
          -webkit-text-fill-color: #fff !important;
          caret-color: #fff !important;
          transition: background-color 9999s ease-in-out 0s;
        }
      `}</style>
    </div>
  );
}