export default function Layout({ children }) {
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');
        
        :root {
          --font-serif: 'Cormorant Garamond', Georgia, serif;
          --font-sans: 'Inter', system-ui, sans-serif;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: var(--font-sans);
        }
        
        .font-serif {
          font-family: var(--font-serif);
          font-weight: 500;
        }
      `}</style>
            {children}
        </>
    );
}