// Film grain overlay for analog aesthetic
const FilmGrain = () => {
  return (
    <>
      {/* Film grain texture */}
      <div 
        className="fixed inset-0 pointer-events-none z-[100] opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
        aria-hidden="true"
      />
      
      {/* Subtle vignette */}
      <div 
        className="fixed inset-0 pointer-events-none z-[99]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 60%, hsl(150 34% 8% / 0.4) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Paper texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[98] opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Cpath d='M0 0h1v1H0zM10 10h1v1h-1zM20 5h1v1h-1zM30 15h1v1h-1zM40 8h1v1h-1zM50 20h1v1h-1zM60 12h1v1h-1zM70 3h1v1h-1zM80 18h1v1h-1zM90 7h1v1h-1z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default FilmGrain;
