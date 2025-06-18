export default function Logo() {
  return (
    <div className="flex justify-center mb-8">
      <div 
        className="relative"
        style={{
          width: '150px',
          height: '150px',
          border: '2px solid rgba(242, 193, 136, 0.4)',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <h1 
          style={{ 
            fontFamily: "'Caveat', cursive",
            color: '#F2C188',
            fontSize: '1.875rem',
            lineHeight: '0.95',
            textAlign: 'center',
            fontWeight: 500,
            letterSpacing: '0.02em',
          }}
        >
          Her<br />
          Intuition<br />
          Lab
        </h1>
      </div>
    </div>
  );
}