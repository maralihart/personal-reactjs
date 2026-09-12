export default function Illustration({ kind, className = '' }) {
  return (
    <svg className={`bread-illustration ${className}`} viewBox="0 0 360 240" fill="none" aria-hidden="true">
      {kind === 'loaf' && (
        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path className="illustration-fill" d="M68 163v-48c0-40 34-66 92-66h56c50 0 79 30 79 65v49c0 18-33 32-110 32S68 181 68 163Z" />
          <path d="M68 136c20 20 69 29 126 26 44-2 77-11 101-27M80 110c20-24 57-37 108-37 47 0 80 11 96 30M105 150v28m26-22v29m29-25v29m30-26v27m32-30v27m28-33v26m24-34v24" />
          <path d="m129 85 22 34m17-42 19 40m21-39 15 36m19-29 11 25" strokeWidth="7" />
          <path d="M50 207h256M91 216h169" opacity=".45" />
        </g>
      )}
      {kind === 'focaccia' && (
        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path className="illustration-fill" d="m66 106 174-43 59 53-6 53-177 38-50-49Z" />
          <path d="m66 106 52 52 181-42M118 158l-2 49m-40-81 33 33m25 13 148-33" />
          <path d="m101 104 10 5m29-21 10 5m28-14 10 5m28-9 10 5m-98 33 10 5m28-15 10 5m29-12 10 5m24-13 10 5m-90 36 10 5m27-13 10 5m29-11 10 5" strokeWidth="6" />
          <path d="m155 101 9 25m-4-11-12-3m12 2 7-11m48 20 14 18m-7-9 12-1m-12 1-1-12m-99-5-9 21m5-11-9-5m9 5 10-1" />
          <path d="M53 219h250" opacity=".45" />
        </g>
      )}
      {kind === 'starter' && (
        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path className="illustration-fill" d="M116 61h128l-8 29v108c0 15-112 15-112 0V90Z" />
          <path d="M117 61c0-13 128-13 128 0s-128 13-128 0Zm8 66c25 11 86 11 111 0m-112 18c29 12 86 12 112 0" />
          <path d="M139 162h81v28h-81z" />
          <path d="M155 172h49m-39 8h29m-58-75 2 2m25 11 2 2m31-22 2 2m17 25 2 2m-34-16 2 2" strokeWidth="4" />
          <path d="m169 20 7 14m23-16-7 15m-44 0 11 9m57-8-10 9M96 222h168" />
        </g>
      )}
      {(kind === 'pancakes' || kind === 'toast') && (
        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="180" cy="189" rx="133" ry="28" />
          {kind === 'pancakes' ? (
            <>
              <path className="illustration-fill" d="M87 113h185v57c-8 29-177 29-185 0Z" />
              <ellipse className="illustration-fill" cx="180" cy="111" rx="93" ry="30" />
              <path d="M87 135c20 31 168 31 185 0M87 155c20 31 168 31 185 0m-156-44c7-12 35-17 62-17" />
              <path d="m164 82 24-10 29 10-24 11Z" />
              <path d="M151 133v25c0 12 14 12 14 0v-8c0-9 12-9 12 0v26c0 12 15 12 15 0v-33" />
            </>
          ) : (
            <>
              <path className="illustration-fill" d="m79 152 91-67 104 67-87 48Z" />
              <path className="illustration-fill" d="m92 132 74-75c11-11 32-7 44 1l61 51c11 9 10 22 2 28l-85 45-96-40Z" />
              <path d="m115 129 60-59c8-5 18-2 27 4l49 40c7 6 7 11 1 15l-65 35-72-30Z" />
              <path d="m158 113 55 18m-39-34 57 20m-93 15 55 17" />
            </>
          )}
          <path d="M287 71v78m-8-78v27c0 10 17 10 17 0V71m-9 78v38" />
        </g>
      )}
    </svg>
  );
}
